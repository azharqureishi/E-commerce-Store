const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = `sk_test_51M8PRaAng0J56ZEfoBiauikBRLb8HwONNkGHIQHaJs3QO451SmWw7qd4IE0jctPhnPMfxnKql8KBEGVAZL7EBERM00S3edy5qY`
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
     const {amount, tokenId} = req.body;
     stripe.charges.create(
    {
      source: tokenId,
      amount: amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
     
      } else {
        res.status(200).json(stripeRes);
      }
    }
    );
   
});

module.exports = router;