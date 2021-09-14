//const userRepository=require('../../users_module/utils/userRepository');
let developer=require('./developers');
let estimateRequestDevelopers=require('./getEstimateRequesrDeveloper');
class RemoveDeveloper {
  constructor(){}
  async removeDeveloper(req,res){
    let developers=await estimateRequestDevelopers.estimateRequest(req,res);
    developers.pull(await developer.developerPayload(req,res));
    return developers;
  };
}

module.exports = new RemoveDeveloper();
