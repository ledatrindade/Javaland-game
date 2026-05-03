/*
  languageStorage.js

  Salva o idioma escolhido no navegador.
*/

const LANGUAGE_KEY = 'javaland-language';

export function loadLanguage() {
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);

    if (savedLanguage === 'pt' || savedLanguage === 'en') {
      return savedLanguage;
    }

    return 'pt';
  } catch (error) {
    console.error('Erro ao carregar idioma:', error);
    return 'pt';
  }
}

export function saveLanguage(language) {
  try {
    localStorage.setItem(LANGUAGE_KEY, language);
  } catch (error) {
    console.error('Erro ao salvar idioma:', error);
  }
}