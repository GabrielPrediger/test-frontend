# Frontend - Teste Técnico para Loja de Brinquedos (React)

## 1. Visão Geral do Projeto

Esta é uma Single Page Application (SPA) desenvolvida em **React**, com **Vite** e **TypeScript**, que consome a API RESTful da Loja de Brinquedos. A aplicação permite que administradores autenticados gerenciem clientes e visualizem estatísticas de vendas por meio de uma interface moderna, responsiva e focada na experiência do usuário.

## 2. Funcionalidades Implementadas

* ✅ **Autenticação de Usuário**

  * Tela de login segura e com validação, integrada ao backend via JWT.

* ✅ **Gerenciamento de Estado**

  * **TanStack Query (React Query)**: caching, revalidação e atualização automática da UI.
  * **React Context**: estado global de autenticação.

* ✅ **Dashboard de Estatísticas**

  * Gráfico de barras responsivo (Recharts) com vendas diárias.
  * Cards informativos para “top clientes”.

* ✅ **Página de Clientes**

  * **Normalização de Dados**: camada de transformação que converte o JSON “bagunçado” em estrutura tipada.
  * **Listagem Responsiva**: tabela em desktop e lista de cards em dispositivos móveis.
  * **CRUD com UX Moderna**: adicionar, editar e deletar clientes usando modais (Headless UI).
  * **Lógica “Letra Faltante”**: demonstra manipulação de dados no cliente.

* ✅ **Design e UX**

  * **Responsividade**: troca de sidebar por menu inferior em mobile.
  * **Feedback**: notificações “toast” (react-hot-toast) e componentes de loading.
  * **Animações Sutis**: transições suaves com Framer Motion.

## 3. Tecnologias e Bibliotecas

* **React**
* **Vite**
* **TypeScript**
* **Tailwind CSS**
* **TanStack Query (React Query)**
* **React Hook Form**
* **React Router**
* **Headless UI**
* **Framer Motion**
* **Recharts**
* **React Hot Toast**
* **Lucide React**
* **Axios**

## 4. Estrutura do Projeto

```
src/
├── pages/        # Componentes de página (Login, Home, Clientes)
├── components/   # Componentes reutilizáveis (Modais, Forms, Spinners, etc.)
├── services/     # Lógica de comunicação com a API (Axios)
├── contexts/     # Contexto de Autenticação
├── utils/        # Funções utilitárias (ex: findFirstMissingLetter)
├── layouts/      # Componentes de layout (ex: LoggedInLayout)
└── main.tsx      # Ponto de entrada
```

## 5. Configuração do Ambiente

### Pré-requisitos

* Node.js v18+
* npm ou yarn
* Backend em execução (consulte o README do backend)

### Passo a Passo

1. Acesse a pasta do frontend:

   ```bash
   cd test-frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie o arquivo `.env` na raiz e defina a URL da API:

   ```env
   VITE_API_BASE_URL=http://localhost:3000
   ```

## 6. Executando a Aplicação

1. Garanta que o servidor backend está em execução.
2. Inicie o frontend:

   ```bash
   npm run dev
   ```
3. Acesse em `http://localhost:5173`.

## 7. Credenciais para Login

Use o usuário administrador criado pelo seed do backend:

* **Email:** `admin@lojadebrinquedos.com`
* **Senha:** `senha123`
