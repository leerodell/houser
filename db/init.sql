drop table if exists products;

create table houses (
    house_id serial primary key,
    property_name text,
    address text,
    city text,
    state text,
    zip number
);

insert into houses (property_name, address, city, state, zip)
VALUES
('Big house', '22 lane', 'amsterdam', 11235),
('Humble home', '33 drive', 'tokyo', 31415);