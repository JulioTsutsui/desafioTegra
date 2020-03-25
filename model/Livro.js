const mongoose = require("mongoose");
// models
const LivroSchema = new mongoose.Schema({
	title: String,
	author: [String],
	price: Number,
	stock: Number
});

module.exports = mongoose.model("Livro",LivroSchema,"tegrabooks");