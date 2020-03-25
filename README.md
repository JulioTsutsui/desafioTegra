# Sobre
Uma aplicação de carrinho de compras, proposto em forma de desafio pela Tegra.

# Tecnologias usadas
1. Back-End = Node.js
1. Front-End = Bootstrap 4
1. Banco de dados = MongoDB

# Requisitos da Aplicação
- [x]Permitir o cadastro, remoção, alteração e listagem de livros
  - [x]Cadastro de novos livros com os seguintes dados: Nome do livro, Autor(es), Preço e Quantidade em Estoque
  - [x]Remoção de livros, a partir do seu ID
  - [x]Alteração de valores de um livro
  - [x]Listagem de livros
- [x]Permitir adicionar livros ao carrinho de compras
- [x]Permitir remover livros do carrinho de compras
- [x]Exibir o valor subtotal de cada livro no carrinho de compras
- [x]Exibir o valor total do carrinho de compras
- [x]Ao adicionar livros ao carrinho de compras, exibir um erro e impedir que o usuário tente adicionar uma quantidade de livros maior do que o disponível em estoque

# Diferenciais
- [x]Utilizar algum banco de dados (MySQL, banco de dados em memória, etc). Inclua as queries de criação da tabela, sequence, etc para a configuração do mesmo, caso seja necessário.
- Implementar a seguinte funcionalidade de aplicação de cupom de desconto: no carrinho de compras, caso o usuário inclua o cupom de desconto **TrabalheNaTegra**, proporcionar 10% de desconto nos livros do autor “Martin Fowler”, e 20% de desconto nos livros do autor “Robert C. Martin”.
- Implementar a seguinte funcionalidade de filtro na listagem: aplicar filtro por nome do autor
- [x]Tratamento de erros
- Implementar testes em código (teste unitário, integração, etc)

# Como utilizar
**Você precisa ter o Node.js instalado em sua máquina**.
Entre na raiz do projeto e execute o seguinte comando:
```javascript
	npm install // esse comando irá instalar todos os módulos necessários para o projeto
```

Antes de iniciar o projeto, você precisará inserir um link de conexão a um banco de dados MongoDB. O arquivo se chama **configs.json** e estará na pasta raiz do projeto, igual ao código abaixo:
```json
	{
		"connection":"[INSERIR LINK DE CONEXÃO AO BANCO MONGODB]"
	}
```

Em seguida, para iniciar a aplicação utilize o comando:
```javascript
	node . // esse comando irá iniciar o projeto
```