const Router = require('express');
const router = new Router();
const BasketController = require('../controllers/basketController');

router.post('/', BasketController.create);
router.get('/', BasketController.get);
router.put('/', BasketController.update);
router.delete('/:id', BasketController.delete);

module.exports = router;