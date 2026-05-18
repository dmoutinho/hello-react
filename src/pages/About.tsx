function About() {
  return (
    <div className="page">
      <section className="card">
        <h2>Sobre</h2>
        <p>Projeto React com as seguintes tecnologias:</p>
        <ul>
          <li>
            <strong>TypeScript</strong> — tipagem estática
          </li>
          <li>
            <strong>Vite</strong> — build tool e servidor de desenvolvimento
          </li>
          <li>
            <strong>React Router v6</strong> — roteamento client-side
          </li>
          <li>
            <strong>React Query</strong> — gerenciamento de estado do servidor
          </li>
          <li>
            <strong>Zustand</strong> — estado global simples
          </li>
          <li>
            <strong>Vitest + Testing Library</strong> — testes
          </li>
          <li>
            <strong>ESLint + Prettier</strong> — qualidade de código
          </li>
        </ul>
      </section>
    </div>
  )
}

export default About
