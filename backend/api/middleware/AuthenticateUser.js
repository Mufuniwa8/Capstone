require("dotenv").config();
const { sign } = require("jsonwebtoken");

function createToken(User) {
  return sign(
    {
      email: User.email,
      userPassword: User.userPassword,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "2h",
    }
  );
}

module.exports = {
  createToken
};
