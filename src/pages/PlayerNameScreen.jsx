/*
  PlayerNameScreen.jsx

  Responsabilidade:
  solicitar o nome do jogador antes de iniciar a história.

  O aviso de nome obrigatório usa o componente AlertMessage
  e também respeita o idioma selecionado.
*/

import { useState } from 'react';

import Button from '../components/Button';
import GameCard from '../components/GameCard';
import AlertMessage from '../components/AlertMessage';

import { useLanguage } from '../hooks/useLanguage';

function PlayerNameScreen({ onSaveName }) {
  const { t } = useLanguage();

  const [name, setName] = useState('');
  const [notice, setNotice] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const formattedName = name.trim();

    if (!formattedName) {
      setNotice({
        type: 'warning',
        title: t.name.warningTitle,
        message: t.name.warningMessage,
      });

      return;
    }

    setNotice(null);
    onSaveName(formattedName);
  }

  return (
    <div className="screen center-screen">
      <GameCard>
        <p className="eyebrow">{t.name.eyebrow}</p>

        <h1>{t.name.title}</h1>

        <p>{t.name.description}</p>

        <form onSubmit={handleSubmit} className="name-form">
          <input
            type="text"
            placeholder={t.name.placeholder}
            value={name}
            onChange={(event) => {
              setName(event.target.value);

              if (notice) {
                setNotice(null);
              }
            }}
          />

          {notice && (
            <AlertMessage
              type={notice.type}
              title={notice.title}
              message={notice.message}
            />
          )}

          <Button type="submit">
            {t.name.button}
          </Button>
        </form>
      </GameCard>
    </div>
  );
}

export default PlayerNameScreen;