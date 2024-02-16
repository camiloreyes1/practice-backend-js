var express = require('express');
var router = express.Router();

const User = require('../models/User');

router.get('/user-detail/:userId', (req,res,next => {

  const { userId } = req.params;

  User.findById(userId)
    .then((foundUser) => {
      res.json(foundUser)
    })
    .catch((err) => {
      console.log(err)
      next(err)
    })
}))


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
