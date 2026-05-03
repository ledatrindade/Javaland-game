/*
  FinalScreen.jsx

  Responsabilidade:
  exibir a tela final quando o jogador conclui todos os níveis.

  O som final toca apenas quando a tela é aberta.
*/

import { useEffect } from 'react';

import Button from '../components/Button';
import GameCard from '../components/GameCard';
import HousePreview from '../components/HousePreview';

import { playSound } from '../services/soundPlayer';
import { useLanguage } from '../hooks/useLanguage';

function FinalScreen({ progress, onResetGame }) {
  const { t } = useLanguage();

  useEffect(() => {
    playSound('finalComplete', 0.85);
  }, []);

  return (
    <div className="screen center-screen">
      <GameCard className="final-card">
        <p className="eyebrow">{t.final.eyebrow}</p>

        <h1>{t.final.title}</h1>

        <p>
          {t.final.description.replace('{name}', progress.playerName)}
        </p>

        <HousePreview
          unlockedItems={progress.unlockedItems}
          selectedPet={progress.selectedPet}
          mode="final"
        />

        <Button onClick={onResetGame}>
          {t.final.playAgain}
        </Button>
      </GameCard>
    </div>
  );
}

export default FinalScreen;