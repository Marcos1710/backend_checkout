# Checkouts

## Projeto finalizado! 🚀

### Features

- [x] Listagem das movimentações
- [x] Cadastro de movimentação

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [node](https://nodejs.org/pt-br/)
- [MySQL](https://dev.mysql.com/downloads/)
- [XAMPP](https://www.apachefriends.org/pt_br/index.html)

OBS: É possível utilizar o MySQL do XAMPP também, caso prefira.

Crie um banco de dados com o seguinte nome 'ecommerce' 
O .env não está no arquivo .gitignore, então não precisa selecionar
nenhum tipo de configuração adicional.

O banco de dados padrão é o MySQL, mas caso tenha o PostgresSQL instalado na máquina
é possível utilizalo também alterando no .env a variavel 'DB_CONNECTION' para o valor 'pg'

```bash
# Endpoint disponível
http://127.0.0.1:3333/v1/checkouts?page=page&offset=offset - Lista todos os checkouts cadastrados
http://127.0.0.1:3333/v1/checkouts - Cadastra novos checkouts
```

### 🛠 Rodando o backend e/ou os testes

```bash
# Vá para a pasta do projeto
# Instale as dependências
$ npm i

# Execute a aplicação em modo de desenvolvimento (Com o banco de dados já criado, esse comando rodará todas as migrations e as seeders)
$ npm run dev

# Rollback migrations rode o seguinte comando 
$ node ace migration:rollback
```

### 🛠 Tecnologias utilizadas

As seguintes tecnologias foram usadas na construção do projeto:

- [node](https://nodejs.org/pt-br/)
- [MySQL](https://dev.mysql.com/downloads/)
- [AdonisV5](https://adonisjs.com/)

### Autor

---

# Marcos Santos

[GitHub](https://github.com/Marcos1710)
[linkedin](https://www.linkedin.com/public-profile/in/marcos-samuel-1710)
