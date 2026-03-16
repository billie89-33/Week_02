TRUNCATE TABLE category RESTART IDENTITY CASCADE;

INSERT INTO category (category_id,category_name) VALUES
('1', 'Tv'),
('2', 'Headphones'),
('3', 'Washing machine');