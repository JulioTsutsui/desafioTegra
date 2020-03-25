const Livro=require("../model/Livro");

exports.index = async function (req,res) {
	let type = req.query.type;
	let livros=await Livro.find().lean();
	res.render("admin",{livros: livros, validacao:type});
}
exports.pegarUm = async function (req,res) {
	let livro=await Livro.findById(req.params.id).lean();
	res.json(livro);
}
exports.inserir = async function (req,res) {
	let {title,author,price,stock}=req.body;
	await Livro.create({
		title,
		author,
		price,
		stock
	},err => {
		if(err) {
			res.json({type:"B"});
		}
		console.log("Livro adicionado");
	});
	res.json({type: "A"});
}
exports.atualizar = async function (req,res) {
	let {title,author,price,stock}=req.body;
	await Livro.findByIdAndUpdate(req.params.id,{
		title,
		author,
		price,
		stock
	},err => {
		if(err) {
			res.json({type: "D"});
		}
		console.log("Livro atualizado");
	});
	res.json({type: "C"});
}
exports.deletar = async function (req,res) {
	await Livro.findByIdAndDelete(req.params.id,err => {
		if(err) {
			res.json({type: "F"});
		}
		console.log("Livro deletado");
	});
	res.json({type: "E"});
}