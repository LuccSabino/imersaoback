import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";
import routes from "./src/routes/postsRoutes.js";
// Cria uma instância do Express
const app = express();
app.use(express.static("uploads"));
routes(app)
// Inicia o servidor na porta 3000
app.listen(3000, () => {
    // Imprime uma mensagem no console indicando que o servidor está ouvindo
    console.log("servidor escutando...");
});
