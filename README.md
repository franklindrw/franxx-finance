![banner](https://github.com/franklindrw/franxx-finance/assets/81038899/958166e2-f369-41b5-8bbe-70bc728e5c6a)

<br />
<h1 align="center">Franxx Finance</h1>
<h4 align="center">Aplicativo para Controle Financeiro Pessoal. App desenvolvido para práticas utilizando React Native.</h4>
<br />

<div id="statusProject" align="center">
<img src="https://img.shields.io/github/license/franklindrw/franxx-finance.svg?style=for-the-badge" />
<img src="https://img.shields.io/github/stars/franklindrw/franxx-finance.svg?style=for-the-badge" />
<img src="https://img.shields.io/github/forks/franklindrw/franxx-finance.svg?style=for-the-badge" />
<img src="https://img.shields.io/github/issues/franklindrw/franxx-finance.svg?style=for-the-badge" />
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=yellow&style=for-the-badge"/>
</div>

<br /><br />

<br />

| :placard: Vitrine.Dev | https://cursos.alura.com.br/vitrinedev/franklindrw |
| -------------  | --- |
| :sparkles: Nome        |  Franxx Finance - Aplicativo de gestão financeira pessoal
| :label: Tecnologias | React-Native, Expo, Typescript
| :rocket: URL         | 
| :fire: Desafio     | Aplicativo para registro e acompanhamento de gastos e receitas do usuário

<br /><br />

<h3 align="center" style="font-size: 2rem"> 
	🚧  Em construção...  🚧
</h3>

<br /><br />

## 🔎 Sobre o Projeto
O Aplicativo tem como objetivo facilitar o registro de gastos e receitas do usuário, assim ajudando a manter o controle sobre suas finanças. Pois com o registro categorizado pelo aplicativo, o mesmo de forma automática gera gráficos e análise para o usuário, assim a pessoa consegue identificar padrões de comportamento financeiro, manter um orçamento mensal controlado. Se tornando assim uma ferramenta essencial para manter o controle financeiro e alcançar seus objetivos financeiros de curto a longo prazo.

### 📱 Aplicativo
O aplicativo foi construído com React-Native utilizando o framework Expo para construção inicial do projeto. Também foi utilizado as bibliotecas:

- __React Navigation__ para as Rotas e navegação entre as telas.
- __Lucide React-Native__ para aplicação de icones no aplicativo.
- __React Hook Form__ para controle de formulários de login, criação de usuários e registros de novas receitas e despesas.
- __Chart-kit__ para criação de gráficos no aplicativo.
- __Vision Camera__ para controle da câmera do device para tirar a foto do usuário.

O mesmo ainda se encontra em construção, sendo que toda a parte visual do aplicativo, navegação entre as telas e controle da câmera já está concluída.

<div style="display: flex; justify-content: space-around; width: 100%;">
  <img src="https://github.com/franklindrw/franxx-finance/assets/81038899/83fcab0a-5aa4-4605-98e6-ac85ead4682d" alt="franxx-finance-app" style="width: 240px; height: 480px" />
  <img src="https://github.com/franklindrw/franxx-finance/assets/81038899/ba91668b-0908-4fd8-b09e-29b884583313" alt="franxx-finance-app" style="width: 240px; height: 480px" />
  <img src="https://github.com/franklindrw/franxx-finance/assets/81038899/ee102847-e7c2-466c-816b-79b964aad8ef" alt="franxx-finance-app" style="width: 240px; height: 480px" />
  <img src="https://github.com/franklindrw/franxx-finance/assets/81038899/4864a37e-2bf5-44e4-88ef-f3e7bbd92257" alt="franxx-finance-app" style="width: 240px; height: 480px" />
</div>

## 🔨 Construindo com
<div id="statusProject" align="left">
 <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
 <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
 <img src="https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37" />
</div>

<br /><br />

## 📄 Notas de Implementação

### Problema na compilação da lib Date Picker (15/04/2024)
Ao instalar os pacotes e fazer o build para Ios foi identificado um erro ao compilar a lib:

```zsh
	❌  (/Users/thiagonagumo/my-projects/franxx-finance-app/node_modules/@react-native-community/datetimepicker/ios/RNDateTimePickerShadowView.m:8:41)

   6 | {
   7 |   if (self = [super init]) {
>  8 |     YGNodeSetMeasureFunc(self.yogaNode, RNDateTimePickerShadowViewMeasure);
     |                                         ^ incompatible function pointer types passing 'YGSize ' (aka 'struct YGSize (struct YGNode *, float, enum YGMeasureMode, float, enum YGMeasureMode)') to parameter of type 'YGMeasureFunc' (aka 'struct YGSize (*)(const struct YGNode *, float, enum YGMeasureMode, float, enum YGMeasureMode)') [-Wincompatible-function-pointer-types]
   9 |   }
  10 |   return self;
  11 | }
```

O mesmo foi corrigido acessando o arquivo `RNDateTimePickerShadowView.m` dentro da pasta *node_modules* e mudando a variável `YGNodeRef` para `YGNodeConstRef` na linha 44.

<br /><br />

## 📥 Instalação

### Requisitos

Após clonar o projeto precisará instalar as aplicações web e server API é necessário ter instalado Node.js, caso não tenha pode baixar <a href="https://nodejs.org/pt-br/">Clicando aqui!</a>

Para a o aplicativo é necessário que tenha instalado o XCode no caso de Sistemas MacOS para compilar para iOS, ou Android Studio para Android

ou também é possível compilar a aplicação para um arquivo .apk(android) e/ou .ipa(ios) usando o expo através do passo-a-passo [aqui!](https://docs.expo.dev/archive/classic-updates/building-standalone-apps/)

com tudo pronto você poderá seguir com os passos abaixo:

1. Abra o cmd e navegue através dele até a pasta server: nlw-esports_2k22/mobile/
    dentro da pasta use o comando abaixo:
    ```
      npm i
    ```
    e aguarde instalar todas as bibliotecas necessárias para rodar o projeto.

__Atenção: Leia as notas de implementação para proseguir__
    
 3. Após instalar as bibliotecas você pode testar a aplicação na máquina usandos o comandos:
    ```
      # para testar usando emulador do XCode (iOS)
      npx expo run:ios

      # para testar usando emulador do Android Studio (Android)
      npx expo run:android
    ```
 4. Caso queira instalar uma compilação no celular ou subir na loja de aplicativos de preferência siga os passos nesse tutorial [aqui!](https://docs.expo.dev/archive/classic-updates/building-standalone-apps/)


### 🖊 Autor

<a href="https://github.com/franklindrw">
<img style="border-radius: 50%; width: 100px" src="https://github.com/franklindrw.png" alt="Foto do Autor"/>
<br />
<sub><b>Franklin Campos</b></sub>
</a>
</br>
<p>Feito por <strong>Franklin Campos</strong> 👋🏻 </br>
Entre em contato!</p>

<div>
<a href="https://www.linkedin.com/in/franklindrw" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
<a href="mailto:franklindrw@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.instagram.com/franklindrw" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
</div>

<br /><br />

### 📋 Licença

<p> ©2024 - Franklin Almeida Campos </br>
This project is MIT licensed.</p>
