drop procedure if exists SingleActAdjust;
delimiter $
-- 对单个活动进行调票
create procedure SingleActAdjust (in actId char(32))
begin
    declare act_voteCount int default 0;
    declare act_popularity float default 0;
    declare act_createUserId char(32);
    declare act_p1 char(32);
    declare act_p0 char(32);
    declare player_id char(32);
    declare player_adjustVotes int default 0;
    declare player_totalVotes int default 0;
    declare done boolean default 0;
    declare addCount int default 10; -- 每个状态正常的选手(2/3的选手)随机增加1~15票,调票基数
    declare thisAddCount int default 0; -- 随机加的票数
    declare totalAddCount int default 0;
    declare nowTime datetime default NOW();
    declare uuidStr char(36);
    declare limitNum int default 1000; -- 需要调票的选手数目
    declare i int default 0; -- 循环的变量
    
    declare player_cur cursor for select id, adjustVotes, totalVotes from player where player.actId = actId and player.status = '2';
    declare continue handler for sqlstate '02000' set done = 1;
    set limitNum = (select count(*) from player where player.actId = actId and player.status = '2');
    set limitNum = floor(limitNum * 0.6);
    set addCount = (select dictValue from dict where dict.id = '00005') + 0;
    
    select createUserId, p0, p1, voteCount, popularity into act_createUserId, act_p0, act_p1, act_voteCount, act_popularity from activity where id = actId;
    open player_cur;
	while (done <> 1 and i < limitNum) do
		fetch player_cur into player_id, player_adjustVotes, player_totalVotes;
            if not done then
                begin
                    select floor(rand() * addCount * rand() * 0.8) into thisAddCount;
                    if thisAddCount > 0 then -- 如果加的票不为0
                        begin
                            update player set adjustVotes = player_adjustVotes + thisAddCount, totalVotes = player_totalVotes + thisAddCount where player.id = player_id;
                            set totalAddCount = totalAddCount + thisAddCount;
                            -- 增加一条投票记录
                            -- set uuidStr = REPLACE(UUID(), '-', '');
                            -- insert into vote(id, actId, playerId, type, voteNum, voter, createUserId, p0, p1, createdAt, updatedAt) values (uuidStr, actId, player_id, '1', thisAddCount, '00000', act_createUserId, act_p0, act_p1, nowTime, nowTime);
                        end;
                    end if;
                    set i = i + 1;
                end;
            end if;
    end while;
    close player_cur;
    -- 活动表中的票数加totalAddCount
    update activity set voteCount = act_voteCount + totalAddCount, popularity = act_popularity + totalAddCount * 1.5 where id = actId;
    select act_voteCount, totalAddCount, limitNum;
end $
