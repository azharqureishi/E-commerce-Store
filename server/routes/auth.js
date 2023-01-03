const {signupUser, loginUser} = require('../controller/authController')
const router = require('express').Router();



router.post('/signup',  signupUser)
router.post('/login', loginUser)

module.exports = router;