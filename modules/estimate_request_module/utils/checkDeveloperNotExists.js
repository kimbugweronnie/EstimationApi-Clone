const checkDeveloper=require('./checkDeveloper');
const getUser=require('../../users_module/userRepository');
class CheckDeveloperNotExists {
  constructor(){}
  async CheckingLength(req,res,next){
    let developerExists = await checkDeveloper.CheckDeveloper(req,res);
    let developerMessage=await checkDeveloper.DeveloperNotExists(req,res);
    if(!developerExists.length){
      return res.send(developerMessage);
    }
next();
  };
}
module.exports = new CheckDeveloperNotExists();
