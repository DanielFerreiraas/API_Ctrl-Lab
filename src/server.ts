import app from "../app";

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Bem vindo a API do CTRL+LAB");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});