/*
  ProgressBar.jsx

  Responsabilidade:
  mostrar visualmente quantos níveis foram concluídos.

  O rótulo "Progresso/Progress" vem do idioma selecionado.
*/

import { useLanguage } from '../hooks/useLanguage';

function ProgressBar({ current, total }) {
  const { t } = useLanguage();

  const percentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="progress-wrapper">
      <div className="progress-info">
        <span>{t.progress.label}</span>
        <span>
          {current}/{total}
        </span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;