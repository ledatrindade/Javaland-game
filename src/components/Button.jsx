/*
  Button.jsx

  Botão padrão do Javaland.
  Agora ele toca som de click automaticamente quando usado.
*/

import { playSound } from '../services/soundPlayer';


function Button({
  children,
  type = 'button',
  variant = 'primary',
  disabled = false,
  onClick,
}) {
  function handleClick(event) {
    if (disabled) {
      return;
    }

    playSound('click', 0.35);

    if (onClick) {
      onClick(event);
    }
  }

  return (
    <button
      type={type}
      className={`btn btn-${variant}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;