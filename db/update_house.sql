update houses set property_name = $1, address = $2, city = $3, state = $4, zip = $5
where house_id = $6;

select * from houses;