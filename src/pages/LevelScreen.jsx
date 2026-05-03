/*
  LevelScreen.jsx

  Responsabilidade:
  controlar a execução de um nível.

  Fluxo:
  1. Explicação;
  2. Exemplo;
  3. Desafios;
  4. Escolha do pet quando o nível tiver reward "petChoice";
  5. Conclusão do nível.

  Textos fixos da interface vêm de uiText.js.
  Textos de conteúdo do nível vêm de levels.pt.json ou levels.en.json.

  A função TextWithParagraphs transforma textos com "\n\n"
  em parágrafos reais, deixando as explicações mais legíveis.
*/

import { useState } from 'react';

import Button from '../components/Button';
import GameCard from '../components/GameCard';
import CodeBlock from '../components/CodeBlock';
import ChallengeQuestion from '../components/ChallengeQuestion';
import ToolboxHint from '../components/ToolboxHint';
import AlertMessage from '../components/AlertMessage';

import { validateAnswer } from '../services/challengeValidator';
import { playSound, playPetChoiceSound } from '../services/soundPlayer';
import { useLanguage } from '../hooks/useLanguage';

function hasAnswer(value) {
  /*
    Boolean precisa ser aceito porque desafios true/false podem retornar false.
    Se usássemos apenas String(value), false poderia ser tratado de forma errada.
  */
  if (typeof value === 'boolean') {
    return true;
  }

  return String(value).trim() !== '';
}

function TextWithParagraphs({ text }) {
  /*
    Transforma textos longos em parágrafos reais.

    O JSON deve usar "\n\n" para separar os blocos.
    Exemplo:
    "Primeiro parágrafo.\n\nSegundo parágrafo."

    Isso evita que a explicação apareça como um bloco único e corrido.
  */
  if (!text) {
    return null;
  }

  return String(text)
    .split('\n\n')
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph, index) => (
      <p key={index} className="story-paragraph">
        {paragraph}
      </p>
    ));
}

function LevelScreen({
  level,
  toolboxUnlocked,
  onCompleteLevel,
  onBackToMenu,
}) {
  const { t } = useLanguage();

  const [phase, setPhase] = useState('explanation');
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [notice, setNotice] = useState(null);
  const [isChecking, setIsChecking] = useState(false);

  const currentStep = level.steps[currentStepIndex];

  function goToExample() {
    setPhase('example');
    setNotice(null);
  }

  function goToChallenge() {
    setPhase('challenge');
    setNotice(null);
  }

  function handleChangeAnswer(value) {
    /*
      Enquanto o jogo está validando a resposta,
      impedimos alterações para evitar bugs de clique duplo.
    */
    if (isChecking) {
      return;
    }

    setSelectedAnswer(value);

    if (notice) {
      setNotice(null);
    }
  }

  function goToNextStepOrCompleteLevel() {
    const isLastStep = currentStepIndex === level.steps.length - 1;

    if (isLastStep) {
      /*
        O nível especial de pet não vai direto para a tela de recompensa.
        Primeiro ele abre a escolha entre cachorro e gato.
      */
      if (level.reward === 'petChoice') {
        setSelectedAnswer('');
        setNotice(null);
        setIsChecking(false);
        setPhase('pet-choice');
        return;
      }

      playSound('levelComplete', 0.7);
      setIsChecking(false);
      onCompleteLevel(level);
      return;
    }

    /*
      Avança para a próxima etapa e limpa a resposta anterior.
    */
    setCurrentStepIndex((prev) => prev + 1);
    setSelectedAnswer('');
    setNotice(null);
    setIsChecking(false);
  }

  function handleValidateAnswer() {
    /*
      Bloqueia duplo clique no botão Responder.
      Isso evita pular etapas sem querer.
    */
    if (isChecking) {
      return;
    }

    if (!hasAnswer(selectedAnswer)) {
      playSound('warning', 0.55);

      setNotice({
        type: 'warning',
        title: t.level.noAnswerTitle,
        message: t.level.noAnswerMessage,
      });

      return;
    }

    setIsChecking(true);

    const isCorrect = validateAnswer(currentStep, selectedAnswer);

    if (!isCorrect) {
      playSound('wrong', 0.55);

      setNotice({
        type: 'error',
        title: t.level.wrongTitle,
        message: t.level.wrongMessage,
      });

      setIsChecking(false);
      return;
    }

    playSound('correct', 0.65);

    setNotice({
      type: 'success',
      title: t.level.correctTitle,
      message: t.level.correctMessage,
    });

    setTimeout(() => {
      goToNextStepOrCompleteLevel();
    }, 650);
  }

  function handleChoosePet(pet) {
    if (isChecking) {
      return;
    }

    setIsChecking(true);
    playPetChoiceSound(pet);

    setTimeout(() => {
      onCompleteLevel(level, {
        selectedPet: pet,
      });
    }, 300);
  }

  return (
    <div className="screen center-screen">
      <GameCard className="level-card">
        <div className="level-header">
          <div className="level-title-area">
            <p className="eyebrow">
              {t.level.level} {level.id}
            </p>

            <h1>{level.title}</h1>
          </div>

          <button
            type="button"
            className="back-button"
            disabled={isChecking}
            onClick={onBackToMenu}
            aria-label={t.level.back}
          >
            {t.level.back}
          </button>
        </div>

        {phase === 'explanation' && (
          <div className="phase-content">
            <h2>{t.level.explanation}</h2>

            <TextWithParagraphs text={level.explanation} />

            <Button onClick={goToExample}>
              {t.level.seeExample}
            </Button>
          </div>
        )}

        {phase === 'example' && (
          <div className="phase-content">
            <h2>{level.example.title}</h2>

            <CodeBlock code={level.example.code} />

            <TextWithParagraphs text={level.example.comment} />

            <Button onClick={goToChallenge}>
              {t.level.goToChallenge}
            </Button>
          </div>
        )}

        {phase === 'challenge' && (
          <div className="phase-content">
            <ChallengeQuestion
              step={currentStep}
              selectedAnswer={selectedAnswer}
              onChangeAnswer={handleChangeAnswer}
              disabled={isChecking}
            />

            {toolboxUnlocked && currentStep?.hint && (
              <ToolboxHint hint={currentStep.hint} />
            )}

            {notice && (
              <AlertMessage
                type={notice.type}
                title={notice.title}
                message={notice.message}
              />
            )}

            <Button
              onClick={handleValidateAnswer}
              disabled={isChecking}
            >
              {isChecking ? t.level.validating : t.level.answer}
            </Button>
          </div>
        )}

        {phase === 'pet-choice' && (
          <div className="phase-content pet-choice-content">
            <p className="eyebrow">{t.level.specialChoice}</p>

            <h2>{t.level.choosePetTitle}</h2>

            <p>{t.level.choosePetDescription}</p>

            <div className="pet-choice-grid">
              <button
                type="button"
                className="pet-choice-card"
                disabled={isChecking}
                onClick={() => handleChoosePet('dog')}
              >
                <span className="pet-emoji">🐶</span>
                <strong>{t.level.dog}</strong>
                <small>{t.level.dogDescription}</small>
              </button>

              <button
                type="button"
                className="pet-choice-card"
                disabled={isChecking}
                onClick={() => handleChoosePet('cat')}
              >
                <span className="pet-emoji">🐱</span>
                <strong>{t.level.cat}</strong>
                <small>{t.level.catDescription}</small>
              </button>
            </div>
          </div>
        )}
      </GameCard>
    </div>
  );
}

export default LevelScreen;