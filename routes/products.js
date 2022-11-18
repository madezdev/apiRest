
const {Router} = require('express');

const {prodGet,
       prodGetById,
       prodPut,
       prodPost,
       prodDelete} = require('../controllers/products')
       
const router = Router();
       

router.get('/', prodGet);

router.get('/:id', prodGetById);

router.put('/', prodPut);

router.post('/', prodPost);

router.delete('/:id',prodDelete);




module.exports = router;