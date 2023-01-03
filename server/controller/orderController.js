const Order = require('../models/Order');
const moongoose = require('mongoose')

// // <--- CREATE --->
// const createOrder = async (req, res) => {
//     // try {
//     //     const order = await Order.create(req.body)
//     //     res.status(200).json(order)
//     // }
//     // catch (error) {
//     //     res.status(500).json(error)
//     // }
   
// }

// <--- UPDATE --->
const updateOrder = async (req, res) => {
    const {id} = req.params;
    if(!moongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'order such user id'})
    }
    try {
        const order = await Order.findByIdAndUpdate({_id: id}, {...req.body}, {new: true})
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json(error)
    }
}
// <--- DELETE --->
const deleteOrder = async (req, res) => {
    const {id} = req.params;
    if(!moongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'no such user id'})
    }
    try {
        const order = await Order.findByIdAndDelete(id)
        res.status(200).json("order has been deleted...")
    } catch (error) {
        res.status(500).json(error)
    }
}
// <--- GET --->
const getOrder = async (req, res) => {
    const {id} = req.params;
    console.log(id)
    if(!moongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'no such user id'})
    }
    try {
        const order = await Order.findById(id)
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json(error)
    }
}
// <--- GET ALL --->
const getAllOrder = async (req, res) => {
    try {
        const order = await Order.find({}).sort({createdAt: -1}).limit(5)
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json(error)    
    }
}
// <--- GET MONTHLY INCOME ---> 
const getMonthlyIncome =  async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json(err);
    }
  }

module.exports = {updateOrder, deleteOrder, getOrder, getAllOrder,getMonthlyIncome}