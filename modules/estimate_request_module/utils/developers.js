let user=require('../../users_module/userRepository');

const Developer= require('./createEstimateRequestDeveloper');

class GetDevelopers{
  constructor(){}
  async developerPayload(req,res){
    let developer=await Developer.createEstimateRequestDeveloper(req,res);
    const developer_payload=await  user.gettingDeveloper(developer.developer);
    return developer_payload;

  };
}

module.exports = new GetDevelopers();
