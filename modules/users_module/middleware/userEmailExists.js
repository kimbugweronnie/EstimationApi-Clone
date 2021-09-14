const user_getter = require('../userRepository');
class CheckIfUserExists{
  constructor(){}
async checkIfUserEmailExists(req,res,next){
  let user_email=  await user_getter.gettingUserByEmail(req.body.email);
  let emailExists={
    alert:`The user with email address ${req.body.email} already exist!`,
  };
  if(user_email){
     return res.status(400).send(emailExists);
  }
  next();
}
}
module.exports = new CheckIfUserExists();
