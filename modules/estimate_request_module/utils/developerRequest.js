const userRepository=require('../../users_module/userRepository');
class DeveloperRequest {
  constructor(){}
  async developerRequest(req,res){
    const developerRequest = await userRepository.gettingDeveloper(req.params.developerId);
    return developerRequest;
//next();
  };
}

module.exports = new DeveloperRequest();
