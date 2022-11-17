
const {Router} = require('express');
const {prodGet,
       prodPut,
       prodPost,
       prodDelete} = require('../controllers/products')
const router = Router();


router.get('/', prodGet);

router.put('/', prodPut);

router.post('/', prodPost);

router.delete('/',prodDelete);




module.exports = router;