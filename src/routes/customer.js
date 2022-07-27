const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

router.get('/',customerController.list);
router.post('/add',customerController.save);
router.post('/search',customerController.search);
router.post('/search2',customerController.search2);
router.post('/search3',customerController.search3);
router.get('/delete/:id',customerController.delete);
router.get('/update/:id',customerController.edit);
router.post('/update/:id',customerController.update);
module.exports = router;