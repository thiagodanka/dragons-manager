## ✨ Visão Geral

O **Dragons Manager** é uma aplicação web para gerenciamento de dragões fictícios via API. Permite autenticação local, cadastro, edição, remoção e visualização detalhada de dragões.

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
    ├── assets/
    │     └── images/
    │           └── logo.svg
    │           └── ... (outros assets)
    │
    ├── components/
    │     ├── Button/
    │     │     ├── Button.jsx
    │     │     └── Button.module.scss
    │     ├── Header/
    │     │     ├── Header.jsx
    │     │     └── Header.module.scss
    │     └── DragonCard/
    │           ├── DragonCard.jsx
    │           └── DragonCard.module.scss
    │
    ├── pages/
    │     ├── Login/
    │     │     ├── Login.jsx
    │     │     └── Login.module.scss
    │     ├── DragonList/
    │     │     ├── DragonList.jsx
    │     │     └── DragonList.module.scss
    │     ├── DragonDetails/
    │     │     ├── DragonDetails.jsx
    │     │     └── DragonDetails.module.scss
    │     └── CreateDragon/
    │           ├── CreateDragon.jsx
    │           └── CreateDragon.module.scss
    │
    ├── services/
    │     └── api.js
    │
    ├── styles/
    │     ├── _variables.scss
    │     ├── _mixins.scss
    │     └── global.scss
    │
    ├── routes/
    │     └── AppRoutes.jsx
    │
    ├── App.jsx
    ├── main.jsx
    └── vite.config.js
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

A autenticação é feita localmente utilizando `localStorage`, pois a API não possui endpoints de autenticação.

- Usuário padrão criado localmente no login
- Após login, um token fictício é salvo no `localStorage`
- Rotas protegidas por verificação desse token

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