let estimatesRequestPayload= require('./EstimateRequestEstimatesPayload');
let estimateRequestRepository= require('../../estimate_request_module/estimate_request_repository');

class EstimateRequestEstimatesUpdate {
   constructor(){}
async EstimatesRequestUpdate(req,res){
  let estimateRequestUpdate=await estimateRequestRepository
  .UpdatingEstimateRequestEstimates(req.params.estimateRequestId,
    await estimatesRequestPayload.EstimatesRequestPayload(req,res));
  return estimateRequestUpdate;
};
 }
 module.exports = new EstimateRequestEstimatesUpdate();
