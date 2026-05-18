# hello-react

Projeto React com stack moderna e boas práticas de mercado.

## Stack

| Ferramenta | Versão | Função |
|---|---|---|
| [React](https://react.dev) | 18 | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org) | 5 | Tipagem estática |
| [Vite](https://vitejs.dev) | 6 | Build tool e servidor de desenvolvimento |
| [React Router](https://reactrouter.com) | 6 | Roteamento client-side |
| [TanStack Query](https://tanstack.com/query) | 5 | Gerenciamento de estado do servidor |
| [Zustand](https://zustand-demo.pmnd.rs) | 5 | Estado global |
| [Vitest](https://vitest.dev) | 3 | Testes unitários |
| [Testing Library](https://testing-library.com) | 16 | Testes de componentes |
| [ESLint](https://eslint.org) | 9 | Linting |
| [Prettier](https://prettier.io) | 3 | Formatação de código |

## Requisitos

- Node.js 18+
- npm 9+

## Instalação

```bash
npm install
```

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Verifica tipos e gera build de produção |
| `npm run preview` | Prévia local do build de produção |
| `npm run lint` | Executa o ESLint em todo o projeto |
| `npm run format` | Formata os arquivos em `src/` com Prettier |
| `npm run test` | Executa os testes em modo watch |
| `npm run test:run` | Executa os testes uma única vez |
| `npm run coverage` | Gera relatório de cobertura de testes |

## Estrutura do projeto

```
src/
├── main.tsx              # Entry point — monta providers (QueryClient, Router)
├── App.tsx               # Layout raiz com navegação e Outlet
├── vite-env.d.ts         # Tipos do Vite
│
├── routes/
│   └── index.tsx         # Definição de todas as rotas
│
├── pages/
│   ├── Home.tsx          # Página inicial (contador + lista de posts)
│   ├── About.tsx         # Página sobre o projeto
│   └── __tests__/
│       └── Home.test.tsx # Testes da página Home
│
├── store/
│   └── useAppStore.ts    # Store Zustand (estado global)
│
├── hooks/
│   └── usePosts.ts       # Hook React Query para buscar posts
│
└── test/
    └── setup.ts          # Configuração global dos testes (jest-dom)
```

## Arquitetura

### Roteamento

As rotas são definidas em `src/routes/index.tsx` usando `createBrowserRouter`. O componente `App` serve como layout raiz com `<Outlet>`, e cada página é renderizada como rota filha.

```
/        → pages/Home.tsx
/about   → pages/About.tsx
```

### Estado

O projeto separa dois tipos de estado:

- **Estado do servidor** — dados remotos (fetch, cache, loading, error) gerenciados pelo **React Query**. Os hooks ficam em `src/hooks/`.
- **Estado do cliente** — estado global da UI gerenciado pelo **Zustand**. As stores ficam em `src/store/`.

### Testes

Os testes ficam em pastas `__tests__/` ao lado dos arquivos que testam. O setup global (`src/test/setup.ts`) importa o `@testing-library/jest-dom` para disponibilizar os matchers customizados (`.toBeInTheDocument()`, etc).

Dependências externas (como hooks de API) são mockadas com `vi.mock` para isolar o componente testado.

## Configuração

### TypeScript

O projeto usa a configuração de referências do TypeScript:

- `tsconfig.json` — raiz, referencia os demais
- `tsconfig.app.json` — configuração do código em `src/`
- `tsconfig.node.json` — configuração dos arquivos de tooling (`vite.config.ts`)

### ESLint

Usa o formato flat config (ESLint 9) em `eslint.config.js`, com plugins para TypeScript, React Hooks e React Refresh. A integração com Prettier é feita via `eslint-config-prettier`.

### Prettier

Configurado em `.prettierrc`:

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```
