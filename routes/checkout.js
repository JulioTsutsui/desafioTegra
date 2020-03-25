const router = require("express").Router();
const CheckoutController = require("../controller/Checkout");

router.get("/",(req,res) => {
	CheckoutController.index(req,res);
});

router.post("/",async (req,res) => {
	CheckoutController.atualizaCarrinho(req,res);
});

router.delete("/",async (req,res) => {
	CheckoutController.deletaItem(req,res);
});

module.exports = router;