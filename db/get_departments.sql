SELECT * 
FROM departments d
JOIN items i on i.department=d.id
where d.id=$1; 