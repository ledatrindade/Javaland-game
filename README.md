# 🏡 Javaland — Jogo Educativo de Java

> 🇧🇷 Versão em português  
> 🇺🇸 English version available below

Javaland é um jogo educativo desenvolvido em **React + Vite** com o objetivo de ensinar conceitos fundamentais de **Java** de forma lúdica, progressiva e visual.

A proposta do projeto é transformar o aprendizado de programação em uma jornada: o jogador se muda para **Javaland**, uma vila antiga, tecnológica e cheia de histórias, onde cada conceito de Java aprendido ajuda na construção de uma casa.

A cada nível concluído, o jogador desbloqueia uma nova recompensa visual para a casa, como cerca, portinha, flores, sofá, TV, banheiro, cozinha, quarto e pet.

**Stack:** React • Vite • JavaScript • CSS • localStorage

---

## 🎯 Objetivo do projeto

O objetivo do Javaland é ensinar Java para iniciantes por meio de uma experiência mais interativa e menos abstrata.

Em vez de apresentar apenas teoria e exercícios soltos, o jogo conecta cada conteúdo a uma parte da construção da casa, criando uma sensação de progresso visual e narrativo.

O jogador aprende conceitos como:

- estrutura básica de um programa Java;
- variáveis e tipos;
- entrada e saída de dados;
- imports;
- operadores;
- condicionais;
- laços de repetição;
- métodos;
- arrays;
- classes e objetos;
- encapsulamento;
- construtores;
- herança e polimorfismo;
- Strings;
- ArrayList;
- exceções;
- arquivos;
- APIs;
- pacotes;
- boas práticas.

---

## 📖 História do jogo

O jogador chega em **Javaland**, uma vila antiga e tecnológica onde tudo funciona por comandos bem escritos.

Na vila, existem personagens simbólicos que representam conceitos da programação, como:

- **Seu Main**, que explica a entrada dos programas Java;
- **Dona Variável**, que organiza os dados em baús;
- **Seu Operador**, que mede, compara e calcula;
- **Seu If**, o porteiro das decisões;
- **Seu Loop**, que repete tarefas pela vila;
- **Dona String**, especialista em textos e mensagens;
- **Dona API**, bibliotecária das ferramentas prontas;
- **Seu Package**, responsável pela organização da vila.

A cada desafio concluído, a casa do jogador ganha uma nova parte.

---

## ✨ Funcionalidades principais

- Tela inicial com opção de novo jogo.
- Solicitação do nome do jogador antes do início.
- História introdutória de Javaland.
- Menu principal com níveis bloqueados e liberados.
- Sistema de progresso salvo no navegador.
- Níveis organizados por dificuldade crescente.
- Cada nível possui explicação, exemplo e desafios.
- Desafios com múltipla escolha, completar código e escrever código.
- Validação flexível para respostas de código.
- Caixa de ferramentas com dicas desbloqueadas após o tutorial.
- Recompensas visuais a cada nível.
- Escolha entre gato ou cachorro.
- Cenas diferentes para cachorro e gato.
- Trilha sonora lo-fi em loop.
- Efeitos sonoros para clique, acerto, erro, aviso, recompensa e conclusão.
- Painel de configurações com controle de áudio.
- Suporte a idioma português e inglês.
- Salvamento local com `localStorage`.

---

## 🛠️ Tecnologias utilizadas

- React
- Vite
- JavaScript
- CSS
- HTML
- localStorage

---

## 🚀 Como rodar o projeto localmente

### 1️⃣ Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

### 2️⃣ Entre na pasta do projeto

```bash
cd javaland-game
```

### 3️⃣ Instale as dependências

```bash
npm install
```

### 4️⃣ Rode o projeto

```bash
npm run dev
```

### 5️⃣ Abra no navegador

O Vite normalmente exibirá um endereço parecido com:

```bash
http://localhost:5173
```

---

## 📦 Scripts disponíveis

