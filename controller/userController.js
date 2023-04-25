const User = require("../models/user");

// Method:       GET
// Descrip:      Get All users
const getUsersAll = async (req, res) => {
  try {
    const users = await User.find();
      res.status(200).json({
        message: "success",
        users,
      });
  } catch (err) {
    res.send(err);
  }
};

// Method:       GET
// Descrip:      Get one user by id
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    return res.status(200).json({
      message: "success",
      user,
    });
  } catch (err) {
    res.send(err);
  }
};

// Method:       POST
// Descrip:      add new user info
const addUser = async (req, res) => {
  try {
    const { fullname, email, profile_photo } = req.body;
    const newUser = await User.create({
      fullname,
      email,
      profile_photo,
    });

    res.status(201).json({
      message: "Success",
      newUser,
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getUsersAll,
  getUserById,
  addUser,
};
