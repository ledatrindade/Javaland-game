function CodeBlock({ code }) {
  /*
    Exibe exemplos de código com formatação própria.
    O conteúdo vem do levels.json.
  */

  return (
    <pre className="code-block">
      <code>{code}</code>
    </pre>
  );
}

export default CodeBlock;