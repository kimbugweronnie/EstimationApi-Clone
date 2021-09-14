const developerRequest = require('./developerRequest');
const  developersEstimateRequest=require('./estimateRequests');

class DeveloperRequestPush {
  constructor(){}
  async developerRequestPush(req,res){
      let developer_payload=await developerRequest.developerRequest(req,res);

      developer_payload['estimate_requests']
      .push(await developersEstimateRequest.estimateRequests(req,res));
      return developer_payload['estimate_requests'];
};

}
module.exports = new DeveloperRequestPush();
