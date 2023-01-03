const router = require('express').Router();
const {verifyToken,verifyTokenAndAdmin, verifyTokenAndAuthorization} = require('../middleware/requireAuth')

const {getAllUser, getUser, updateUser, deleteUser, getUserStatus} = require('../controller/userController')

router.get('/', getAllUser )

// router.use(requireAuth)

router.get('/:id',verifyTokenAndAdmin, getUser )
router.get('/:id',verifyTokenAndAuthorization,verifyTokenAndAdmin, getAllUser )
router.put('/:id',verifyTokenAndAuthorization, updateUser )
router.delete('/:id',verifyTokenAndAuthorization, deleteUser )

//GET USER STATS

router.get("/stats", verifyTokenAndAdmin, getUserStatus);

module.exports = router;