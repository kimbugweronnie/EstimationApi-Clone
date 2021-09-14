const estimate_requests=require("../estimate_request_repository");

class EstimateRequestDevelopers {
  constructor(){}
  async estimateRequest(req,res){
    const estimateRequest =await estimate_requests.gettingEstimateRequest(req.params.estimateRequestId);
    return estimateRequest['developers'];
    //next();
  };
}
module.exports = new EstimateRequestDevelopers();
