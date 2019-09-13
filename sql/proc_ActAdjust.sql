drop procedure if exists ActAdjust;
delimiter $
-- 对所有设置为自动调票的活动进行调票
create procedure ActAdjust()
begin
    declare act_id char(32);
    declare done boolean default 0;
    declare act_cur cursor for select id from activity where activity.autoAdjust = '1' and (activity.status = '3' or activity.status = '2');
    declare continue handler for sqlstate '02000' set done = 1;

    open act_cur;
	while done <> 1 do
	    fetch act_cur into act_id;
            if not done then
                call SingleActAdjust(act_id);
                select sleep(5);
            end if;
    end while;
    close act_cur;
end $
