require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// Banco de dados
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) throw err;
    console.log("Conectado ao banco de dados!");
});

// Endpoint para inserir dados
app.post("/cadastrar", (req, res) => {
    const { nome_completo, email, telefone, endereco, numero_residencia, complemento, bairro, municipio, uf, cep, rg, cpf, senha } = req.body;

    const sql = `
        INSERT INTO usuarios (nome_completo, email, telefone, endereco, numero_residencia, complemento, bairro, municipio, uf, cep, rg, cpf, senha)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [nome_completo, email, telefone, endereco, numero_residencia, complemento, bairro, municipio, uf, cep, rg, cpf, senha], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("Erro ao cadastrar usuário.");
        } else {
            res.status(201).send("Usuário cadastrado com sucesso!");
        }
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
