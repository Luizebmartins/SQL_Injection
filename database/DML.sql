CREATE TABLE usuarios (
    id serial PRIMARY KEY,
    nome varchar(100) NOT NULL,
    login varchar(50) NOT NULL,
    senha varchar(50) NOT NULL
);

CREATE TABLE produtos (
    id serial PRIMARY KEY,
    nome varchar(100) NOT NULL,
    descricao text NOT NULL,
    preco float NOT NULL
)