const router = require('express').Router();
const Order = require('../models/Order')
const { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('../middleware/requireAuth');

  const {
//         createOrder,
        getOrder,
//         getAllOrder,
//         updateOrder,
//         deleteOrder,
//         getMonthlyIncome,
        } = require('../controller/orderController');


        router.post('/',async (req, res) =>{
           const data = req.body;
           console.log(data)
        //    res.json(req.body)
                try {
                const order = await Order.create(req.body)
                res.status(200).json(order)
                }
                catch (error) {
                res.status(500).json(error)
                }
        })
// router.get('/',verifyTokenAndAdmin, getAllOrder )
router.get('/:id', getOrder )
// router.put('/:id',verifyTokenAndAdmin, updateOrder )
// router.delete('/:id',verifyTokenAndAdmin, deleteOrder )

// GET MONTHLY INCOME

// router.get("/income", verifyTokenAndAdmin, getMonthlyIncome);



module.exports = router;