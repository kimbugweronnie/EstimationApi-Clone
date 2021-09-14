const checkDeveloper=require('./checkDeveloper');
const getUser=require('../../users_module/userRepository');
class CheckingLength {
  constructor(){}
  async CheckingLength(req,res,next){
    const developerExists = await checkDeveloper.CheckDeveloper(req,res);
    const developerMessage=await checkDeveloper.DeveloperExists(req,res);
    if(developerExists.length){
      return res.send(developerMessage);
    }
next();
  };
}
module.exports = new CheckingLength();
