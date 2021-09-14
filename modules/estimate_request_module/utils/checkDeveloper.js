const estimate_requests=require('../estimate_request_repository');
const getUser = require('../../users_module/userRepository');
class CheckDeveloper {
  constructor(){}

  async CheckDeveloper(req,res){
    const checkDeveloper = await estimate_requests
    .estimateRequestDeveloper(req.params.developerId,req.params.estimateRequestId);
    return checkDeveloper;
  };

async DeveloperExists(req,res){
  const getDeveloperName=await getUser.gettingDeveloper(req.params.developerId);
  let  message={alert:`${getDeveloperName['name']} has already been added`};
  return message;
};
async DeveloperNotExists(req,res){
  const getDeveloperName=await getUser.gettingDeveloper(req.params.developerId);
  let  message={alert:`${getDeveloperName['name']} not yet added`};
  return message;
};
}

module.exports = new CheckDeveloper();
