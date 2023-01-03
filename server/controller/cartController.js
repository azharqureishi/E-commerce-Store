const Cart = require('../models/Cart');
const moongoose = require('mongoose')

// <--- CREATE --->
const createCart = async (req, res) => {
    try {
        const cart = await Cart.create(req.body)
        res.status(200).json(cart)
    }
    catch (error) {
        res.status(500).json(error)
    }
}

// <--- UPDATE --->
const updateCart = async (req, res) => {
    const {id} = req.params;
    if(!moongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'no such user id'})
    }
    try {
        const cart = await Cart.findByIdAndUpdate({_id: id}, {...req.body}, {new: true})
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json(error)
    }
}
// <--- DELETE --->
const deleteCart = async (req, res) => {
    const {id} = req.params;
    if(!moongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'no such user id'})
    }
    try {
        const cart = await Cart.findByIdAndDelete(id)
        res.status(200).json("cart has been deleted...")
    } catch (error) {
        res.status(500).json(error)
    }
}
// <--- GET --->
const getCart = async (req, res) => {
    const {id} = req.params;
    if(!moongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'no such user id'})
    }
    try {
        const cart = await Cart.findById(id)
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json(error)
    }
}
// <--- GET ALL --->
const getAllCart = async (req, res) => {
    try {
        const cart = await Cart.find({}).sort({createdAt: -1}).limit(5)
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json(error)    
    }
}

module.exports = {createCart, updateCart, deleteCart, getCart, getAllCart}