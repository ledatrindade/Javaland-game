/*
  useLanguage.js

  Hook para acessar idioma e textos traduzidos.
*/

import { useContext } from 'react';

import { LanguageContext } from '../context/languageContext';

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage precisa ser usado dentro de LanguageProvider.');
  }

  return context;
}