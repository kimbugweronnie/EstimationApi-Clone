const Estimate_Request= require('./createEstimateRequestDeveloper');
const estimaterequest=require('../estimate_request_repository');

class GetEstimateRequest {
  constructor(){}

  async estimateRequests(req,res){
     let estimateRequest=await Estimate_Request.createEstimateRequestDeveloper(req,res);

     const estimateRequest_payload=await  estimaterequest
     .gettingEstimateRequest(estimateRequest.estimateRequest);
     return estimateRequest_payload;
  };
}
module.exports = new GetEstimateRequest();
