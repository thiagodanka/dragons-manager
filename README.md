# 🐉 Dragons Manager

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![SCSS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

Uma aplicação React para gerenciamento de dragões via API externa, com sistema de autenticação local e CRUD completo.

---

## 🖼️ Demonstração

| Login  
|-------
| <img src="./src/assets/images/screenshot-login.png" width="300">

---

## 📋 Funcionalidades

- Autenticação local (sem backend)
- Listagem de dragões ordenada alfabeticamente
- Cadastro, edição e exclusão de dragões
- Visualização de detalhes de cada dragão

---

## 🚀 Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/) 
<br>
- SCSS Modules  
  <sub><i>Estilos com escopo local, usando sintaxe SCSS</i></sub>

- CSS puro via SCSS (Sass)  
  <sub><i>Sem bibliotecas de UI externas, apenas estilização customizada</i></sub>
---

## 🗂️ Estrutura de Pastas

```plaintext
src/
    ├── App.jsx
    ├── main.jsx
    │
    ├── assets/
    │     └── images/
    │           
    ├── components/
    │     ├── Button/
    |     |    └──
    │     ├── DragonCard/
    │     └── Header/
    │
    ├── contexts/
    │
    ├── pages/
    │     ├── CreateDragon/
    │     ├── DragonDetails/
    │     ├── DragonList/
    │     │     ├── DragonList.jsx
    │     │     └── DragonList.module.scss
    │     └── Login/
    │           ├── Login.jsx
    │           └── Login.module.scss
    │
    ├── routes/
    │     ├── AppRoutes.jsx
    │     ├── PrivateRoute.jsx
    │     └── PublicRoute.jsx
    │
    ├── services/
    │     ├── Api.js
    │     ├── AuthService.js
    │     └── DragonService.js
    │
    ├── styles/
    │     ├── _mixins.scss
    │     ├── _variables.scss
    │     └── global.scss
    │
    └── utils/
          └── cookieUtils.js
```
---

## 🌐 API de Referência

**Base URL:**  
`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon`

| Método | Endpoint         | Descrição                |
|--------|------------------|-------------------------|
| GET    | `/dragon`        | Listar todos os dragões |
| GET    | `/dragon/:id`    | Detalhes de um dragão   |
| POST   | `/dragon`        | Criar novo dragão       |
| PUT    | `/dragon/:id`    | Atualizar dragão        |
| DELETE | `/dragon/:id`    | Remover dragão          |

---

## 🔒 Autenticação

O sistema usa um token `JWT` simulado armazenado em cookies seguros:

- Credenciais pré-definidas no .env
- Token com expiração de 1 hora
- Proteção de rotas via contexto React
- Dados do usuário codificados no token

---

## ⚙️ Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn
- Git

---

## 🔧 Configuração
Crie um arquivo `.env` na raiz do projeto com:
```plaintext
VITE_API_URL=http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon
VITE_USER=userExemple
VITE_PASSWORD=passExemple
```
---

## ⚡ Instalação e Uso

```bash
git clone https://github.com/thiagodanka/dragons-manager.git
cd dragons-manager
npm install
npm run dev
```

---

## 📄 Licença

Projeto desenvolvido exclusivamente para fins de avaliação técnica.