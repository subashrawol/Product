const Router  = require("express");
const { addProduct, getProducts, deleteProducts, updateProduct, oneProduct, searchProduct, verifyToken } = require("../controllers/productService");
const router  = Router();

router.post("/add",verifyToken, addProduct);
router.get("/getAll", verifyToken, getProducts);
router.delete("/delete/:id",  verifyToken, deleteProducts)
router.get("/getOne/:id",verifyToken, oneProduct )
router.put("/update/:id",verifyToken, updateProduct );
router.get("/search/:key",verifyToken, searchProduct)
module.exports = router;