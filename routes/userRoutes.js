const { Router } = require("express");
const {
  getUsersAll,
  getUserById,
  addUser,
} = require("../controller/userController");

const router = Router();

router.get("/users", getUsersAll);

router.get("/user/:id", getUserById);

router.post("/user", addUser);

module.exports = router;
