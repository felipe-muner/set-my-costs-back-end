const conn = require('../utils/conn')

module.exports = {
  getAll: function(req, res, next) {
    let sql =
      "SELECT CostCenterID, Name, Active FROM CentralExpense.CostCenter";
    conn.query(sql, '', function (error, results, fields) {
      if (error) throw error;
      req.costCenter = results
      next()
    });
  },
  save: function(req, res, next) {
    let cc  = {Name: req.body.Name};
    let query = conn.query('INSERT INTO CostCenter SET ?', cc, function(error, results, fields) {
      if (error) throw error;
      req.costCenter = results
      next()
    })
  }
}
