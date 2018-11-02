DELETE 
FROM cart
WHERE user_id=$1 and item_id=$2;

SELECT * FROM cart WHERE user_id=$1;