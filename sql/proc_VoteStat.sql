drop procedure if exists VoteStat;
delimiter $
create procedure VoteStat (in uid char(32), in startTime varchar(20), in endTime varchar(20))
begin
    declare totalVotes int default 0;
    declare normalVotes int default 0;
    declare adjustVotes int default 0;
    declare diamondVotes int default 0;
    declare visitCount int default 0;

    declare done boolean default 0;
    declare item char(1);
    declare num int default 0;

    declare cur cursor for select type as t, count(*) as num from vote where (createUserId = uid or p0 = uid or p1 = uid) and (createdAt >= startTime and createdAt <= endTime) group by type;
    declare continue handler for sqlstate '02000' set done = 1;
    
    -- --------------------------------------------------------------------------------------------------------
    open cur;
	while done <> 1 do
		fetch cur into item, num;
        if not done then
            begin
                if item = '0' then
                    set normalVotes = num;
                elseif item = '1' then
                    set adjustVotes = num;
                elseif item = '2' then
                    set diamondVotes = num;
                end if;
            end;
        end if;
	end while;
    close cur;
    set totalVotes = normalVotes + adjustVotes + diamondVotes;
    
    -- 统计浏览量
    set visitCount = (select count(*) as num from visit where (createUserId = uid or p0 = uid or p1 = uid) and (createdAt >= startTime and createdAt <= endTime));
     
    -- 结果输出
    select totalVotes, normalVotes, adjustVotes, diamondVotes, visitCount;
end $
