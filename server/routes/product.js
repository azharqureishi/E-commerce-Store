const router = require('express').Router();
const {verifyTokenAndAdmin} = require('../middleware/requireAuth')
  const {
        createProduct,
        getProduct,
        getAllProduct,
        updateProduct,
        deleteProduct
        } = require('../controller/productController')


router.get('/', getAllProduct )
router.get('/find/:id', getProduct )
router.post('/',verifyTokenAndAdmin, createProduct )
router.put('/:id',verifyTokenAndAdmin, updateProduct )
router.delete('/:id',verifyTokenAndAdmin, deleteProduct )


module.exports = router;