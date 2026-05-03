/*
  ToolboxHint.jsx

  Responsabilidade:
  mostrar a dica da caixa de ferramentas.

  A dica vem do nível atual.
  O título "Dica da caixa..." / "Toolbox hint" vem do idioma.
*/

import { useLanguage } from '../hooks/useLanguage';

import toolboxIcon from '../assets/icons/toolbox/toolbox-icon.png';

function ToolboxHint({ hint }) {
  const { t } = useLanguage();

  if (!hint) {
    return null;
  }

  return (
    <div className="toolbox-hint">
      <img
        src={toolboxIcon}
        alt=""
        className="toolbox-hint-icon"
        aria-hidden="true"
      />

      <div className="toolbox-hint-content">
        <strong>{t.toolbox.title}</strong>
        <p>{hint}</p>
      </div>
    </div>
  );
}

export default ToolboxHint;