-- Dropping duplicating database if exist
DROP DATABASE IF EXISTS burgers_db; 

-- Creating database for burgers 
CREATE DATABASE burgers_db;

-- Using burgers database
USE burgers_db;

-- Creating table for burgers
CREATE TABLE burgers
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    burger_name VARCHAR (50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    
);