```json
{
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

### `npm run dev`

Inicia o projeto em ambiente de desenvolvimento.

### `npm run build`

Gera a versão final para produção.

### `npm run preview`

Permite visualizar localmente a versão gerada pelo build.

### `npm run lint`

Executa a verificação de padrões do código com ESLint.

---

## 🗂️ Estrutura principal do projeto

```txt
src/
├── assets/
│   ├── house/
│   │   ├── rewards/
│   │   └── scenes/
│   ├── icons/
│   └── sounds/
│
├── components/
│   ├── AlertMessage.jsx
│   ├── Button.jsx
│   ├── ChallengeQuestion.jsx
│   ├── CodeBlock.jsx
│   ├── GameCard.jsx
│   ├── HousePreview.jsx
│   ├── ProgressBar.jsx
│   ├── SoundSettings.jsx
│   └── ToolboxHint.jsx
│
├── context/
│   ├── languageContext.js
│   └── LanguageProvider.jsx
│
├── data/
│   ├── levels.pt.json
│   ├── levels.en.json
│   └── uiText.js
│
├── hooks/
│   └── useLanguage.js
│
├── pages/
│   ├── FinalScreen.jsx
│   ├── LevelScreen.jsx
│   ├── MainMenu.jsx
│   ├── PlayerNameScreen.jsx
│   ├── RewardScreen.jsx
│   ├── StartScreen.jsx
│   └── StoryScreen.jsx
│
├── services/
│   ├── challengeValidator.js
│   ├── languageStorage.js
│   ├── progressStorage.js
│   └── soundPlayer.js
│
├── styles/
│   ├── animations.css
│   ├── global.css
│   └── theme.css
│
├── App.jsx
└── main.jsx
```

---

## 🧩 Organização dos níveis

| Nível | Tema | Recompensa |
|---:|---|---|
| 0 | Tutorial de Javaland | 🧰 Caixa de ferramentas |
| 1 | Estrutura básica de um programa Java | 🪵 Cerca |
| 2 | Variáveis e tipos primitivos | 🚪 Portinha da cerca |
| 3 | Entrada, saída e imports | 🐾 Casinha do pet |
| 4 | Operadores em Java | 🌸 Flores |
| 5 | Condicionais | 🐶🐱 Escolha do pet |
| 6 | Laços de repetição | 🛋️ Sofá |
| 7 | Métodos em Java | 🪑 Mesinha de centro |
| 8 | Arrays e listas | 📚 Estante de livros |
| 9 | Classes e objetos | 📺 TV |
| 10 | Encapsulamento | 🚽 Privada |
| 11 | Construtores | 🚰 Pia do banheiro |
| 12 | Herança e polimorfismo | 🚿 Chuveiro |
| 13 | Strings em Java | 🍽️ Mesa |
| 14 | ArrayList e coleções | 🧼 Pia da cozinha |
| 15 | Tratamento de exceções | 🔥 Fogão |
| 16 | Arquivos em Java | 🧊 Geladeira |
| 17 | APIs e bibliotecas em Java | 🧺 Estantes da cozinha |
| 18 | Pacotes, imports e organização | 🛏️ Cama |
| 19 | Boas práticas em Java | 🪴 Mesinha lateral |
| 20 | Revisão final de Javaland | 🚪 Armário |

---

## 🎮 Sistema de desafios

Cada nível possui três partes principais:

1. **Explicação**  
   Apresenta o conteúdo de forma narrativa e didática.

2. **Exemplo**  
   Mostra um exemplo prático relacionado ao conceito do nível.

3. **Desafios**  
   O jogador responde perguntas para avançar.

Os desafios podem ser de tipos diferentes:

```txt
multiple-choice
complete-code
write-code
true-false
```

---

## ✅ Validação das respostas

O arquivo responsável pela validação é:

```txt
src/services/challengeValidator.js
```

Ele compara a resposta do jogador com a resposta esperada.

Para desafios de escrita de código, a validação tenta ser mais flexível, normalizando:

- espaços extras;
- quebras de linha;
- espaços ao redor de chaves;
- espaços ao redor de parênteses;
- espaços ao redor de ponto e vírgula;
- espaços ao redor de operadores.

Isso evita que o jogador erre apenas por formatação diferente.

---

## 💾 Sistema de progresso

O progresso é salvo no navegador usando `localStorage`.

Arquivo responsável:

```txt
src/services/progressStorage.js
```

Dados salvos:

```js
{
  playerName: '',
  currentLevel: 0,
  completedLevels: [],
  unlockedItems: [],
  selectedPet: null,
  toolboxUnlocked: false
}
```

Isso significa que:

- o progresso permanece após atualizar a página;
- cada navegador/dispositivo tem seu próprio progresso;
- não existe banco de dados no MVP;
- se o usuário limpar os dados do navegador, o progresso é perdido.

---

## 🌎 Sistema de idioma

O Javaland possui suporte para português e inglês.

Arquivos principais:

```txt
src/data/levels.pt.json
src/data/levels.en.json
src/data/uiText.js
src/services/languageStorage.js
src/context/LanguageProvider.jsx
src/context/languageContext.js
src/hooks/useLanguage.js
```

### Conteúdo dos níveis

Os textos dos níveis ficam em:

```txt
levels.pt.json
levels.en.json
```

### Textos fixos da interface

Os textos fixos de botões, alertas, menus e configurações ficam em:

```txt
uiText.js
```

### Idioma salvo

O idioma selecionado é salvo no `localStorage` pela chave:

```txt
javaland-language
```

---

## 🔊 Sistema de áudio

O áudio é controlado pelo arquivo:

```txt
src/services/soundPlayer.js
```

Ele controla:

- som de clique;
- som de acerto;
- som de erro;
- som de aviso;
- som de recompensa;
- som de conclusão de nível;
- som de escolha do cachorro;
- som de escolha do gato;
- som final;
- trilha lo-fi de fundo;
- volume dos efeitos;
- volume da música;
- ligar/desligar música;
- ligar/desligar efeitos.

Estrutura esperada:

```txt
src/assets/sounds/
├── click.mp3
├── correct.mp3
├── wrong.mp3
├── warning.mp3
├── reward.mp3
├── level-complete.mp3
├── pet-choice-dog.mp3
├── pet-choice-cat.mp3
├── final-complete.mp3
└── background/
    └── lofi-theme.mp3
