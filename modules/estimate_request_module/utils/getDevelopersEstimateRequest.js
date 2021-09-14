const userRepository=require('../../users_module/userRepository');
class DevelopersEstimateRequest {
  constructor(){}
  async developerRequest(req,res){
    const developerRequest = await userRepository.gettingDeveloper(req.params.developerId);
    return developerRequest['estimate_requests'];

  };
}

module.exports = new DevelopersEstimateRequest();
