/*
  MainMenu.jsx

  Responsabilidade:
  exibir os níveis, progresso e preview da construção.

  A regra de desbloqueio é sequencial:
  - nível 0 sempre liberado;
  - nível seguinte libera quando o anterior foi concluído.
*/

import Button from '../components/Button';
import GameCard from '../components/GameCard';
import ProgressBar from '../components/ProgressBar';
import HousePreview from '../components/HousePreview';

import { useLanguage } from '../hooks/useLanguage';

function isLevelUnlocked(levelId, completedLevels) {
  if (levelId === 0) {
    return true;
  }

  return completedLevels.includes(levelId - 1);
}

function MainMenu({ levels, progress, onOpenLevel, onResetGame }) {
  const { t } = useLanguage();

  const completedCount = progress.completedLevels.length;

  return (
    <div className="screen menu-screen">
      <div className="menu-layout">
        <GameCard className="levels-panel">
          <p className="eyebrow">{t.menu.eyebrow}</p>

          <h1>
            {t.menu.hello}, {progress.playerName}!
          </h1>

          <p>{t.menu.description}</p>

          <ProgressBar
            current={completedCount}
            total={levels.length}
          />

          <div className="levels-list">
            {levels.map((level) => {
              const unlocked = isLevelUnlocked(
                level.id,
                progress.completedLevels
              );

              const completed = progress.completedLevels.includes(level.id);

              return (
                <button
                  key={level.id}
                  className={`level-button ${
                    completed ? 'level-completed' : ''
                  }`}
                  disabled={!unlocked}
                  onClick={() => onOpenLevel(level.id)}
                >
                  <span>
                    {t.menu.level} {level.id} — {level.title}
                  </span>

                  <small>
                    {completed
                      ? t.menu.completed
                      : unlocked
                        ? t.menu.unlocked
                        : t.menu.locked}
                  </small>
                </button>
              );
            })}
          </div>

          <Button variant="secondary" onClick={onResetGame}>
            {t.menu.reset}
          </Button>
        </GameCard>

        <aside className="construction-panel">
          <HousePreview
            unlockedItems={progress.unlockedItems}
            selectedPet={progress.selectedPet}
            mode="menu"
          />
        </aside>
      </div>
    </div>
  );
}

export default MainMenu;