const update_payload = require('./developerEstimateRequests');
let user=require('../../users_module/userRepository');


class DeveloperRequestUpdate {
  constructor(){}
  async developerRequestUpdate(req,res){
    const updatedDevelopers=await update_payload.developerRequestPush(req,res);

  const developerUpdate=await user
  .UpdatingDeveloperRequest(req.params.developerId,updatedDevelopers);
  return  developerUpdate;
  };
}

module.exports = new DeveloperRequestUpdate();
