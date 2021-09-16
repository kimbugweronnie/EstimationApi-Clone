const estimateTotals = require('./getTotals');
let savedEstimates = require('./developersEstimates');
let estimateRequestRepository=require('../../estimate_request_module/estimate_request_repository');
//saving estimate request with totals
class UpdateEstimateRequestTotals{
   constructor(){}
async updateEstimateRequest(req,res){
  let update=await estimateTotals.estimateTotalsPayload(req,res);
  let updatedTotals=await estimateRequestRepository
  .updateEstimateRequestDetails(req.params.estimateRequestId,update);
  return updatedTotals;

};
}


module.exports = new UpdateEstimateRequestTotals();
