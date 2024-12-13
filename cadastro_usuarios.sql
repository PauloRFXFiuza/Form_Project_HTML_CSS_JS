CREATE DATABASE usuarios_db;

USE usuarios_db;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telefone VARCHAR(15) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    numero_residencia VARCHAR(10) NOT NULL,
    complemento VARCHAR(255),
    bairro VARCHAR(100) NOT NULL,
    municipio VARCHAR(100) NOT NULL,
    uf CHAR(2) NOT NULL,
    cep VARCHAR(8) NOT NULL,
    rg VARCHAR(9) NOT NULL UNIQUE,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);