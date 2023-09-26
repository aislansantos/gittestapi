const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
    return res.send("Api");
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
