﻿
# Dashboard CRUD de Produtos 🛒

Sistema administrativo completo com login, painel de controle e funcionalidade CRUD para produtos, usando:

- 💻 **Front-end**: HTML, CSS, JavaScript puro
- 🔙 **Back-end**: Python com Flask
- 🧠 **Banco de Dados**: SQLite
- 🔐 **Autenticação de Sessão**: via Flask session
- 🎨 **Tema Escuro/Claro** + Interface moderna e responsiva

---

## 📁 Estrutura do Projeto

```
dashboard-crud-produtos/
│
├── backend/
│   ├── app.py              # Servidor Flask com rotas de login, usuários e produtos
│   ├── database.py         # Operações com SQLite
│   └── users.db            # Banco de dados SQLite
│
├── frontend/
│   ├── index.html          # Tela de login
│   ├── dashboard.html      # Painel principal com cards e produtos
│   ├── dashboard_produtos.html # Tela de gerenciamento de produtos
│   ├── usuarios.html       # Tela de gerenciamento de usuários
│   └── style.css           # Estilos aplicados em toda a interface
│
└── README.md
```

---

## 🚀 Como rodar o projeto localmente

### 🧰 Pré-requisitos

- Python 3.7+
- Git
- Navegador
- (Opcional) Ambiente virtual Python

---

### 🐍 Back-end Flask

1. Acesse a pasta do back-end:

```bash
cd backend
```

2. (Opcional) Crie e ative um ambiente virtual:

```bash
python -m venv venv
venv\Scripts\activate
```

3. Instale as dependências:

```bash
pip install flask flask-cors
```

4. Rode o servidor:

```bash
python app.py
```

Acesse: `http://localhost:5000`

---

### 🌐 Front-end (em outra aba do terminal)

1. Acesse a pasta do front-end:

```bash
cd frontend
```

2. Rode um servidor local com Python:

```bash
python -m http.server 8080
```

3. Acesse no navegador:  
👉 `http://localhost:8080/index.html`

---

## ✅ Login inicial

> ⚠️ Usuário padrão criado manualmente no banco:

- **Usuário (email):** `admin`
- **Senha:** `admin`

---

## ✨ Funcionalidades

- [x] Login com sessão
- [x] Tela de dashboard com cards estatísticos
- [x] CRUD de usuários
- [x] CRUD completo de produtos (criar, editar, excluir, buscar)
- [x] Lista de produtos dinâmica no dashboard
- [x] Contador de produtos atualizado via API
- [x] Tema escuro/claro (Dark Mode)
- [ ] Gráficos interativos (em breve)

---

## 📦 Tecnologias Utilizadas

- Python + Flask
- HTML5 + CSS3 + JavaScript puro
- SQLite
- Git + GitHub
- VSCode

---

## 📄 Licença

Este projeto é livre para uso acadêmico.  
Feito com ❤️ por [Ian Victor Reis](https://github.com/IanVictorReis)

Repositório oficial: [dashboard-crud-produtos](https://github.com/IanVictorReis/dashboard-crud-produtos)