```

---

## 🎨 Assets visuais

As imagens são separadas em dois grupos principais:

### 🎁 Recompensas individuais

```txt
src/assets/house/rewards/
```

Exemplo:

```txt
reward-toolbox.png
reward-fence.png
reward-sofa.png
reward-tv.png
reward-bed.png
```

Essas imagens aparecem na tela de recompensa logo após concluir um nível.

### 🏗️ Cenas completas da construção

```txt
src/assets/house/scenes/
```

Exemplo:

```txt
scene-empty-terrain.png
scene-toolbox.png
scene-fence.png
scene-outside-dog.png
scene-outside-cat.png
scene-final-complete-dog.png
scene-final-complete-cat.png
```

Essas imagens aparecem no painel de construção do menu.

A partir da escolha do pet, as cenas passam a ter duas versões:

```txt
dog
cat
```

---

## ☁️ Deploy

Para o MVP, a opção recomendada é a **Vercel**.

O projeto é um front-end React com Vite, sem backend e sem banco de dados, então o deploy é simples.

### 🧪 Antes do deploy

Rode:

```bash
npm run build
```

Se o build funcionar sem erro, o projeto está pronto para publicar.

### 🌐 Plataformas possíveis

- Vercel
- Netlify
- GitHub Pages

Para este MVP, Vercel é uma boa opção por ser simples, rápida e integrada ao GitHub.

---

## ⚠️ Limitações do MVP

Este projeto ainda não possui:

- login de usuários;
- banco de dados;
- painel de professor;
- ranking;
- salvamento na nuvem;
- correção real de código Java;
- execução de código Java dentro do navegador.

A validação atual compara respostas esperadas, o que é suficiente para um MVP educativo inicial.

---

## 🔮 Melhorias futuras

Algumas ideias para evolução:

- Criar backend para salvar progresso por usuário.
- Adicionar login.
- Criar painel do professor.
- Adicionar ranking.
- Criar relatórios de desempenho.
- Permitir que o aluno execute código Java real.
- Criar mais fases por conceito.
- Adicionar animações na construção.
- Melhorar acessibilidade.
- Adicionar modo mobile otimizado.
- Criar conquistas extras.
- Permitir personalização da casa.
- Adicionar mais personagens da vila.
- Adicionar narração ou falas dos personagens.

---

## 🧼 Boas práticas usadas no projeto

- Separação por componentes.
- Separação por páginas.
- Serviços isolados para progresso, idioma, áudio e validação.
- Dados dos níveis em JSON.
- Textos fixos separados em arquivo de tradução.
- Suporte a múltiplos idiomas.
- Salvamento local.
- Assets organizados por função.
- Componentes reutilizáveis.

---

## 📌 Status do projeto

Este projeto está em versão MVP.

A proposta principal já está implementada:

- jornada educativa;
- níveis progressivos;
- recompensas visuais;
- escolha de pet;
- sons;
- idioma;
- progresso local.

As próximas etapas devem focar em refinamento, testes, deploy e coleta de feedback dos usuários.

---

## 👩‍💻 Autora

Projeto desenvolvido por **Leda Trindade** como um MVP educativo para ensino de Java de forma lúdica, visual e progressiva.

---

## 📄 Licença

Este projeto é de uso educacional e autoral.

Antes de publicar, verifique as licenças de todos os assets externos utilizados, principalmente sons, músicas e imagens. Dê preferência a materiais com licença CC0, domínio público ou uso livre permitido.

---

# 🏡 Javaland — Java Educational Game

> 🇺🇸 English version  
> 🇧🇷 Versão em português disponível acima

Javaland is an educational game built with **React + Vite** that teaches fundamental **Java** concepts in a playful, progressive, and visual way.

The project turns programming learning into a journey: the player moves to **Javaland**, an ancient, technological village full of stories, where each Java concept learned helps build a house.

After completing each level, the player unlocks a new visual reward for the house, such as a fence, gate, flowers, sofa, TV, bathroom, kitchen, bedroom, and pet.

**Stack:** React • Vite • JavaScript • CSS • localStorage

---

## 📚 Table of Contents

- [Project goal](#project-goal)
- [Game story](#game-story)
- [Main features](#main-features)
- [Technologies used](#technologies-used)
- [How to run locally](#how-to-run-locally)
- [Project structure](#project-structure)
- [Level organization](#level-organization)
- [Challenge system](#challenge-system)
- [Progress system](#progress-system)
- [Language system](#language-system)
- [Audio system](#audio-system)
- [Visual assets](#visual-assets)
- [Deployment](#deployment)
- [Future improvements](#future-improvements)
- [Author](#author)

---

## 🎯 Project goal

The goal of Javaland is to teach Java to beginners through a more interactive and less abstract experience.

Instead of presenting only theory and isolated exercises, the game connects each topic to a part of the house construction, creating a visual and narrative sense of progress.

The player learns concepts such as:

- basic structure of a Java program;
- variables and types;
- input and output;
- imports;
- operators;
- conditionals;
- loops;
- methods;
- arrays;
- classes and objects;
- encapsulation;
- constructors;
- inheritance and polymorphism;
- Strings;
- ArrayList;
- exceptions;
- files;
- APIs;
- packages;
- good practices.

---

## 📖 Game story

The player arrives in **Javaland**, an ancient and technological village where everything works through well-written commands.

The village includes symbolic characters that represent programming concepts, such as:

- **Mr. Main**, who explains the entry point of Java programs;
- **Ms. Variable**, who organizes data in storage chests;
- **Mr. Operator**, who measures, compares, and calculates;
- **Mr. If**, the gatekeeper of decisions;
- **Mr. Loop**, who repeats tasks around the village;
- **Ms. String**, a specialist in texts and messages;
- **Ms. API**, the librarian of ready-made tools;
- **Mr. Package**, responsible for village organization.

Each completed challenge adds a new part to the player’s house.

---

## ✨ Main features

- Start screen with a new game option.
- Player name input before the game starts.
- Introductory story for Javaland.
- Main menu with locked and unlocked levels.
- Progress saved in the browser.
- Levels organized by increasing difficulty.
- Each level includes an explanation, an example, and challenges.
- Challenges with multiple choice, code completion, and code writing.
- Flexible validation for code answers.
- Toolbox with hints unlocked after the tutorial.
- Visual rewards after each level.
- Choice between cat or dog.
- Different scenes for cat and dog.
- Lo-fi background soundtrack loop.
- Sound effects for click, correct answer, wrong answer, warning, reward, and completion.
- Settings panel with audio controls.
- Portuguese and English language support.
- Local saving with `localStorage`.

---

## 🛠️ Technologies used

- React
- Vite
- JavaScript
- CSS
- HTML
- localStorage

---

## 🚀 How to run locally

### 1️⃣ Clone the repository

```bash
git clone <REPOSITORY_URL>
```

### 2️⃣ Enter the project folder

```bash
cd javaland-game
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Run the project

