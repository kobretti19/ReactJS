const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const signToken = (id) => {
  return jwt.sign({ id }, `${process.env.JWT_SECRET}`, {
    expiresIn: '90d',
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
  };

  // user.password = undefined;
  // user.passwordConfirm = undefined;

  res.cookie('jwt', token, cookieOptions);

  console.log(user);
  res.status(statusCode).json({
    message: 'success',
    token,
    user,
  });
};

exports.signup = async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });
  try {
    createSendToken(user, 201, res);

    console.log(user);
    res.status;
  } catch (e) {
    res.status(400).json({ status: 'fail', message: e.message });
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next('Please provide email and password', 400);
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next('Incorect email or password', 401);
  }

  createSendToken(user, 200, res);
};
