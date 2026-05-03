/*
  App.jsx

  Arquivo principal do Javaland.
  Controla as telas, progresso, idioma e níveis.
*/

import { useEffect, useState } from 'react';

import levelsPt from './data/levels.pt.json';
import levelsEn from './data/levels.en.json';

import StartScreen from './pages/StartScreen';
import PlayerNameScreen from './pages/PlayerNameScreen';
import StoryScreen from './pages/StoryScreen';
import MainMenu from './pages/MainMenu';
import LevelScreen from './pages/LevelScreen';
import RewardScreen from './pages/RewardScreen';
import FinalScreen from './pages/FinalScreen';

import SoundSettings from './components/SoundSettings';

import LanguageProvider from './context/LanguageProvider';
import { useLanguage } from './hooks/useLanguage';

import {
  loadProgress,
  saveProgress,
  clearProgress,
} from './services/progressStorage';

const initialProgress = {
  playerName: '',
  currentLevel: 0,
  completedLevels: [],
  unlockedItems: [],
  selectedPet: null,
  toolboxUnlocked: false,
};

function getInitialGameState() {
  const savedProgress = loadProgress();

  if (savedProgress && savedProgress.playerName) {
    return {
      screen: 'menu',
      progress: savedProgress,
    };
  }

  return {
    screen: 'start',
    progress: initialProgress,
  };
}

function AppContent() {
  const { language } = useLanguage();

  const levels = language === 'en' ? levelsEn : levelsPt;
  const initialGameState = getInitialGameState();

  const [screen, setScreen] = useState(initialGameState.screen);
  const [progress, setProgress] = useState(initialGameState.progress);
  const [activeLevelId, setActiveLevelId] = useState(0);
  const [lastCompletedLevel, setLastCompletedLevel] = useState(null);

  useEffect(() => {
    if (progress.playerName) {
      saveProgress(progress);
    }
  }, [progress]);

  function handleNewGame() {
    clearProgress();

    setProgress(initialProgress);
    setActiveLevelId(0);
    setLastCompletedLevel(null);
    setScreen('name');
  }

  function handleSaveName(name) {
    const newProgress = {
      ...initialProgress,
      playerName: name,
    };

    setProgress(newProgress);
    saveProgress(newProgress);
    setScreen('story');
  }

  function handleStartTutorial() {
    setActiveLevelId(0);
    setScreen('level');
  }

  function handleOpenLevel(levelId) {
    setActiveLevelId(levelId);
    setScreen('level');
  }

  function handleCompleteLevel(level, extraData = {}) {
    const completedLevels = [...new Set([...progress.completedLevels, level.id])];

    let unlockedItems = progress.unlockedItems;

    if (level.reward) {
      unlockedItems = [...new Set([...unlockedItems, level.reward])];
    }

    const updatedProgress = {
      ...progress,
      completedLevels,
      unlockedItems,
      toolboxUnlocked: level.id === 0 ? true : progress.toolboxUnlocked,
      selectedPet: extraData.selectedPet || progress.selectedPet,
    };

    setProgress(updatedProgress);
    saveProgress(updatedProgress);

    setLastCompletedLevel(level);
    setScreen('reward');
  }

  function handleContinueAfterReward() {
    if (lastCompletedLevel?.id === 20) {
      setScreen('final');
      return;
    }

    setScreen('menu');
  }

  function handleResetGame() {
    clearProgress();

    setProgress(initialProgress);
    setActiveLevelId(0);
    setLastCompletedLevel(null);
    setScreen('start');
  }

  const activeLevel = levels.find((level) => level.id === activeLevelId);

  return (
    <main className="app">
      <SoundSettings />

      {screen === 'start' && (
        <StartScreen onNewGame={handleNewGame} />
      )}

      {screen === 'name' && (
        <PlayerNameScreen onSaveName={handleSaveName} />
      )}

      {screen === 'story' && (
        <StoryScreen
          playerName={progress.playerName}
          onStartTutorial={handleStartTutorial}
        />
      )}

      {screen === 'menu' && (
        <MainMenu
          levels={levels}
          progress={progress}
          onOpenLevel={handleOpenLevel}
          onResetGame={handleResetGame}
        />
      )}

      {screen === 'level' && activeLevel && (
        <LevelScreen
          level={activeLevel}
          toolboxUnlocked={progress.toolboxUnlocked}
          onCompleteLevel={handleCompleteLevel}
          onBackToMenu={() => setScreen('menu')}
        />
      )}

      {screen === 'reward' && lastCompletedLevel && (
        <RewardScreen
          level={lastCompletedLevel}
          progress={progress}
          onContinue={handleContinueAfterReward}
        />
      )}

      {screen === 'final' && (
        <FinalScreen
          progress={progress}
          onResetGame={handleResetGame}
        />
      )}
    </main>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;