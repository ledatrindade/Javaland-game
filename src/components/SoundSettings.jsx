/*
  SoundSettings.jsx

  Responsabilidade:
  exibir o painel fixo de configurações.

  O painel controla:
  - trilha sonora;
  - efeitos sonoros;
  - volume da trilha;
  - volume dos efeitos;
  - idioma do jogo.

  A troca de idioma chama setLanguage do LanguageContext.
*/

import { useEffect, useState } from 'react';

import { useLanguage } from '../hooks/useLanguage';

import {
  getSoundSettings,
  subscribeToSoundSettings,
  updateSoundSettings,
  toggleBackgroundMusic,
  playSound,
} from '../services/soundPlayer';

function GearIcon() {
  return (
    <svg
      className="sound-settings-gear"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M19.4 13.5c.1-.5.1-1 .1-1.5s0-1-.1-1.5l2-1.5-2-3.4-2.4 1a7.4 7.4 0 0 0-2.6-1.5L14 2.5h-4l-.4 2.6A7.4 7.4 0 0 0 7 6.6l-2.4-1-2 3.4 2 1.5c-.1.5-.1 1-.1 1.5s0 1 .1 1.5l-2 1.5 2 3.4 2.4-1a7.4 7.4 0 0 0 2.6 1.5l.4 2.6h4l.4-2.6a7.4 7.4 0 0 0 2.6-1.5l2.4 1 2-3.4-2-1.5ZM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SoundSettings() {
  const { language, setLanguage, t } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState(getSoundSettings());

  useEffect(() => {
    const unsubscribe = subscribeToSoundSettings(setSettings);
    return unsubscribe;
  }, []);

  function handleTogglePanel() {
    playSound('click', 0.4);
    setIsOpen((prev) => !prev);
  }

  function handleToggleMusic() {
    playSound('click', 0.35);
    toggleBackgroundMusic();
  }

  function handleToggleEffects() {
    const newValue = !settings.effectsEnabled;

    updateSoundSettings({
      effectsEnabled: newValue,
    });

    if (newValue) {
      setTimeout(() => {
        playSound('click', 0.4);
      }, 50);
    }
  }

  function handleMusicVolumeChange(event) {
    updateSoundSettings({
      musicVolume: Number(event.target.value),
    });
  }

  function handleEffectsVolumeChange(event) {
    updateSoundSettings({
      effectsVolume: Number(event.target.value),
    });
  }

  function handleChangeLanguage(newLanguage) {
    playSound('click', 0.35);
    setLanguage(newLanguage);
  }

  function handleTestEffects() {
    playSound('correct', 0.8);
  }

  return (
    <div className="sound-settings">
      <button
        type="button"
        className={`sound-settings-button ${
          isOpen ? 'sound-settings-button-active' : ''
        }`}
        onClick={handleTogglePanel}
        aria-label={t.sound.openSettings}
      >
        <GearIcon />
      </button>

      {isOpen && (
        <div className="sound-settings-panel">
          <div className="sound-settings-header">
            <strong>{t.sound.title}</strong>
            <span>{t.sound.subtitle}</span>
          </div>

          <div className="sound-setting-row">
            <div>
              <strong>{t.sound.music}</strong>
              <small>{t.sound.musicDescription}</small>
            </div>

            <button
              type="button"
              className={`sound-pill ${
                settings.musicEnabled ? 'sound-pill-on' : ''
              }`}
              onClick={handleToggleMusic}
            >
              {settings.musicEnabled ? t.sound.onFemale : t.sound.offFemale}
            </button>
          </div>

          <label className="sound-slider-group">
            <span>{t.sound.musicVolume}</span>

            <input
              type="range"
              min="0"
              max="0.5"
              step="0.01"
              value={settings.musicVolume}
              onChange={handleMusicVolumeChange}
            />
          </label>

          <div className="sound-setting-row">
            <div>
              <strong>{t.sound.effects}</strong>
              <small>{t.sound.effectsDescription}</small>
            </div>

            <button
              type="button"
              className={`sound-pill ${
                settings.effectsEnabled ? 'sound-pill-on' : ''
              }`}
              onClick={handleToggleEffects}
            >
              {settings.effectsEnabled
                ? t.sound.onMalePlural
                : t.sound.offMalePlural}
            </button>
          </div>

          <label className="sound-slider-group">
            <span>{t.sound.effectsVolume}</span>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={settings.effectsVolume}
              onChange={handleEffectsVolumeChange}
            />
          </label>

          <div className="language-setting">
            <strong>{t.sound.language}</strong>

            <div className="language-options">
              <button
                type="button"
                className={`language-button ${
                  language === 'pt' ? 'language-button-active' : ''
                }`}
                onClick={() => handleChangeLanguage('pt')}
              >
                PT
              </button>

              <button
                type="button"
                className={`language-button ${
                  language === 'en' ? 'language-button-active' : ''
                }`}
                onClick={() => handleChangeLanguage('en')}
              >
                EN
              </button>
            </div>
          </div>

          <button
            type="button"
            className="sound-test-button"
            onClick={handleTestEffects}
            disabled={!settings.effectsEnabled}
          >
            {t.sound.test}
          </button>
        </div>
      )}
    </div>
  );
}

export default SoundSettings;