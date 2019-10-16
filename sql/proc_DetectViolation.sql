-- 检测违规刷票
drop procedure if exists DetectViolation;
delimiter $
create procedure DetectViolation ()
begin
    declare last_time datetime;
    declare player_id char(32);
    declare curr_count int; -- 当前的异常值
    declare vote_count int; -- 最近6分钟票数统计,如果超过300票,判定为异常
    declare done boolean default 0;
    declare player_cur cursor for select p.id, p.violationCount from player as p, activity as a where p.status = '2' and p.actId = a.id and a.status = '3';
    declare continue handler for sqlstate '02000' set done = 1;
    set last_time = date_add(now(), INTERVAL '-6' minute);
    open player_cur;
    while done <> 1 do
        fetch player_cur into player_id, curr_count;
            if not done then
                set vote_count = (select count(*) from vote where vote.playerId = player_id and type='0' and createdAt > last_time);
                if vote_count > 300 then
                    begin
                        set curr_count = curr_count + 1;
                        update player set violationCount = curr_count where id = player_id;
                        if curr_count > 5 then
		update player set status = '3', prohibitTime = now() where id = player_id;
                        end if;
                    end
                end if;
            end if;
    end while;
    close player_cur;
end $
