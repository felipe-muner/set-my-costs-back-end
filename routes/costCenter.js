var express = require("express");
var router = express.Router();

const cc = require(process.env.PWD + '/models/CostCenter')

/* GET home page. */
router.get("/", cc.getAll, (req, res, next) => {
  console.log('to aq');
  res.json(req.costCenter)
}).post("/save", cc.save, cc.getAll, (req, res, next) => {
  res.json(req.costCenter)
})

module.exports = router;
