const estimateRequest = require('./estimateRequest');
const  developerAdded=require('./developers');

class DevelopersPush {
  constructor(){}

  async developersPush(req,res){
    let estimate_requests=await estimateRequest.estimateRequest(req,res);
    estimate_requests['developers']
   .push(await developerAdded.developerPayload(req,res));
   return estimate_requests['developers'];

  };
}
module.exports = new DevelopersPush();
