const express = require("express");

const app = express();
const port = 3000;

app.get("/", (request, response) => {
    return response.send("teste");
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
