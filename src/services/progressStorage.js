// Chave usada no localStorage.
// É com esse nome que o progresso será salvo no navegador.
const STORAGE_KEY = 'javaland-progress';

export function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Erro ao salvar progresso:', error);
  }
}

export function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return null;
    }

    return JSON.parse(saved);
  } catch (error) {
    console.error('Erro ao carregar progresso:', error);
    return null;
  }
}

export function clearProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Erro ao limpar progresso:', error);
  }
}