var express = require("express");
var router = express.Router();

const er = require(process.env.PWD + '/models/ExchangeRate')

/* GET home page. */
router.get("/", er.getAll, (req, res, next) => {
  res.json( req.exchangeRate );
});

module.exports = router;
