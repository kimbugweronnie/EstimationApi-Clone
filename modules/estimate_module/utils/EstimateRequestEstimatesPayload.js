let developersEstimates = require('./developersEstimates');
//let userRepository=require('../../users_module/userRepository');
let estimateRequestRepository=require('../../estimate_request_module/estimate_request_repository');

class EstimateRequestEstimatesPayload {
   constructor(){}
async EstimatesRequestPayload(req,res){
let estimateRequest=await estimateRequestRepository.gettingEstimateRequest(req.params.estimateRequestId);
let estimates= await developersEstimates.DeveloperEstimates(req,res);
estimates.forEach(estimate => {
    estimateRequest['estimates'].push(estimate);
});
return estimateRequest['estimates'];
};
}
module.exports = new EstimateRequestEstimatesPayload();
