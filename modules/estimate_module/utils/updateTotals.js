const estimateTotals = require('./getTotals');
let estimateRequestRepository=require('../../estimate_request_module/estimate_request_repository');
class UpdateTotals {
   constructor(){}
async updateTotals(req,res){
  let update=await estimateTotals.estimatePayload(req,res);
  let updatedEstimateRequest=await estimateRequestRepository
  .updateEstimateRequestDetails(req.params.estimateRequestId,update);
  return updatedEstimateRequest;

};
}

module.exports = new UpdateTotals();
