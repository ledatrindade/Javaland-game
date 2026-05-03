/*
  LanguageProvider.jsx

  Fornece o idioma atual para todo o jogo.
*/

import { useMemo, useState } from 'react';

import { LanguageContext } from './languageContext';
import { loadLanguage, saveLanguage } from '../services/languageStorage';
import { uiText } from '../data/uiText';

function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(loadLanguage);

  function setLanguage(newLanguage) {
    if (newLanguage !== 'pt' && newLanguage !== 'en') {
      return;
    }

    setLanguageState(newLanguage);
    saveLanguage(newLanguage);
  }

  const value = useMemo(() => {
    return {
      language,
      setLanguage,
      t: uiText[language] || uiText.pt,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;