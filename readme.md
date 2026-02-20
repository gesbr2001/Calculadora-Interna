# 🧮 Calculadora Web Interna

Sistema simples de calculadora desenvolvido para uso interno da empresa, com acesso via navegador, histórico de operações e registro de acessos.

---

## 🚀 Funcionalidades

* ➕ Soma
* ➖ Subtração
* ✖️ Multiplicação
* ➗ Divisão
* 🧹 Limpar tudo
* ✏️ Apagar último número
* 📜 Histórico lateral de contas
* 📊 Log de acessos (IP, data, navegador)

---

## 🌐 Acesso

Sistema disponível na rede interna:

```
http://192.1xx.8x.1xx:2960
```

Ou via domínio local:

```
http://calculadora.empresa.local:2960
```

---

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* Node.js
* Express
* PM2 (gerenciamento de processos)
* Morgan (logs de acesso)

---

## 📦 Instalação

### 1️⃣ Clonar o projeto

```bash
git clone https://seu-repositorio.git
cd calculadora
```

---

### 2️⃣ Instalar dependências

```bash
npm install
```

---

### 3️⃣ Rodar o servidor

```bash
node server.js
```

---

## ⚙️ Rodando em produção (PM2)

### Iniciar com PM2

```bash
pm2 start server.js --name calculadora
```

### Ver status

```bash
pm2 list
```

### Reiniciar

```bash
pm2 restart calculadora
```

### Parar

```bash
pm2 stop calculadora
```

### Inicializar com o sistema

```bash
pm2 startup
pm2 save
```

---

## 📁 Estrutura do projeto

```
calculadora/
│
├── index.html
├── server.js
├── acessos.log
├── package.json
```

---

## 📊 Logs de acesso

Os acessos são registrados automaticamente no arquivo:

```
acessos.log
```

Exemplo:

```
05/02/2026:14:32:10 | IP: 19X.1Xx.Xx.xx | GET / | Navegador: Mozilla/5.0...
```

---

## 🔐 Segurança

* Pode ser utilizado com HTTPS via Nginx
* Recomendado uso de rede interna
* Possível integração com autenticação futura

---

## 📱 Responsividade

Interface adaptada para:

* Computadores
* Tablets
* Celulares

---

## 🧠 Melhorias futuras

* 🔐 Sistema de login
* 💾 Persistência do histórico
* 📊 Dashboard administrativo
* 🌍 Publicação externa com domínio

---

## 👨‍💻 Autor

Projeto desenvolvido por **Gabriel Estrela**

---

## 📌 Observações

Sistema voltado para uso interno, podendo ser expandido conforme necessidade da empresa.
