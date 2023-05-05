const express = require('express');

const usersController = require('../controllers/user.controller');

const {
  handleLoginErrors,
  handleFindByIdErrors,
} = require('../middlewares/user.middleware');

const {
  createUserValidation,
  loginUserValidation,
} = require('../middlewares/validations.middleware');

const router = express.Router();

router.post(
  '/signup',
  createUserValidation,
  usersController.signup
);
router.post(
  '/login',
  loginUserValidation,
  handleLoginErrors,
  usersController.login
);
router.get(
  '/:id/history',
  handleFindByIdErrors,
  usersController.findById
);


module.exports = router;
