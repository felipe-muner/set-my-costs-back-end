require("dotenv").config();
const axios = require("axios");
const mysql = require("mysql");

axios
  .get(
    "http://data.fixer.io/api/latest?access_key=429c70d71154b60b256fc532533f1caa&symbols=USD,VND,BRL&format=1"
  )
  .then(response => {
    //convert to dolar, change to get straight Dolar in the future. no privilleges API
    // console.log(response.data.rates);

    let ratesInUSD = Object.keys(response.data.rates).map(key => [
      key,
      response.data.rates[key]
    ]);

    ratesInUSD.push(["EUR", 1 / response.data.rates.USD]);

    ratesInUSD.map(el => el.unshift(response.data.date));

    ratesInUSD[0][2] = 1;

    const conn = mysql.createConnection({
      host: "localhost",
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DTBS
    });

    conn.connect();

    let sql =
      "INSERT INTO ExchangeRate (RegisterDate, CurrencyName, Rate) VALUES ?";

    conn.query(sql, [ratesInUSD], function(err) {
      if (err) throw err;
      console.log("---------------------------------------");
      console.log("Exchange rate added successfully !!!");
      console.log("---------------------------------------");
      console.log(ratesInUSD);
      conn.end();
    });
    // conn.end();
  })
  .catch(error => {
    console.log(error);
  });
