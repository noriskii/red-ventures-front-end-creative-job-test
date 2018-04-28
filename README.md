# <span style="color:#E34949">Red</span>|Ventures - Front End Creative Test

## O que é este repositório?

Este repositório é um teste oferecido pela [Red Ventures Brasil](https://www.redventures.com/) com o intuito de entender como o Desenvolvedor utiliza sua criatividade e conhecimento para criar uma página imersiva e funcional.

## Sobre o que é este Teste?

O intuito era simples, seguir a **Identidade Visual** entregue pela Red Ventures, afim de desenvolver um site para reservas de hotel em Charlotte (Sede da Empresa), consumindo um ajax e apresentando os preços e informações referentes aos hotéis, baseando-se nas datas entregues pelo usuário.

## E como você desenvolveu o Teste? Que arquitetura usou?

Para o Desenvolvimento, eu segui um cronograma de foco inicial em um Front-End Responsivo segundo padrões mobile-first, enquanto no css utilizei uma arquitetura [rscss](http://rscss.isso). Após o término do Front-End, separei o código fonte para que existisse uma pasta com o demo do projeto disponível apenas em html e css.

O próximo passo era o desenvolvimento das funcionalidades, utilizando-se do Javascript, onde desenvolvi sob um modelo MVC, utilizando conceitos de programação funcional (map, reduce) e orientação a objetos, desenvolvendo um Bind entre os dados (model) e a view.

## Como posso começar a usar o seu código?

Para utilizar o código, é simples. Basta fazer o **Download** do projeto deste [github](https://github.com/noriskii/red-ventures-front-end-creative-job-test), ou fazer o clone através do seguinte comando na _Command Line_:

```bash
git clone https://github.com/noriskii/red-ventures-front-end-creative-job-test.git
```

Dentro da pasta do projeto, encontram-se as seguintes pastas:

- **client/ ->** Onde fica o código da aplicação executada pelo servidor, pasta **server/**;
- **server/ ->** Servidor, que disponibiliza uma API e também serve o código fonte e suas funcionalidades, localizado na pasta **client/**;
- **demo/ ->** Onde se encontra o HTML e CSS que pode ser executado fora do servidor, apenas para visualização, sem funcionalidade. 

Para iniciar o servidor basta executar os seguintes comandos (estando na pasta da aplicação):

```bash
cd server/
npm start || node start
```

Após isso, já podemos acessar a seguinte URL no Browser:

http://localhost:3000/

Onde veremos a seguinte página, já funcionando!!

![Front](https://i.imgur.com/fVwtfP6.png)

Digite as datas de entrada e saída de sua estadia e aperte no botão **Search Hotels** e veja a mágica acontecer!!

## O que a infraestrutura do código pode me oferecer, além do que já esta pronto?

Você pode encontrar coisas muito uteís nesse projeto, que vou explicar a seguir:

- Na pasta **demo/** você tem um protótipo pronto para um site de hotel, com os hotéis já dispostos, sendo necessário apenas algumas mudanças para seu uso;
- Na pasta **client/** você vai encontrar uma estrutura completa para desenvolver uma aplicação em javascript, a estrutura de pastas está pronta, basta você incrementar o que deseja;
- Na pasta **server/app/** você encontra duas outras pastas, a **api/** e a **routes/** que juntas podem dar a você a capacidade de desenvolver uma API, seja para disponibilizar os Components da sua aplicação ou até dados a serem usados pela própria aplicação;
- Na pasta **server/** você encontra o _server.js_ que é uma infraestrutura bem básica para subir um servidor simples para servir sua aplicação, utilizando _express.js_.
- No Javascript da View de Hotéis (HotelView.js), encontram-se os códigos referentes ao desenvolvimento de um filtro para os Hoteis e um código para desenvolver uma 2nd Layer;
- Os conceitos de _Bind_ e _Polyfill_ são utilizados nessa aplicação, assim como _MVC_ e _Orientação a Objetos_ você pode estuda-la para entende-los :smile: ;

##### * O Código foi desenvolvido com HTML, CSS e Javascript, e o servidor se encontra em Node.JS

## Quais foram suas dificuldades durante o desenvolvimento?

Creio que a maior dificuldade é manter a "sanidade" com o tanto de conceito que pula na sua cabeça quando você começa a pensar nos detalhes que tem que implementar no prazo estipulado.

Apesar de ter "penado" em conceitos que já havia visto, creio que o principal atributo que é necessário para o desenvolvimento de "testes" assim é a **CALMA**.

## Agradecimentos:

- Primeiramente as pessoas que me apoiaram ao saber do teste.
- Segundo ao [@Alura](https://twitter.com/aluraonline) que com os Cursos de **Javascript Avançado** me deu embasamento técnico para desenvolver a aplicação.
- E por ultimo, quero fazer uma menção a [Jake Giles-Phillips](http://jakegilesphillips.co.uk/) que disponibiliza no [Codepen](https://codepen.io/jakegilesphillips/pen/jBrMeO?editors=0010) um ótimo calendário para "Reservas" desenvolvido em HTML, SCSS e JS do qual não tive tempo de "adaptar" a página deste teste, mas que achei incrível.


#### Made with :heart: and HTML, CSS and Javascript by Lucas Augusto.
