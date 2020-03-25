const router=require("express").Router();
const AdminController = require("../controller/Admin");

router.get("/",(req,res) => {
	AdminController.index(req,res);
});

router.get("/livro/:id",(req,res) => {
	AdminController.pegarUm(req,res);
});

router.post("/livro/inserir", (req,res) => {
	AdminController.inserir(req,res);
});

router.put("/livro/atualizar/:id", (req,res) => {
	AdminController.atualizar(req,res);
});

router.delete("/livro/deletar/:id", (req,res) => {
	AdminController.deletar(req,res);
});

module.exports = router;