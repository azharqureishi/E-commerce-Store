const Product = require('../models/Product')
const moongoose = require('mongoose')

// <--- CREATE --->
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }
    catch (error) {
        res.status(500).json(error)
    }
}

// <--- UPDATE --->
const updateProduct = async (req, res) => {
    const {id} = req.params;
    if(!moongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'no such product id'})
    }
    try {
        const product = await Product.findByIdAndUpdate({_id: id}, {...req.body}, {new: true})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}
// <--- DELETE --->
const deleteProduct = async (req, res) => {
    const {id} = req.params;
    if(!moongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'no such product id'})
    }
    try {
        const product = await Product.findByIdAndDelete(id)
        res.status(200).json("Product has been deleted...")
    } catch (error) {
        res.status(500).json(error)
    }
}
// <--- GET --->
const getProduct = async (req, res) => {
    const {id} = req.params;
    if(!moongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'no such product id'})
    }
    try {
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
        res.status(500).json(error)
    }
}
// <--- GET ALL --->
const getAllProduct = async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let products;
  
        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(1);
        } else if (qCategory) {
            products = await Product.find({
                categories: {
                $in: [qCategory],
                },
            });
        } else {
            products = await Product.find({});
        }

      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
    
        
}

module.exports = {createProduct, updateProduct, deleteProduct, getProduct, getAllProduct}