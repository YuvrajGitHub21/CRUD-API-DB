
const User = require('../models/users.model.js')

const getProducts = async (req , res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }  
}

const getProductss = async (req , res) => {
    try {
        const {id} = req.params;
        const product = await User.findById(id);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({message: error,meggage});
      }
}

const putProduct = async(req,res) => {
    try {
      const {id} = req.params;
      const product = await User.findByIdAndUpdate(id,req.body);
  
      if(!product){
        return res.status(404).json({message : "Produxt not found"});
      }
      const updatedProduct = await User.findById(id);
      res.status(200).json(updatedProduct);
  
    } catch (error) {
      res.status(500).json({meggage: error.message});
    }
}

const postProduct = async (req, res) => {
    try {
      const asdd = await User.create(req.body);
      console.log(req.body);
      res.status(201).json(asdd);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

const deleteProduct = async (req,res) => {
    try {
      const {id} = req.params;
      const product = await User.findByIdAndDelete(id);
  
      if(!product ){
        return res.status(404).json({message : "Product not found"});
      }
  
      res.status(200).json({message: "Product deleted successfully"});
      
    } catch (error) {
      res.status(500).json({message : error.message});
    }
}

module.exports = {
    getProducts,
    getProductss,
    putProduct,
    postProduct,
    deleteProduct
};