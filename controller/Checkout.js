const Livro=require("../model/Livro");
const Utils = require("../utils/utils");
let Carrinho=require("../model/Carrinho");
let carr = new Carrinho();
console.log(carr);

exports.index = function (req,res) {
	res.render("checkout",{carrinho: carr});
}

exports.atualizaCarrinho = async function (req,res) {
	let {id,quantidade}=req.body;
	let livro=carr.livros.find(livro => livro._id.toString()===id);
	if(livro) {
		console.log("Já existe, adicionar qtd");
		let index=carr.livros.findIndex(livro => livro._id.toString()===id);
		let livro=carr.livros[index];
		quantidade===undefined? livro.quantidade+=1:livro.quantidade=parseInt(quantidade);
		livro.subtotal=parseFloat((livro.price*livro.quantidade).toFixed(2));

	} else {
		livro=await Livro.findById(req.body.id).lean();
		livro.quantidade=1;
		livro.subtotal=parseFloat((livro.price*livro.quantidade).toFixed(2));
		carr.livros.push(livro);
		console.log("Criado um registro novo");
	}

	carr.total=await Utils.atualizaTotal(carr);
	console.log(carr);

	res.json({livro: livro,total: carr.total});
}
exports.deletaItem = async function (req,res) {
	let id=req.body.id;
	let index=carr.livros.findIndex(livro => livro._id.toString()===id);

	carr.livros.splice(index,1);

	carr.total = await Utils.atualizaTotal(carr);
	res.json({message: "deletado"});
}