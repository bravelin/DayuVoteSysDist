drop procedure if exists ActStat;
delimiter $
create procedure ActStat (in uid char(32), in startTime varchar(20), in endTime varchar(20))
begin
    -- 各状态活动数的统计
    declare act_all int default 0;
    declare act_notYetBegun int default 0;
    declare act_onGoing int default 0;
    declare act_finished int default 0;
    declare act_closed int default 0;
    declare act_startThisDay int default 0;
    declare act_endThisDay int default 0;
    
    -- 统计各状态的选手
    declare player_total int default 0;
    declare player_normal int default 0;
    declare player_banned int default 0;
    declare player_unaudited int default 0;
    declare player_notPass int default 0;
    
    declare done boolean default 0;
    declare act_status char(1);
    declare act_status_num int default 0;
    declare player_status char(1);
    declare player_status_num int default 0;
    
    declare act_cur cursor for select status as st, count(*) as num from activity where createUserId = uid or p0 = uid or p1 = uid group by status;
    declare player_cur cursor for select status as st, count(*) as num from player where createUserId = uid or p0 = uid or p1 = uid group by status;
    declare continue handler for sqlstate '02000' set done = 1;
    
    -- --------------------------------------------------------------------------------------------------------
    open act_cur;
	while done <> 1 do
		fetch act_cur into act_status, act_status_num;
        if not done then
            begin
                if act_status = '1' then
                    set act_notYetBegun = act_status_num;
                elseif act_status = '2' or act_status = '3' then
                    set act_onGoing = act_onGoing + act_status_num;
                elseif act_status = '4' then
                    set act_finished = act_status_num;
                elseif act_status = '5' then
                    set act_closed = act_status_num;
                end if;
            end;
		end if;
	end while;
    close act_cur;
    
    -- 今天开始的活动
    set act_startThisDay = (select count(*) as num from activity where (status = '1' or status = '2' or status = '3' ) and (createUserId = uid or p0 = uid or p1 = uid) and (signUpStartTime >= startTime and signUpStartTime <= endTime));
    -- 今天结束的活动
    set act_endThisDay = (select count(*) as num from activity where (status = '4' or status = '2' or status = '3' ) and (createUserId = uid or p0 = uid or p1 = uid) and (voteEndTime >= startTime and voteEndTime <= endTime));
    -- 活动总数
    set act_all = act_notYetBegun + act_onGoing + act_finished + act_closed;
    
    -- -----------------------------------------------------------------------------------------------------
    set done = 0;
    open player_cur;
	while done <> 1 do
		fetch player_cur into player_status, player_status_num;
        if not done then
            begin
                if player_status = '1' then
                    set player_unaudited = player_status_num;
                elseif player_status = '2' then
                    set player_normal = player_status_num;
                elseif player_status = '3' then
                    set player_banned = player_status_num;
                elseif player_status = '4' then
                    set player_notPass = player_status_num;
                end if;
            end;
        end if;
	end while;
    close player_cur;
    set player_total = player_unaudited + player_normal + player_banned + player_notPass;
    
    -- 结果输出
    select act_all, act_notYetBegun, act_onGoing, act_finished, act_closed, act_startThisDay, act_endThisDay, player_total, player_unaudited, player_normal, player_banned, player_notPass;
end $
