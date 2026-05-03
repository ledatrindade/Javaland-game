/*
  uiText.js

  Responsabilidade:
  guardar os textos fixos da interface em português e inglês.

  Importante:
  Os textos dos desafios NÃO ficam aqui.
  Eles ficam em:
  - levels.pt.json
  - levels.en.json
*/

export const uiText = {
  pt: {
    start: {
      eyebrow: 'Jogo educativo de Java',
      title: 'Javaland',
      description:
        'Aprenda Java enquanto constrói sua casa em uma cidade antiga, tecnológica e cheia de desafios.',
      warning:
        'Aviso: este jogo é um MVP educativo. Seu objetivo é ensinar os primeiros conceitos de Java de forma prática e divertida.',
      newGame: 'Novo Jogo',
    },

    name: {
      eyebrow: 'Antes de entrar em Javaland',
      title: 'Qual é o seu nome?',
      description: 'Vamos usar seu nome para personalizar sua chegada à cidade.',
      placeholder: 'Digite seu nome...',
      button: 'Continuar',
      warningTitle: 'Nome obrigatório',
      warningMessage: 'Digite seu nome para entrar em Javaland.',
    },

    story: {
      eyebrow: 'História',
      title: 'Bem-vindo a Javaland',
      paragraph1:
        'Você acabou de se mudar para Javaland, uma cidade antiga, cheia de placas de código, máquinas curiosas e construções movidas por lógica.',
      paragraph2:
        'Dizem que Javaland foi criada por antigos programadores que acreditavam que tudo poderia ganhar vida quando fosse escrito com estrutura, regras e boas práticas.',
      paragraph3:
        'Agora você recebeu um terreno vazio. Para construir sua casa, precisará aprender os comandos da cidade: a sintaxe Java.',
      button: 'Começar tutorial',
    },

    menu: {
      eyebrow: 'Menu principal',
      hello: 'Olá',
      description:
        'Escolha o próximo desafio liberado e continue construindo sua casa em Javaland.',
      completed: 'Concluído',
      unlocked: 'Liberado',
      locked: 'Bloqueado',
      reset: 'Reiniciar jogo',
      level: 'Nível',
    },

    progress: {
      label: 'Progresso',
    },

    level: {
      level: 'Nível',
      back: 'Voltar',
      explanation: 'Explicação',
      seeExample: 'Ver exemplo',
      goToChallenge: 'Ir para o desafio',
      answer: 'Responder',
      validating: 'Validando...',
      noAnswerTitle: 'Sem resposta',
      noAnswerMessage:
        'Escolha uma alternativa ou escreva sua resposta antes de continuar.',
      wrongTitle: 'Quase!',
      wrongMessage:
        'Essa ainda não é a resposta correta. Tente novamente.',
      correctTitle: 'Muito bem!',
      correctMessage: 'Resposta correta. Preparando a próxima etapa...',
      specialChoice: 'Escolha especial',
      choosePetTitle: 'Escolha seu companheiro de Javaland',
      choosePetDescription:
        'Você concluiu os desafios da área externa. Agora escolha quem vai morar com você em Javaland.',
      dog: 'Cachorro',
      dogDescription: 'Um companheiro animado para sua área externa.',
      cat: 'Gato',
      catDescription: 'Um companheiro curioso para sua casa em Javaland.',
      true: 'Verdadeiro',
      false: 'Falso',
      writeCodePlaceholder: 'Escreva seu código aqui...',
      completeCodePlaceholder: 'Digite a parte que falta...',
      step: 'Etapa',
    },

    toolbox: {
      title: 'Dica da caixa de ferramentas',
    },

    reward: {
      eyebrow: 'Recompensa desbloqueada',
      title: 'Parabéns!',
      continue: 'Continuar',
      fallback: 'Você concluiu este nível e desbloqueou uma nova recompensa.',
      messages: {
        0: 'Você desbloqueou a caixa de ferramentas! Ela vai liberar dicas nos próximos desafios.',
        1: 'Você conquistou a cerca! Agora sua área externa começou a ganhar forma.',
        2: 'Você conquistou a portinha da cerca! Agora seu terreno está mais organizado.',
        3: 'Você conquistou a casinha do pet! Sua área externa está ficando mais acolhedora.',
        4: 'Você conquistou as flores! O terreno de Javaland ficou mais bonito.',
        6: 'Você conquistou o sofá! A sala da sua casa começou a ganhar conforto.',
        7: 'Você conquistou a mesinha de centro! Sua sala está ficando mais organizada.',
        8: 'Você conquistou a estante de livros! Agora sua sala tem um cantinho de estudos.',
        9: 'Você conquistou a TV! Agora sua sala está completa.',
        10: 'Você conquistou a privada! O banheiro da sua casa começou a ser construído.',
        11: 'Você conquistou a pia do banheiro! Agora o ambiente está ficando mais funcional.',
        12: 'Você conquistou o chuveiro! Agora seu banheiro está completo.',
        13: 'Você conquistou a mesa! A cozinha da sua casa começou a ganhar forma.',
        14: 'Você conquistou a pia da cozinha! Agora sua cozinha está mais funcional.',
        15: 'Você conquistou o fogão! A cozinha está ficando pronta para novas receitas.',
        16: 'Você conquistou a geladeira! Sua cozinha está quase completa.',
        17: 'Você conquistou as estantes da cozinha! Agora sua cozinha está completa.',
        18: 'Você conquistou a cama! O quarto da sua casa começou a ficar aconchegante.',
        19: 'Você conquistou a mesinha lateral! Seu quarto está ficando mais organizado.',
        20: 'Você conquistou o armário! Sua casa em Javaland está completa.',
      },
      petMessage: {
        dog: 'Você escolheu um cachorro! Agora sua área externa está completa.',
        cat: 'Você escolheu um gato! Agora sua área externa está completa.',
      },
    },

    final: {
      eyebrow: 'Fim do jogo',
      title: 'Casa completa em Javaland!',
      description:
        'Parabéns, {name}! Você concluiu todos os desafios do MVP e construiu sua casa aprendendo Java.',
      playAgain: 'Jogar novamente',
    },

    house: {
      title: 'Construção em Javaland',
    },

    sound: {
      title: 'Configurações',
      subtitle: 'Javaland',
      music: 'Trilha lo-fi',
      musicDescription: 'Música de fundo em loop',
      effects: 'Efeitos',
      effectsDescription: 'Cliques, acertos, erros e recompensas',
      musicVolume: 'Volume da trilha',
      effectsVolume: 'Volume dos efeitos',
      onFemale: 'Ligada',
      offFemale: 'Desligada',
      onMalePlural: 'Ligados',
      offMalePlural: 'Desligados',
      test: 'Testar efeito',
      openSettings: 'Abrir configurações',
      language: 'Idioma',
      portuguese: 'Português',
      english: 'English',
    },
  },

  en: {
    start: {
      eyebrow: 'Java educational game',
      title: 'Javaland',
      description:
        'Learn Java while building your house in an ancient, technological city full of challenges.',
      warning:
        'Notice: this game is an educational MVP. Its goal is to teach the first Java concepts in a practical and fun way.',
      newGame: 'New Game',
    },

    name: {
      eyebrow: 'Before entering Javaland',
      title: 'What is your name?',
      description: 'We will use your name to personalize your arrival in the city.',
      placeholder: 'Type your name...',
      button: 'Continue',
      warningTitle: 'Name required',
      warningMessage: 'Type your name to enter Javaland.',
    },

    story: {
      eyebrow: 'Story',
      title: 'Welcome to Javaland',
      paragraph1:
        'You have just moved to Javaland, an ancient city full of code signs, curious machines, and buildings powered by logic.',
      paragraph2:
        'People say Javaland was created by old programmers who believed everything could come to life when written with structure, rules, and good practices.',
      paragraph3:
        'Now you have received an empty plot of land. To build your house, you will need to learn the city commands: Java syntax.',
      button: 'Start tutorial',
    },

    menu: {
      eyebrow: 'Main menu',
      hello: 'Hello',
      description:
        'Choose the next unlocked challenge and keep building your house in Javaland.',
      completed: 'Completed',
      unlocked: 'Unlocked',
      locked: 'Locked',
      reset: 'Restart game',
      level: 'Level',
    },

    progress: {
      label: 'Progress',
    },

    level: {
      level: 'Level',
      back: 'Back',
      explanation: 'Explanation',
      seeExample: 'See example',
      goToChallenge: 'Go to challenge',
      answer: 'Answer',
      validating: 'Checking...',
      noAnswerTitle: 'No answer',
      noAnswerMessage:
        'Choose an option or write your answer before continuing.',
      wrongTitle: 'Almost!',
      wrongMessage:
        'That is not the correct answer yet. Try again.',
      correctTitle: 'Well done!',
      correctMessage: 'Correct answer. Preparing the next step...',
      specialChoice: 'Special choice',
      choosePetTitle: 'Choose your Javaland companion',
      choosePetDescription:
        'You completed the outdoor area challenges. Now choose who will live with you in Javaland.',
      dog: 'Dog',
      dogDescription: 'A cheerful companion for your outdoor area.',
      cat: 'Cat',
      catDescription: 'A curious companion for your Javaland house.',
      true: 'True',
      false: 'False',
      writeCodePlaceholder: 'Write your code here...',
      completeCodePlaceholder: 'Type the missing part...',
      step: 'Step',
    },

    toolbox: {
      title: 'Toolbox hint',
    },

    reward: {
      eyebrow: 'Reward unlocked',
      title: 'Congratulations!',
      continue: 'Continue',
      fallback: 'You completed this level and unlocked a new reward.',
      messages: {
        0: 'You unlocked the toolbox! It will provide hints in the next challenges.',
        1: 'You earned the fence! Your outdoor area is starting to take shape.',
        2: 'You earned the fence gate! Your land is now more organized.',
        3: 'You earned the pet house! Your outdoor area is becoming cozier.',
        4: 'You earned the flowers! Your Javaland land looks prettier now.',
        6: 'You earned the sofa! Your living room is becoming more comfortable.',
        7: 'You earned the coffee table! Your living room is becoming more organized.',
        8: 'You earned the bookshelf! Your living room now has a study corner.',
        9: 'You earned the TV! Your living room is now complete.',
        10: 'You earned the toilet! Your bathroom has started to be built.',
        11: 'You earned the bathroom sink! The room is becoming more functional.',
        12: 'You earned the shower! Your bathroom is now complete.',
        13: 'You earned the table! Your kitchen is starting to take shape.',
        14: 'You earned the kitchen sink! Your kitchen is now more functional.',
        15: 'You earned the stove! Your kitchen is getting ready for new recipes.',
        16: 'You earned the fridge! Your kitchen is almost complete.',
        17: 'You earned the kitchen shelves! Your kitchen is now complete.',
        18: 'You earned the bed! Your bedroom is becoming cozy.',
        19: 'You earned the side table! Your bedroom is becoming more organized.',
        20: 'You earned the wardrobe! Your Javaland house is complete.',
      },
      petMessage: {
        dog: 'You chose a dog! Your outdoor area is now complete.',
        cat: 'You chose a cat! Your outdoor area is now complete.',
      },
    },

    final: {
      eyebrow: 'End of the game',
      title: 'House completed in Javaland!',
      description:
        'Congratulations, {name}! You completed all MVP challenges and built your house while learning Java.',
      playAgain: 'Play again',
    },

    house: {
      title: 'Javaland construction',
    },

    sound: {
      title: 'Settings',
      subtitle: 'Javaland',
      music: 'Lo-fi soundtrack',
      musicDescription: 'Background music loop',
      effects: 'Effects',
      effectsDescription: 'Clicks, correct answers, errors and rewards',
      musicVolume: 'Soundtrack volume',
      effectsVolume: 'Effects volume',
      onFemale: 'On',
      offFemale: 'Off',
      onMalePlural: 'On',
      offMalePlural: 'Off',
      test: 'Test effect',
      openSettings: 'Open settings',
      language: 'Language',
      portuguese: 'Português',
      english: 'English',
    },
  },
};