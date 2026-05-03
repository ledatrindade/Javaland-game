/*
  StartScreen.jsx

  Responsabilidade:
  exibir a tela inicial do jogo.

  Todos os textos vêm do uiText.js através do useLanguage.
*/

import Button from '../components/Button';
import GameCard from '../components/GameCard';

import { useLanguage } from '../hooks/useLanguage';

function StartScreen({ onNewGame }) {
  const { t } = useLanguage();

  return (
    <div className="screen center-screen">
      <GameCard className="start-card">
        <p className="eyebrow">{t.start.eyebrow}</p>

        <h1>{t.start.title}</h1>

        <p>{t.start.description}</p>

        <div className="warning-box">
          {t.start.warning}
        </div>

        <Button onClick={onNewGame}>
          {t.start.newGame}
        </Button>
      </GameCard>
    </div>
  );
}

export default StartScreen;