const estimate_requests=require("../estimate_request_repository");

class EstimateRequest {
  constructor(){}
  async estimateRequest(req,res){
    const estimateRequest =await estimate_requests
    .gettingEstimateRequest(req.params.estimateRequestId);
    return estimateRequest;
    //next();
  };
}
module.exports = new EstimateRequest();
