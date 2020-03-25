const router=require("express").Router();
const ClientController = require("../controller/Client");

router.get("/",async (req,res) => {
	ClientController.index(req,res);
});

module.exports = router;