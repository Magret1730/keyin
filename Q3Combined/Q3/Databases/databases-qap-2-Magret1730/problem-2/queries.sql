-- Problem 2: Online Store Inventory and Orders System

-- Requirements
-- 1. Create Tables
-- a. Students Table
CREATE TABLE IF NOT EXISTS products(
	product_id SERIAL PRIMARY KEY,
	product_name TEXT,
    price DECIMAL(10, 2),
    stock_quantity INT
);

-- b. Customers Table
CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email TEXT
);

-- c. Orders Table
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id),
    order_date DATE
);

-- d. Order_Items Table
CREATE TABLE order_items (
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT,
    line_total DECIMAL(10, 2),
    CONSTRAINT pk_order_items PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- 2. Insert Data
-- Insert at least 5 products, 4 customers, and 5 orders (each order should have at least two items ordered)
-- Inserting products
INSERT INTO products (product_name, price, stock_quantity) VALUES
('Laptop', 1500, 20),
('Smartphone', 800, 50),
('Headphones', 100, 100),
('Monitor', 400, 30),
('Keyboard', 120, 75);

-- Inserting customers
INSERT INTO customers (first_name, last_name, email) VALUES
('Emily', 'Brown', 'emily.brown@example.com'),
('Michael', 'Green', 'michael.green@example.com'),
('Sarah', 'White', 'sarah.white@example.com')
('David', 'Clark', 'david.clark@example.com');

-- Inserting orders
INSERT INTO orders (customer_id, order_date) VALUES
(1, '2024-10-01'),
(2, '2024-10-02'),
(3, '2024-10-03')
(4, '2024-10-04'),
(1, '2024-10-05');

-- Inserting order items
INSERT INTO order_items (order_id, product_id, quantity, line_total) VALUES
(1, 1, 1, 1500),
(1, 3, 2, 200),
(2, 2, 1, 800),
(2, 4, 1, 400),
(3, 5, 1, 120),
(3, 1, 1, 1500);

-- Task 1
-- a. Retrieve the names and stock quantities of all products.
SELECT product_name , stock_quantity FROM products;

-- b. Retrieve the product names and quantities for one of the orders placed.
SELECT products.product_name, order_items.quantity
FROM order_items
JOIN products ON order_items.product_id = products.product_id
WHERE order_items.order_id = 3; 

--  c. Retrieve all orders placed by a specific customer (including the ID’s of what was ordered and the quantities).
SELECT orders.order_id, products.product_name, order_items.quantity
FROM orders
JOIN order_items ON orders.order_id = order_items.order_id
JOIN products ON order_items.product_id = products.product_id
WHERE orders.customer_id = 2;

-- Task 2
-- Perform an update to simulate the reducing of stock quantities of items after a customer places an order. Please
-- describe or indicate which order you are simulating the reducton for

-- Reducing stock quantities for order_id 1
-- This update reduces the stock quantities of products based on the items ordered in order_id 1.
UPDATE products
SET stock_quantity = stock_quantity - oi.quantity
FROM order_items oi
WHERE products.product_id = oi.product_id AND oi.order_id = 1;

-- Task 3
-- Remove one of the orders and all associated order items from the system.
DELETE FROM order_items
WHERE order_id = 2;

-- This fully remove the order itself
DELETE FROM orders
WHERE order_id = 2;
