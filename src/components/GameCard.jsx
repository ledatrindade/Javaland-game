function GameCard({ children, className = '' }) {
  /*
    Card visual padrão do jogo.
    Usado em telas como início, menu, nível e recompensa.
  */

  return (
    <section className={`game-card ${className}`}>
      {children}
    </section>
  );
}

export default GameCard;