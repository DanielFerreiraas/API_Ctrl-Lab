import path from "path";
import app from "./app";
import express from "express";

const sorte = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Bem vindo a API do CTRL+LAB");
});

sorte.use('/files', express.static(path.resolve(__dirname,"uploads")));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});