const jwt = require('jsonwebtoken')
const User = require('../models/User');

const verifyToken = async (req,res,next) =>{
  //verify user is authenticated
  const authorization = req.headers.token
  if(!authorization){
      return res.status(401).json({error: 'Authorization token required'})
  }
  const token = authorization.split(' ')[1]
  // console.log(token)
  try{
      const {_id} = jwt.verify(token, 'secretcode')
      req.user = await User.findOne({_id})
      console.log(req.user.isAdmin)
      next();
  }catch (error){
      console.log(error)
      res.status(401).json({error: 'Request is not authorized'})
  }
  
}
const verifyTokenAndAuthorization = async (req, res, next) => {
    verifyToken(req, res, () =>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else {
            return res.status(401).json("You are not authenticated!");
          }
    })
}
const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });
  };
  
module.exports = {verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization};
