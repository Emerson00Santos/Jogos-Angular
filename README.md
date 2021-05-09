# Trabalho Final de Desenvolvimento de Sistemas na Web - COM222

O projeto consiste em uma aplicação web que faz o cadastro de reviews de jogos. 
O usuário pode navegar pelo site, ver os jogos e reviews. Caso queira também poderá cadastrar novos jogos ou cadastrar novas reviews, mas para isso ele deverá estar registrado e logado no sitema. 

* Melhorias futuras:
      </br>
    **Algumas melhorias na interface**; </br>
    **Upload de imagens dos jogos no momento do cadastro.** 

<img alt="Interface" src="https://github.com/Emerson00Santos/Jogos---Angular/blob/main/index.png?raw=true" width="100%" align="center">

<br/>

## :clipboard: Integrantes
* Emerson dos Santos -  emersonsantos@unifei.edu.br | emersonsantos.cep@gmail.com
* Robert Nícolas Mendes - 2018012810 - robertnicolas1505@hotmail.com
* Ygor de Carvalho Andrade - 2018012838 - ygcarvalh@unifei.edu.br

## :computer: Tecnologias
- [Angular](https://angular.io)
- [Node.js](https://nodejs.org/) 
- [Expressjs](https://expressjs.com/pt-br/)
- [Typescript](https://www.typescriptlang.org/)
- [Mongo](https://https://www.mongodb.com/)
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)


##  :card_index: Como executar o projeto
1. Fazer o download das duas pastas do repositório;
2. Na pasta **TrabalhoFinal** abrir o diretório no *cmd* e executar os comandos: 
```bash
npm install component 
```
e

```bash
npm install @angular/cli. 
```
Aguardar a instalação;

3. Após a instalação dos componentes, abrir ambas as pastas **server** e **TrabalhoFinal** no *cmd*;
4. No *cmd* da pasta **server** executar o comando: 

```bash
node app
```
. Aguardar até que o servidor esteja carregado;

5. No *cmd* da pasta **TrabalhoFinal** executar o comando:

```bash
 ng serve --o
 ```
6. O programa será iniciado sozinho.

**OBS: Para acessar a lista de Reviews, deve-se clicar no nome do jogo.**

## Comandos que talvez sejam necessários:
Caso a seção anterior não seja suficiente para rodar o programa, deve-se executar o seguinte passo:

1. Na pasta do projeto **TrabalhoFinal** e na pasta **server**, abrir no *cmd* e executar os comandos:
```bash
1. npm install mongoose
2. npm install express
3. npm install cors
4. npm install router
5. npm install body-parser
```
