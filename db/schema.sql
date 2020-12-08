
-- Creating database for burgers 
CREATE DATABASE burgers_db;

-- Using burgers database
USE burgers_db;

-- Creating table for burgers
CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);