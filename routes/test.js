var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.send('我是接口返回值');
});

module.exports = router;
