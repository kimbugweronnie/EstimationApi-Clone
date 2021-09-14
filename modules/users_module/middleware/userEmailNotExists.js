const user_getter = require('../userRepository');
class CheckIfEmailNotExists{
 constructor(){}
async checkIfUserEmailNotExists(req,res,next){
 const  user_email= await user_getter.gettingUserByEmail(req.body.email);
 const emailMessage={ alert: `${req.body.email} doesnt exist`};
 if(!user_email){
    res.status(401).send(emailMessage);
 };
 next();
}
}
module.exports = new CheckIfEmailNotExists();
