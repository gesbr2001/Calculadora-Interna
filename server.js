const express = require('express');
const path = require('path');

const app = express();
const PORT = 2960; // SUA PORTA

app.use(express.static(path.join(__dirname)));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://192.168.88.103:${PORT}`);
});
