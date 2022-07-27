-- creando base de datos
CREATE DATABASE crudnodejsmysql2;

--utilizando bd
use crudnodejsmysql2;

--creando tabla 
CREATE TABLE customer( 
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    ApellidoPaterno VARCHAR(50) NOT NULL,
    ApellidoMaterno VARCHAR(50) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

--mostrar tablas
SHOW TABLES;

--DESCRIBIR TABLA
describe customer;