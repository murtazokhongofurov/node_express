const { Router } = require("express");
const {
  getUsersAll,
  getUserById,
  addUser,
  updateUser,
  deleteUser
} = require("../controller/userController");

const router = Router();

router.get("/users", getUsersAll);

router.get("/user/:id", getUserById);

router.post("/user", addUser);

router.put("/user/:id", updateUser)

router.delete("/user/:id", deleteUser)

module.exports = router;
