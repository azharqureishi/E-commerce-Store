const mongoose = require('mongoose')
const User = require('../models/User')
// <--- get all user --->
const getAllUser = async (req, res) => {
    const user = await User.find({})
    res.status(200).json(user)
}
// <--- get a user --->
const getUser = async (req, res) => {
   const {id} = req.params;
   if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such user'})
   }
    try{

        const user = await User.findById(id)
        res.status(200).json(user)
    }
    catch (error){
        return res.status(404).json(error)
    }
}
// <--- update user --->
const updateUser = async (req, res) => {
   const {id} = req.params;

   //check validation of "id"
   if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such user'})
   }
    try{
        const user = await User.findByIdAndUpdate({_id: id}, {...req.body},{new: true})
        res.status(200).json(user)
    }
    catch (error){
        return res.status(404).json(error)
    }
}
// <--- update user --->
const deleteUser = async (req, res) => {
    const {id} = req.params;
    
    //check validation of "id"
   if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such user'})
    }
    try{
        const user = await User.findByIdAndDelete({_id: id}, {new: true})
        res.status(200).json("User has been deleted....")
    } catch (error){
        return res.status(404).json(error)
    }
}
// <--- update user --->
const getUserStatus =  async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
  }

module.exports = {getAllUser, getUser, updateUser, deleteUser, getUserStatus}