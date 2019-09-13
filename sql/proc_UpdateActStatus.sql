drop procedure if exists UpdateActStatus;
delimiter $
-- 更新活动状态
create procedure UpdateActStatus ()
begin
    declare act_id char(32);
    declare now_time datetime default NOW(); -- 当前时间
    declare new_status char(1); -- 新状态
    declare old_status char(1); -- 旧状态
    declare sign_up_start_time datetime;
    declare vote_start_time datetime;
    declare vote_end_time datetime;
    declare last_time datetime;

    declare done boolean default 0;
    declare act_cur cursor for select id, signUpStartTime, voteStartTime, voteEndTime, status from activity where activity.status = '3' or activity.status = '2' or activity.status = '1' or activity.status = '4';
    declare continue handler for sqlstate '02000' set done = 1;
    -- set now_time = date_add(now_time, INTERVAL '-8' hour);
    set last_time = date_add(now_time, INTERVAL '10' day);

    open act_cur;
	while done <> 1 do
	    fetch act_cur into act_id, sign_up_start_time, vote_start_time, vote_end_time, old_status;
            if not done then
                if now_time < sign_up_start_time then set new_status = '1';
                else 
                    begin
                        set new_status = '2';
                        if now_time > vote_start_time then
                            begin
                                set new_status = '3';
                                if now_time > last_time then set new_status = '5';
                                elseif now_time > vote_end_time then set new_status = '4';
                                end if;
                            end;
                        end if;
                    end;
                end if;
                -- 如果状态有变
                if new_status != old_status then
                    update activity set status = new_status where activity.id = act_id;
                end if;
            end if;
    end while;
    close act_cur;
    select now_time, act_id, sign_up_start_time, vote_start_time, vote_end_time, old_status, new_status;
end $
