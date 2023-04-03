const userModel = require("../models/userModel");

const createUser = async (req, res) => {
  const email = req.body.email;
  let findUser;
  try {
    findUser = await userModel.findOne({ email });
  } catch (error) {
    res.json({ err: error.message });
  }
  if (findUser) {
    return res.json({ msg: "User Already Exits" });
  }

  let newUser = await userModel.create(req.body);
  return res.json(newUser);
};

module.exports = { createUser };
