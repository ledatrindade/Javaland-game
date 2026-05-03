/*
  challengeValidator.js

  Responsável por validar as respostas dos desafios.

  Importante:
  este MVP não executa Java real.
  Ele compara a resposta do usuário com a resposta esperada,
  mas tenta ser flexível com espaços, quebras de linha e ponto e vírgula.
*/

function normalizeText(value) {
  return String(value)
    .trim()
    .toLowerCase();
}

function normalizeCode(value) {
  return String(value)
    .trim()

    // Remove quebras de linha e múltiplos espaços.
    .replace(/\s+/g, ' ')

    // Normaliza espaços ao redor de símbolos comuns.
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}')
    .replace(/\s*;\s*/g, ';')
    .replace(/\s*\(\s*/g, '(')
    .replace(/\s*\)\s*/g, ')')
    .replace(/\s*,\s*/g, ',')
    .replace(/\s*=\s*/g, '=')
    .replace(/\s*\+\s*/g, '+')
    .replace(/\s*>=\s*/g, '>=')
    .replace(/\s*<=\s*/g, '<=')
    .replace(/\s*==\s*/g, '==')
    .replace(/\s*!=\s*/g, '!=')

    // Remove espaços finais depois das normalizações.
    .replace(/\s+/g, ' ')
    .trim();
}

export function validateAnswer(step, userAnswer) {
  if (!step) {
    return false;
  }

  if (step.type === 'complete-code') {
    return normalizeText(userAnswer) === normalizeText(step.answer);
  }

  if (step.type === 'write-code') {
    return normalizeCode(userAnswer) === normalizeCode(step.answer);
  }

  if (step.type === 'true-false') {
    return userAnswer === step.answer;
  }

  return userAnswer === step.answer;
}