-- 解除违规刷票而被禁止的选手
drop procedure if exists RelieveViolation;
delimiter $
create procedure RelieveViolation ()
begin
    declare player_id char(32);
    declare done boolean default 0;
    declare player_cur cursor for select p.id from player as p, activity as a where p.status = '3' and p.actId = a.id and a.status = '3' and p.prohibitTime is not null;
    declare continue handler for sqlstate '02000' set done = 1;
    set last_time = date_add(now(), INTERVAL '-60' minute);
    open player_cur;
    while done <> 1 do
        fetch player_cur into player_id;
            if not done then
                if prohibitTime <  then
                        set curr_count = curr_count + 1;
                        update player set violationCount = curr_count where id = player_id;
                        if curr_count > 5 then
                            update player set status = '3', prohibitTime = now() where id = player_id;
                        end if;
                end if;
            end if;
    end while;
    close player_cur;
end $
