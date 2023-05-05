var express = require('express')
var router = express.Router()
const bodyParser = require('body-parser');

const categoriesService = require("../service/categories")

router.get('/find-all', categoriesService.findAll);
router.post('/', bodyParser.json(), categoriesService.save);
router.put('/', bodyParser.json(), categoriesService.update);
router.delete('/', bodyParser.json(), categoriesService.delete);

module.exports = router;