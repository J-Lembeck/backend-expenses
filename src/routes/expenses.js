var express = require('express')
var router = express.Router()

const expensesService = require("../service/expenses")

router.get('/find-all', expensesService.findAll)

module.exports = router;