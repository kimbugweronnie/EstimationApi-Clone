let estimateRequestRepository=require('../../estimate_request_module/estimate_request_repository');
//let userRepository=require('../../users_module/utils/userRepository');
class EstimateRequestEstimates {
   constructor(){}
async updateDeveloperEstimates(req,res){
let estimates= await estimateRequestRepository.gettingEstimateRequest(req.params.estimateRequestId);
 return estimates['estimates'];

};
}

module.exports = new EstimateRequestEstimates();
