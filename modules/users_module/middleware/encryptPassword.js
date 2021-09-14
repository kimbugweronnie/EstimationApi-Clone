const password = require('../utils/passwordHash');
class EncryptPassword{
 constructor(){}
 async encryptPassword(req,res,next){
     req.body.password= await password.gethashUserPassword(req.body.password);
     return req.body.password;
   next();
 }
}

module.exports = new EncryptPassword();
