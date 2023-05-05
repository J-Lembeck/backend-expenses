var express = require('express')
var router = express.Router()

const categoriesService = require("../service/categories")

router.get('/find-all', categoriesService.findAll)

module.exports = router;