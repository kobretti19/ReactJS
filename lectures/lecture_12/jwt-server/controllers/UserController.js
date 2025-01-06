const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

  const user = new User({
    name: req.body.name,
    email: req.bod.email,
    password: hashedPassword,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User with this email is not found" });
    }
    const isMatch = bcrypt.compare(req.body.password, user.password);
    if (!isMatch)
      return res
        .status(404)
        .json({ message: "username or password is not correct" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
