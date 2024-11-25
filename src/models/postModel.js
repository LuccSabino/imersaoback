import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
// Chama a função conectarAoBanco para estabelecer a conexão com o banco de dados
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Define uma função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
    // Seleciona o banco de dados "imersaoBack"
    const db = conexao.db("imersaoBack");
    // Seleciona a coleção "posts"
    const colecao = db.collection("posts");
    // Retorna todos os documentos da coleção como um array
    return colecao.find().toArray();  
}
export async function criarPost(novoPost) {
    const db = conexao.db("imersaoBack");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost)
    
}
export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersaoBack");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId (objID)}, {$set:novoPost});
}