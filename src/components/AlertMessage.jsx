/*
  AlertMessage.jsx

  Esse componente mostra os avisos do jogo.
  Ele substitui os alertas simples do navegador e também substitui emojis.

  Tipos possíveis:
  - info
  - success
  - warning
  - error

  Cada tipo usa um ícone personalizado que fica em:
  src/assets/icons/alerts/
*/

import alertInfoIcon from '../assets/icons/alerts/alert-info.png';
import alertSuccessIcon from '../assets/icons/alerts/alert-success.png';
import alertWarningIcon from '../assets/icons/alerts/alert-warning.png';
import alertErrorIcon from '../assets/icons/alerts/alert-error.png';

const alertIcons = {
  info: alertInfoIcon,
  success: alertSuccessIcon,
  warning: alertWarningIcon,
  error: alertErrorIcon,
};

function AlertMessage({ type = 'info', title, message }) {
  /*
    Se não tiver mensagem, não renderiza nada.
    Isso evita espaço vazio na tela.
  */
  if (!message) {
    return null;
  }

  const icon = alertIcons[type] || alertIcons.info;

  return (
    <div className={`alert-message alert-${type}`} role="alert">
      <img
        src={icon}
        alt=""
        className="alert-custom-icon"
        aria-hidden="true"
      />

      <div className="alert-content">
        {title && <strong>{title}</strong>}
        <p>{message}</p>
      </div>
    </div>
  );
}

export default AlertMessage;