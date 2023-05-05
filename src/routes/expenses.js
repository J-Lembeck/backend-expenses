var express = require('express')
var router = express.Router()
const bodyParser = require('body-parser');

const expensesService = require("../service/expenses")

router.get('/find-all', expensesService.findAll);
router.post('/', bodyParser.json(), expensesService.save);
router.put('/', bodyParser.json(), expensesService.update);
router.delete('/', bodyParser.json(), expensesService.delete);

module.exports = router;