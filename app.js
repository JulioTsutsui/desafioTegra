const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const configs = require("./configs.json");

//importação das rotas
const client=require("./routes/client");
const admin=require("./routes/admin");
const checkout = require("./routes/checkout");

//Mongoose config
const mongoose = require("mongoose");
mongoose.set('useNewUrlParser',true);
mongoose.set('useFindAndModify',false);
mongoose.set('useCreateIndex',true);
mongoose.set('useUnifiedTopology',true);

//DB connection
mongoose.connect(configs.connection);
// Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.set("view engine", "ejs");
app.set("views","./view");

//Rotas
app.use("/",client);
app.use("/dashboard",admin);
app.use("/carrinho",checkout);

app.listen(3000, ()=>{
	console.log("Server is ON");
});