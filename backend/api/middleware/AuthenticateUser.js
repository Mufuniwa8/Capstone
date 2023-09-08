require("dotenv").config();
const { sign } = require("jsonwebtoken");

module.exports = {
  createToken(user) {
    return sign(
      {
        email: user.email,
        userPassword: user.userPassword,
      },
      process.env.SECRET-KEY,
      {
        expiresIn: "2h",
      }
    );
  },
};
