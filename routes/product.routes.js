const express = require("express");
const User = require("../models/users.model.js");
const router  = express.Router();
const {getProducts,getProductss, putProduct, postProduct, deleteProduct} = require('../controllers/product.controller.js');


router
.get("/", getProducts)
.get('/:id',getProductss)
.put("/:id", putProduct)
.post("/",postProduct)
.delete("/:id" , deleteProduct)
  
module.exports = router;