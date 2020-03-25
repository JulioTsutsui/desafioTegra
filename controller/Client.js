const Livro=require("../model/Livro");
exports.index = async function(req,res){
	let livros=await Livro.find().lean();
	res.render("client",{livros: livros});
}