```bash
npm run dev
```

### 5️⃣ Open it in the browser

Vite usually displays an address similar to:

```bash
http://localhost:5173
```

---

## 📦 Available scripts

```json
{
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

### `npm run dev`

Starts the development environment.

### `npm run build`

Generates the production build.

### `npm run preview`

Allows you to preview the production build locally.

### `npm run lint`

Runs ESLint checks.

---

## 🗂️ Project structure

```txt
src/
├── assets/
│   ├── house/
│   │   ├── rewards/
│   │   └── scenes/
│   ├── icons/
│   └── sounds/
│
├── components/
│   ├── AlertMessage.jsx
│   ├── Button.jsx
│   ├── ChallengeQuestion.jsx
│   ├── CodeBlock.jsx
│   ├── GameCard.jsx
│   ├── HousePreview.jsx
│   ├── ProgressBar.jsx
│   ├── SoundSettings.jsx
│   └── ToolboxHint.jsx
│
├── context/
│   ├── languageContext.js
│   └── LanguageProvider.jsx
│
├── data/
│   ├── levels.pt.json
│   ├── levels.en.json
│   └── uiText.js
│
├── hooks/
│   └── useLanguage.js
│
├── pages/
│   ├── FinalScreen.jsx
│   ├── LevelScreen.jsx
│   ├── MainMenu.jsx
│   ├── PlayerNameScreen.jsx
│   ├── RewardScreen.jsx
│   ├── StartScreen.jsx
│   └── StoryScreen.jsx
│
├── services/
│   ├── challengeValidator.js
│   ├── languageStorage.js
│   ├── progressStorage.js
│   └── soundPlayer.js
│
├── styles/
│   ├── animations.css
│   ├── global.css
│   └── theme.css
│
├── App.jsx
└── main.jsx
```

---

## 🧩 Level organization

| Level | Topic | Reward |
|---:|---|---|
| 0 | Javaland Tutorial | 🧰 Toolbox |
| 1 | Basic structure of a Java program | 🪵 Fence |
| 2 | Variables and primitive types | 🚪 Fence gate |
| 3 | Input, output, and imports | 🐾 Pet house |
| 4 | Java operators | 🌸 Flowers |
| 5 | Conditionals | 🐶🐱 Pet choice |
| 6 | Loops | 🛋️ Sofa |
| 7 | Methods in Java | 🪑 Coffee table |
| 8 | Arrays and lists | 📚 Bookshelf |
| 9 | Classes and objects | 📺 TV |
| 10 | Encapsulation | 🚽 Toilet |
| 11 | Constructors | 🚰 Bathroom sink |
| 12 | Inheritance and polymorphism | 🚿 Shower |
| 13 | Strings in Java | 🍽️ Table |
| 14 | ArrayList and collections | 🧼 Kitchen sink |
| 15 | Exception handling | 🔥 Stove |
| 16 | Files in Java | 🧊 Fridge |
| 17 | APIs and libraries in Java | 🧺 Kitchen shelves |
| 18 | Packages, imports, and organization | 🛏️ Bed |
| 19 | Good practices in Java | 🪴 Side table |
| 20 | Final Javaland review | 🚪 Wardrobe |

---

## 🎮 Challenge system

Each level has three main parts:

1. **Explanation**  
   Presents the content in a narrative and educational way.

2. **Example**  
   Shows a practical example related to the level concept.

3. **Challenges**  
   The player answers questions to progress.

Supported challenge types:

```txt
multiple-choice
complete-code
write-code
true-false
```

---

## ✅ Answer validation

The file responsible for validation is:

```txt
src/services/challengeValidator.js
```

It compares the player’s answer with the expected answer.

For code-writing challenges, validation tries to be more flexible by normalizing:

- extra spaces;
- line breaks;
- spaces around braces;
- spaces around parentheses;
- spaces around semicolons;
- spaces around operators.

This avoids marking an answer wrong only because the formatting is slightly different.

---

## 💾 Progress system

Progress is saved in the browser using `localStorage`.

Responsible file:

```txt
src/services/progressStorage.js
```

Saved data:

```js
{
  playerName: '',
  currentLevel: 0,
  completedLevels: [],
  unlockedItems: [],
  selectedPet: null,
  toolboxUnlocked: false
}
```

This means:

- progress remains after refreshing the page;
- each browser/device has its own progress;
- there is no database in the MVP;
- if the user clears browser data, progress is lost.

---

## 🌎 Language system

Javaland supports Portuguese and English.

Main files:

```txt
src/data/levels.pt.json
src/data/levels.en.json
src/data/uiText.js
src/services/languageStorage.js
src/context/LanguageProvider.jsx
src/context/languageContext.js
src/hooks/useLanguage.js
```

### Level content

Level texts are stored in:

```txt
levels.pt.json
levels.en.json
```

### Fixed interface texts

Fixed texts for buttons, alerts, menus, and settings are stored in:

```txt
uiText.js
```

### Saved language

The selected language is saved in `localStorage` under the key:

```txt
javaland-language
```

---

## 🔊 Audio system

Audio is controlled by:

```txt
src/services/soundPlayer.js
```

It handles:

- click sound;
- correct answer sound;
- wrong answer sound;
- warning sound;
- reward sound;
- level completion sound;
- dog choice sound;
- cat choice sound;
- final completion sound;
- lo-fi background soundtrack;
- effects volume;
- music volume;
- enable/disable music;
- enable/disable effects.

Expected structure:

```txt
src/assets/sounds/
├── click.mp3
├── correct.mp3
├── wrong.mp3
├── warning.mp3
├── reward.mp3
├── level-complete.mp3
├── pet-choice-dog.mp3
├── pet-choice-cat.mp3
├── final-complete.mp3
└── background/
    └── lofi-theme.mp3
