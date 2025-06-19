const express = require("express");
const userModel = require("../models/userModel");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email } = req.body;
  // console.log(req.body);
  try {
    const user = await userModel.findOne({ email: email });
    // console.log(user);

    if (user) {
      res.send({ message: "Email id is already register", alert: false });
    } else {
      const data = await userModel(req.body);
      const save = data.save();
      res.send({ message: "Successfully sign up", alert: true });
    }
  } catch (error) {
    console.log(error);
    res.send({ message: error });
  }
});

//api login
router.post("/login", async (req, res) => {
  // console.log(req.body);
  const { email } = req.body;
  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      const dataSend = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        image: user.image,
      };
      // console.log(dataSend);
      res.send({
        message: "Login is successfully",
        alert: true,
        data: dataSend,
      });
    } else {
      res.send({
        message: "Email is not available, please sign up",
        alert: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.send({ message: error });
  }
});

module.exports = router;
