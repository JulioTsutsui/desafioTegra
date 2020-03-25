# Sobre
Uma aplicação de carrinho de compras, proposto em forma de desafio pela Tegra.

# Tecnologias usadas
1. Back-End = Node.js junto do framework Express
1. Front-End = EJS para o render de páginas e Bootstrap 4 para estilização
1. Banco de dados = MongoDB

# Requisitos da Aplicação
- :heavy_check_mark: Permitir o cadastro, remoção, alteração e listagem de livros
  - :heavy_check_mark: Cadastro de novos livros com os seguintes dados: Nome do livro, Autor(es), Preço e Quantidade em Estoque
  - :heavy_check_mark: Remoção de livros, a partir do seu ID
  - :heavy_check_mark: Alteração de valores de um livro
  - :heavy_check_mark: Listagem de livros
- :heavy_check_mark: Permitir adicionar livros ao carrinho de compras
- :heavy_check_mark: Permitir remover livros do carrinho de compras
- :heavy_check_mark: Exibir o valor subtotal de cada livro no carrinho de compras
- :heavy_check_mark: Exibir o valor total do carrinho de compras
- :heavy_check_mark: Ao adicionar livros ao carrinho de compras, exibir um erro e impedir que o usuário tente adicionar uma quantidade de livros maior do que o disponível em estoque

# Diferenciais
- :heavy_check_mark: Utilizar algum banco de dados (MySQL, banco de dados em memória, etc). Inclua as queries de criação da tabela, sequence, etc para a configuração do mesmo, caso seja necessário.
- :x: Implementar a seguinte funcionalidade de aplicação de cupom de desconto: no carrinho de compras, caso o usuário inclua o cupom de desconto **TrabalheNaTegra**, proporcionar 10% de desconto nos livros do autor “Martin Fowler”, e 20% de desconto nos livros do autor “Robert C. Martin”.
- :x: Implementar a seguinte funcionalidade de filtro na listagem: aplicar filtro por nome do autor
- :heavy_check_mark: Tratamento de erros
- :x:Implementar testes em código (teste unitário, integração, etc)

# Como utilizar
**Você precisa ter o Node.js instalado em sua máquina**.
Entre na raiz do projeto e execute o seguinte comando:
```javascript
npm install // esse comando irá instalar todos os módulos necessários para o projeto
```

Antes de iniciar o projeto, você precisará inserir um link de conexão a um banco de dados MongoDB,assim como o nome do banco que passará a ser utilizado. O arquivo se chama **configs.json** e estará na pasta raiz do projeto, igual ao código abaixo:
```json
{
   "connection":"[INSERIR LINK DE CONEXÃO AO BANCO MONGODB]",
   "dbname":"[INSERIR NOME DO BANCO A SER UTILIZADO]"
}
```

Em seguida, para iniciar a aplicação utilize o comando:
```javascript
node . // esse comando irá iniciar o projeto
```
