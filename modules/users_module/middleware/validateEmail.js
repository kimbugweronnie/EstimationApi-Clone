const checkEmailTester = require('../utils/ValidEmail');
class ValidateEmail{
  constructor(){}
  EmailTester(req,res,next) {
    const  checkEmail=checkEmailTester.checkEmail(req.body.email);
    const emailmessage=checkEmailTester.EmailMessage(req.body.email);
    if(checkEmail===false){
    return res.status(400).send(emailmessage);
  }
next();
  }
}
module.exports = new ValidateEmail();
