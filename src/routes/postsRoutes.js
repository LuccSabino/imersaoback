import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from"../controllers/postController.js";
import cors from "cors";
const corsOptions = {
    origin:"http://localhost:8000",
    OptionsSuccessStatus: 200
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
const upload = multer({ dest: "./uploads" , storage})

//const upload = multer({dest:"./uploads"})

 const routes = (app) => {
    // Configura o Express para analisar o corpo das requisições como JSON
    app.use(express.json());
    app.use(cors(corsOptions))
    // Define uma rota GET para /posts
    app.get("/posts", listarPosts);
    // Define uma rota POST para /posts
    app.post("/posts", postarNovoPost);
    app.post("/upload",upload.single("imagem"), uploadImagem )
    app.put("/upload/:id", atualizarNovoPost)
}
//CRIAR[POST], LER[GET], DELETAR[DELET], ATUALIZAR[PUT].

export default routes;


// import express from "express";
// import multer from "multer";
// import { listarPosts, postarNovoPost, uploadImagem } from"../controllers/postController.js";

// // Configura o armazenamento do multer para salvar os arquivos em 'uploads/' com o nome original
// const storage = multer.diskStorage({
//     // Define o diretório de destino para os uploads
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     // Define o nome do arquivo no disco
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// })

// // Cria uma instância do multer com as configurações de armazenamento definidas
// // const upload = multer({ dest: "./uploads" , storage})
// // Uma vez que 'storage' já especifica o destino, 'dest' aqui é redundante e pode ser removido

// // Cria uma instância do multer usando o storage definido
// const upload = multer({ storage })


// // Define as rotas da aplicação
// const routes = (app) => {
//     // Analisa o corpo das requisições como JSON
//     app.use(express.json());
//     // Define a rota GET para listar os posts
//     app.get("/posts", listarPosts);
//     // Define a rota POST para criar um novo post
//     app.post("/posts", postarNovoPost);
//     // Define a rota POST para fazer upload de uma imagem
//     app.post("/upload",upload.single("imagem"), uploadImagem )
// }
// // Exporta as rotas
// export default routes;