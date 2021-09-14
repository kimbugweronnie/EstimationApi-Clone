const checkPasswordTester = require('../utils/ValidPassword');
class ValidatePassword{
  constructor(){}
  PasswordTester(req,res,next) {
    const  checkPassword=checkPasswordTester.checkPassword(req.body.password);
    const passwordmessage=checkPasswordTester.PasswordMessage(req.body.password);
    if(checkPassword===false){
    return res.status(400).send(passwordmessage);
  }
next();
  }
}
module.exports = new ValidatePassword();
