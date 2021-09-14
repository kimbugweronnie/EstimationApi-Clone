//let developer_Request=require('./developerRequest');
let estimate_Request=require('./estimateRequest');
const developersEstimateRequest=require('./getDevelopersEstimateRequest');
class RemoveEstimateRequest {
  constructor(){}
  async removeEstimateRequest(req,res){
let developerRequests=await developersEstimateRequest.developerRequest(req,res);
developerRequests.pull(await estimate_Request.estimateRequest(req,res));
return developerRequests;
  };
}
//estimateRequest
module.exports = new RemoveEstimateRequest();
