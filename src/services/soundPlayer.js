/*
  soundPlayer.js

  Central de áudio do Javaland.

  Este arquivo controla:
  - efeitos sonoros curtos;
  - música de fundo lo-fi;
  - volume da trilha;
  - volume dos efeitos;
  - ligar/desligar música;
  - ligar/desligar efeitos;
  - salvar preferências no localStorage.

  Importante:
  navegadores geralmente bloqueiam áudio automático.
  Por isso, a música só toca depois que o usuário interage com a página,
  por exemplo clicando no botão de configuração.
*/

import clickSound from '../assets/sounds/click.mp3';
import correctSound from '../assets/sounds/correct.mp3';
import wrongSound from '../assets/sounds/wrong.mp3';
import warningSound from '../assets/sounds/warning.mp3';
import rewardSound from '../assets/sounds/reward.mp3';
import levelCompleteSound from '../assets/sounds/level-complete.mp3';
import petChoiceDogSound from '../assets/sounds/pet-choice-dog.mp3';
import petChoiceCatSound from '../assets/sounds/pet-choice-cat.mp3';
import finalCompleteSound from '../assets/sounds/final-complete.mp3';

import lofiTheme from '../assets/sounds/background/lofi-theme.mp3';

const SOUND_SETTINGS_KEY = 'javaland-sound-settings';

const defaultSettings = {
  musicEnabled: false,
  effectsEnabled: true,
  musicVolume: 0.16,
  effectsVolume: 0.55,
};

let currentSettings = loadSoundSettings();
let backgroundAudio = null;

/*
  Lista de ouvintes.
  Isso permite que o componente SoundSettings atualize a tela
  quando as configurações mudarem.
*/
const listeners = new Set();

const soundMap = {
  click: clickSound,
  correct: correctSound,
  wrong: wrongSound,
  warning: warningSound,
  reward: rewardSound,
  levelComplete: levelCompleteSound,
  petChoiceDog: petChoiceDogSound,
  petChoiceCat: petChoiceCatSound,
  finalComplete: finalCompleteSound,
};

function loadSoundSettings() {
  try {
    const saved = localStorage.getItem(SOUND_SETTINGS_KEY);

    if (!saved) {
      return defaultSettings;
    }

    return {
      ...defaultSettings,
      ...JSON.parse(saved),
    };
  } catch (error) {
    console.error('Erro ao carregar configurações de som:', error);
    return defaultSettings;
  }
}

function saveSoundSettings(settings) {
  try {
    localStorage.setItem(SOUND_SETTINGS_KEY, JSON.stringify(settings));
  } catch (error) {
    console.error('Erro ao salvar configurações de som:', error);
  }
}

function notifyListeners() {
  listeners.forEach((listener) => listener(currentSettings));
}

function ensureBackgroundAudio() {
  /*
    Cria o áudio de fundo apenas uma vez.
    Isso evita várias músicas tocando ao mesmo tempo.
  */

  if (!backgroundAudio) {
    backgroundAudio = new Audio(lofiTheme);
    backgroundAudio.loop = true;
    backgroundAudio.volume = currentSettings.musicVolume;
  }

  return backgroundAudio;
}

export function getSoundSettings() {
  return currentSettings;
}

export function subscribeToSoundSettings(listener) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

export function updateSoundSettings(newSettings) {
  currentSettings = {
    ...currentSettings,
    ...newSettings,
  };

  saveSoundSettings(currentSettings);

  if (backgroundAudio) {
    backgroundAudio.volume = currentSettings.musicVolume;

    if (!currentSettings.musicEnabled) {
      backgroundAudio.pause();
    }

    if (currentSettings.musicEnabled) {
      backgroundAudio.play().catch(() => {});
    }
  }

  notifyListeners();
}

export function playSound(name, customVolume = 1) {
  /*
    Toca efeitos curtos.
    Se os efeitos estiverem desligados, não toca nada.
  */

  if (!currentSettings.effectsEnabled) {
    return;
  }

  const sound = soundMap[name];

  if (!sound) {
    return;
  }

  const audio = new Audio(sound);
  audio.volume = Math.min(
    1,
    Math.max(0, currentSettings.effectsVolume * customVolume)
  );

  audio.currentTime = 0;

  audio.play().catch(() => {
    /*
      Se o navegador bloquear, ignoramos para não quebrar o jogo.
    */
  });
}

export function startBackgroundMusic() {
  /*
    Liga a trilha lo-fi.
  */

  const audio = ensureBackgroundAudio();

  currentSettings = {
    ...currentSettings,
    musicEnabled: true,
  };

  saveSoundSettings(currentSettings);
  notifyListeners();

  audio.volume = currentSettings.musicVolume;
  audio.play().catch(() => {});
}

export function pauseBackgroundMusic() {
  /*
    Desliga a trilha lo-fi.
  */

  if (backgroundAudio) {
    backgroundAudio.pause();
  }

  currentSettings = {
    ...currentSettings,
    musicEnabled: false,
  };

  saveSoundSettings(currentSettings);
  notifyListeners();
}

export function toggleBackgroundMusic() {
  if (currentSettings.musicEnabled) {
    pauseBackgroundMusic();
    return false;
  }

  startBackgroundMusic();
  return true;
}

export function playPetChoiceSound(pet) {
  /*
    Som separado para cada pet.
  */

  if (pet === 'cat') {
    playSound('petChoiceCat', 0.9);
    return;
  }

  playSound('petChoiceDog', 0.9);
}