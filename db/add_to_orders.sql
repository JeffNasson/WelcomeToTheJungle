insert into checkout
select * from cart 
where user_id=$1;