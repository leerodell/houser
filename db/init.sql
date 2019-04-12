drop table if exists houses;

create table houses (
    house_id serial primary key,
    property_name text,
    address text,
    city text,
    state text,
    zip integer
);

insert into houses (property_name, address, city, state, zip)
VALUES
('Big house', '22 lane', 'amsterdam', 'netherlands', 11235),
('Humble home', '33 drive', 'tokyo', 'japan', 31415);