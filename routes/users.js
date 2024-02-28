const express = require('express');
const router = express.Router();

const User = require('../models/User');
const Item = require('../models/Item'); // Add this line to require the Item model

const isAuthenticated = require("../middleware/isAuthenticated");
// const isProfileOwner = require("../middleware/isProfileOwner");

router.get('/user-detail/:userId', (req, res, next) => {
  const { userId } = req.params;

  User.findById(userId)
    .then((foundUser) => {
      res.json(foundUser);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

router.post('/user-update/:userId', isAuthenticated,  (req, res, next) => {
  const { userId } = req.params;
  const { fullName, email, password } = req.body;

  User.findByIdAndUpdate(userId, { fullName, email, password }, { new: true })
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

router.get('/delete/:userId', isAuthenticated, (req, res, next) => {
  const { userId } = req.params;

  User.findByIdAndDelete(userId)
    .then((deletedUser) => {
      Item.deleteMany({ owner: deletedUser._id })
        .then((deletedItems) => {
          console.log("Deleted Items", deletedItems);
          res.json(deletedUser);
        })
        .catch((err) => {
          console.log(err);
          next(err);
        });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
