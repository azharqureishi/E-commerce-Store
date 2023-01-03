// <---- module import section ---->
// import packages
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors')
//import routes
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const stripeRoute = require("./routes/stripe");

dotenv.config();
const app = express();

app.use(cors());
// <---- Routes Section ---->
app.use(express.json())
app.use((req, res, next) =>{
    console.log(req.method, res.path)
    next();
})
app.use('/api/checkout', stripeRoute)
app.use('/api/auth', authRoute)
app.use('/api/users',  userRoute)
app.use('/api/products',  productRoute)
app.use('/api/cart',  cartRoute)
app.use('/api/orders', orderRoute)


// <---- DB connection & server listening ---->
const url = "mongodb://0.0.0.0:27017";
mongoose.connect(process.env.DB_URL)
.then(() => app.listen(process.env.PORT || 5500,
() => console.log("server listening on port 5000")))
.catch(err => console.log(err))



