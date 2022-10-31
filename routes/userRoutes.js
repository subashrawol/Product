const express  = require("express");
const router  = express.Router();

const {registerApi, loginApi} = require("../controllers/authService");
router.post("/register", registerApi)
router.post("/login", loginApi)


module.exports = router;