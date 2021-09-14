const checkPasswordTester = require('../utils/comparePassword');
const bcrypt = require("bcryptjs");
const User = require("../user_model");
class PasswordValidate{
  constructor(){}
 async passwordValidate(req,res,next) {
   const userpayload= await User.findOne({ email: req.body.email});
       const passwordmessage=checkPasswordTester.checkPasswordMessage(req.body.email);
      if(userpayload){
        if (! await bcrypt.compare(req.body.password, userpayload.password)) {
          return res.status(401).send(passwordmessage);

        }
      }
next();
  }
}

module.exports = new PasswordValidate();
