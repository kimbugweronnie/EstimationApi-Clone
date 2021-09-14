
const user_getter = require('../userRepository');
class CheckIfNameExists{
 constructor(){}
async checkIfNameExists(req,res,next){
 const user_name= await user_getter.gettingUserByName(req.body.name);
 let nameExists={
   alert:`The user with  ${req.body.name} already exist!`,
 };
 if(user_name){
    return res.status(400).send(nameExists);
 }

 next();
}
}


module.exports = new CheckIfNameExists();
