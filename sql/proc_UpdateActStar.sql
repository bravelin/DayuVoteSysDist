drop procedure if exists UpdateActStar;
delimiter $
-- 更新活动的今日之星
create procedure UpdateActStar ()
begin
    declare act_id char(32);
    declare new_star_player char(32); -- 新的今日之星
    declare old_star_player char(32); -- 旧的今日之星
    declare done boolean default 0;
    declare act_cur cursor for select id, starPlayer from activity where activity.status = '3' or activity.status = '2' or activity.status = '4';
    declare continue handler for sqlstate '02000' set done = 1;
    open act_cur;
	while done <> 1 do
	    fetch act_cur into act_id, old_star_player;
            if not done then
                 set new_star_player = (select id from player where player.actId = act_id and player.status = '2' order by totalVotes desc limit 1);
                 if new_star_player is not null then
					if old_star_player is null then
						update activity set starPlayer = new_star_player where id = act_id;
						elseif old_star_player != new_star_player then update activity set starPlayer = new_star_player where id = act_id;
					end if;
				 end if;
            end if;
    end while;
    close act_cur;
end $
