<h3 align="center">
	BootCamp Gostack - GoBarber Mobile
</h3>

</div>
<p align="center">
  Essa aplicação foi desenvolvida como projeto principal do Bootcamp Gostack da Rocketseat. <br/>
  O aplicativo mobile do Gobarber permite que os usuários possam marcar agendamentos com os barbeiros e cabeleiros cadastrados na aplicação.
</p>

<br/>

<p align="center">
  <img alt="GitHub watchers" src="https://img.shields.io/github/watchers/AlexBitar80/Gobarber_Mobile?style=social">

  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/AlexBitar80/Gobarber_Mobile">

  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/AlexBitar80/Gobarber_Mobile?style=social">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/AlexBitar80/Gobarber_Mobile">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/AlexBitar80/Gobarber_Mobile">
</p>

<br/>

## :star: Tecnologias usadas nessa aplicação

O projeto está utilizando as seguintes tecnologias:

-  [typescript](https://www.typescriptlang.org/)
-  [react-native](https://reactnative.dev/)
-  [jest](https://jestjs.io/)
-  [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons)
-  [axios](https://github.com/axios/axios)
-  [styled-components](https://styled-components.com/)
-  [react-navigation](https://reactnavigation.org/)
-  [date-fns](https://date-fns.org/)
-  [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)
-  [yup](https://github.com/jquense/yup)
-  [react-native-image-picker](https://github.com/react-native-image-picker/react-native-image-picker)
-  [@react-native-community/datetimepickerk](https://github.com/react-native-datetimepicker/datetimepicker)
-  [@react-navigation/stack](https://reactnavigation.org/docs/hello-react-navigation)
-  [unform](https://github.com/unform/unform)


## :rocket: Como rodar

<h5>
  <strong>Obs: A aplicação possui um  backend, para ter acesso ao       retorno dos dados faça o clone do <a href="https://github.com/AlexBitar80/Gobarber_backend">backend</a> siga o passo a passo para roda-lo e inicie este projeo</strong>
</h5>

Para clonar e rodar esse projeto você vai precisar do [Node](https://nodejs.org/en/) do [Yarn](https://yarnpkg.com/) ou do [Npm](https://www.npmjs.com/get-npm) e do [Git](https://git-scm.com/) instalado na rua máquina.

```bash
# Faça o clone deste repositório para qualquer pasta de sua preferencia
$ git clone https://github.com/AlexBitar80/Gobarber_Mobile appgobarber

# Vá até essa pasta
$ cd appgobarber

# rode esses comandos para instalar as dependências
$ yarn || npm install

# use esses comandos para rodar o Projeto
$ yarn start || npm run start

# use esses comandos para rodar os testes
$ yarn test || npm run test

# caso esteja no emulador rode esses comandos para o backend funcionar
$ adb reverse tcp:3333 tcp:3333
```
<h5>
  <strong>Obs: Se estiver usando o dispositivo físico considere ir na pasta services no arquivo api e colocar o seu ip da maquina no lugar</strong>
</h5>
