/*
  ChallengeQuestion.jsx

  Responsabilidade:
  renderizar a pergunta atual conforme o tipo do desafio.

  Tipos suportados:
  - multiple-choice
  - complete-code
  - write-code
  - true-false

  Os textos das perguntas vêm do levels.pt.json ou levels.en.json.
  Os textos fixos, como "Etapa/Step", vêm do uiText.js.
*/

import { useLanguage } from '../hooks/useLanguage';
import { playSound } from '../services/soundPlayer';

function ChallengeQuestion({
  step,
  selectedAnswer,
  onChangeAnswer,
  disabled = false,
}) {
  const { t } = useLanguage();

  if (!step) {
    return null;
  }

  function handleSelectAnswer(value) {
    if (disabled) {
      return;
    }

    playSound('click', 0.25);
    onChangeAnswer(value);
  }

  return (
    <div className="challenge-question">
      <p className="step-label">
        {t.level.step} {step.id}
      </p>

      <h3>{step.question}</h3>

      {step.type === 'multiple-choice' && (
        <div className="options-list">
          {step.options.map((option) => (
            <button
              key={option}
              type="button"
              className={`option-button ${
                selectedAnswer === option ? 'option-selected' : ''
              }`}
              disabled={disabled}
              onClick={() => handleSelectAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {step.type === 'complete-code' && (
        <input
          className="answer-input"
          type="text"
          placeholder={t.level.completeCodePlaceholder}
          value={selectedAnswer}
          disabled={disabled}
          onChange={(event) => onChangeAnswer(event.target.value)}
        />
      )}

      {step.type === 'write-code' && (
        <textarea
          className="code-answer-input"
          placeholder={t.level.writeCodePlaceholder}
          value={selectedAnswer}
          disabled={disabled}
          onChange={(event) => onChangeAnswer(event.target.value)}
          rows={8}
        />
      )}

      {step.type === 'true-false' && (
        <div className="options-list">
          <button
            type="button"
            className={`option-button ${
              selectedAnswer === true ? 'option-selected' : ''
            }`}
            disabled={disabled}
            onClick={() => handleSelectAnswer(true)}
          >
            {t.level.true}
          </button>

          <button
            type="button"
            className={`option-button ${
              selectedAnswer === false ? 'option-selected' : ''
            }`}
            disabled={disabled}
            onClick={() => handleSelectAnswer(false)}
          >
            {t.level.false}
          </button>
        </div>
      )}
    </div>
  );
}

export default ChallengeQuestion;