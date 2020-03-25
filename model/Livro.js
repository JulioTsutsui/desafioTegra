const mongoose = require("mongoose");
const configs = require("../configs.json");
// models
const LivroSchema = new mongoose.Schema({
	title: String,
	author: [String],
	price: Number,
	stock: Number
});

module.exports = mongoose.model("Livro",LivroSchema,configs.dbname);
