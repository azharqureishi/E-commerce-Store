const router = require('express').Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middleware/requireAuth');

  const {
        createCart,
        getCart,
        getAllCart,
        updateCart,
        deleteCart
        } = require('../controller/cartController');


router.get('/',verifyTokenAndAdmin, getAllCart )
router.get('/:id',verifyTokenAndAuthorization, getCart )
router.post('/',verifyToken, createCart )
router.put('/:id',verifyTokenAndAuthorization, updateCart )
router.delete('/:id',verifyTokenAndAuthorization, deleteCart )


module.exports = router;