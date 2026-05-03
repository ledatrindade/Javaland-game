/*
  StoryScreen.jsx

  Responsabilidade:
  apresentar a história inicial de Javaland.

  O nome do jogador vem do progresso.
  O texto da história vem do idioma selecionado.
*/

import Button from '../components/Button';
import GameCard from '../components/GameCard';

import { useLanguage } from '../hooks/useLanguage';

function StoryScreen({ playerName, onStartTutorial }) {
  const { t } = useLanguage();

  return (
    <div className="screen center-screen">
      <GameCard>
        <p className="eyebrow">{t.story.eyebrow}</p>

        <h1>
          {t.story.title}, {playerName}!
        </h1>

        <p>{t.story.paragraph1}</p>
        <p>{t.story.paragraph2}</p>
        <p>{t.story.paragraph3}</p>

        <Button onClick={onStartTutorial}>
          {t.story.button}
        </Button>
      </GameCard>
    </div>
  );
}

export default StoryScreen;