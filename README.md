# PLAY HERE

<div align="center">
    <img src="https://github.com/Futila/playhere/blob/master/playhere.PNG" width="800px" />  
    
</div>

## 💻 Projeto

PlayHere é projecto (desafio) para uma avaliação técnica, é uma webApp que faz a listagem da musicas do momento da Deezer. 

## 💻 Preview
![playhere](https://github.com/Futila/playhere/blob/master/playhere-preview)

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Reactjs](https://reactjs.org)
- [Redux](https://redux.js.org/)
- [Axios](https://axios-http.com/docs/intro)

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/Futila/playhere
$ cd playhere
```

Para iniciá-lo, siga os passos abaixo:
```bash
# Instalar as dependências
$ yarn

# Iniciar o projeto
$ yarn start
```
O app estará disponível no seu browser pelo endereço http://localhost:3000.

Lembrando que será necessário acessar o link (https://cors-anywhere.herokuapp.com/corsdemo) para ter um acesso temporário a servidor demo, de modo que seja possível ter um acesso à API da Deezer. Conforme ilustrado na imagem abaixo, é só clicar no botão indicado no navegador.
<div align="center">
    <img src="https://github.com/Futila/playhere/blob/master/cors-anywhere.PNG" width="800px"/> 
 
</div>


## Dificuldades

- #### Bloqueamento da Requisição pelo CORS
  - Não estava sendo possível fazer as requisições à API da Deezer a partir do meu localhost, o que levou-me a procurar soluções para tal empasse. Dessa forma, fiz o uso do end-point (https://github.com/Rob--W/cors-anywhere/#documentation), que me deu acesso temporário à API da Deezer usando (https://cors-anywhere.herokuapp.com/corsdemo). Para isso, toda vez que o acesso temporário expirasse era só activar novamente e o acesso retomava. abaixo é ilustrado o procedimento
  ![play]![playhere](https://github.com/Futila/playhere/blob/master/playhere.gif)

---

Feito com 💜 by Fernando Futila 👋🏻 