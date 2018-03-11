var express = require('express');
var connect = require('../utils/sqlConnect'); //DB conection
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  connect.query('SELECT * FROM video', (err, result) => {
    if (err) {
      throw err; //console.log(err);
    } else {
      console.log(result);

      res.render('movie-1',
      {
      });
    }
  });
});

module.exports = router;
