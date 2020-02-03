const conn = require(process.env.PWD + '/utils/conn')

module.exports = {
  getAll: function(req, res, next) {
    let sql =
      "SELECT CurrencyName, Rate FROM ExchangeRate";
    conn.query(sql, '', function (error, results, fields) {
      if (error) throw error;
      req.exchangeRate = results
      next()
      conn.end();
    });
  }
}
