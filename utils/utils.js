exports.atualizaTotal= function (carrinho) {
	let temp_total=0;
	carrinho.livros.forEach(livro => {
		temp_total+=livro.subtotal;
	});
	return temp_total.toFixed(2);
}