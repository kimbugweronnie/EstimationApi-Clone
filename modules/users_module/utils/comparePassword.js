const User = require("../user_model");
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const user_getter = require('../userRepository');
const bcrypt = require("bcryptjs");

class ComparePassword{
 constructor(){}
checkPasswordMessage(value){
  const passwordMessage={ alert:"The Password is invalid!! :("};
  return passwordMessage;
};
}
module.exports = new ComparePassword();
