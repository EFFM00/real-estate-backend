CREATE DATABASE IF NOT EXISTS realestatedb;
USE realestatedb;

CREATE TABLE Operations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(15) NOT NULL
);

CREATE TABLE Cities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL
);

CREATE TABLE Categories(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    gender CHAR(1) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password TEXT NOT NULL,
    number VARCHAR(25) NOT NULL
);

CREATE TABLE Properties(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(40) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    mainImage TEXT NOT NULL,
    description VARCHAR(255) NOT NULL,
    address VARCHAR(90) NOT NULL,
    idOperation INT NOT NULL,
    FOREIGN KEY (idOperation) REFERENCES Operations(id),
    idCity INT NOT NULL,
    FOREIGN KEY (idCity) REFERENCES Cities(id),
    idCategory INT NOT NULL,
    FOREIGN KEY (idCategory) REFERENCES Categories(id)
);

CREATE TABLE Images(
    id INT AUTO_INCREMENT PRIMARY KEY,
    urlImage TEXT NOT NULL,
    description VARCHAR(50) NOT NULL,
    idProperty INT NOT NULL,
    FOREIGN KEY (idProperty) REFERENCES Properties(id)
);