```

---

## 🎨 Visual assets

Images are separated into two main groups:

### 🎁 Individual rewards

```txt
src/assets/house/rewards/
```

These images appear on the reward screen after completing a level.

### 🏗️ Full construction scenes

```txt
src/assets/house/scenes/
```

These images appear in the construction panel on the menu.

After the pet choice, scenes have two versions:

```txt
dog
cat
```

---

## ☁️ Deployment

For the MVP, **Vercel** is the recommended option.

The project is a React front-end with Vite, without backend or database, so deployment is simple.

### 🧪 Before deploying

Run:

```bash
npm run build
```

If the build completes without errors, the project is ready to publish.

### 🌐 Possible platforms

- Vercel
- Netlify
- GitHub Pages

For this MVP, Vercel is a good option because it is simple, fast, and integrated with GitHub.

---

## ⚠️ MVP limitations

This project does not yet include:

- user login;
- database;
- teacher dashboard;
- ranking;
- cloud saving;
- real Java code correction;
- Java code execution in the browser.

The current validation compares expected answers, which is enough for an initial educational MVP.

---

## 🔮 Future improvements

- Create a backend to save progress by user.
- Add login.
- Create a teacher dashboard.
- Add ranking.
- Create performance reports.
- Allow students to execute real Java code.
- Add more stages per concept.
- Add construction animations.
- Improve accessibility.
- Add optimized mobile mode.
- Create extra achievements.
- Allow house customization.
- Add more village characters.
- Add narration or character dialogue.

---

## 🧼 Good practices used in the project

- Component-based structure.
- Page-based structure.
- Isolated services for progress, language, audio, and validation.
- Level data stored in JSON.
- Fixed UI texts separated in translation files.
- Multi-language support.
- Local saving.
- Assets organized by purpose.
- Reusable components.

---

## 📌 Project status

This project is currently an MVP.

The main proposal is already implemented:

- educational journey;
- progressive levels;
- visual rewards;
- pet choice;
- sounds;
- language support;
- local progress.

The next steps should focus on refinement, testing, deployment, and user feedback.

---

## 👩‍💻 Author

Project developed by **Leda Trindade** as an educational MVP for teaching Java in a playful, visual, and progressive way.

---

## 📄 License

This project is educational and authorial.

Before publishing, check the licenses of all external assets used, especially sounds, music, and images. Prefer materials with CC0, public domain, or clearly allowed free-use licenses.

