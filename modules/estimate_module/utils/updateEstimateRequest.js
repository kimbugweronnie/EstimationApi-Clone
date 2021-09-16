const estimateTotals = require('./getTotals');

let estimateRequestRepository=require('../../estimate_request_module/estimate_request_repository');
//saving estimate request with totals
class UpdateEstimateRequest{
   constructor(){}
async updateEstimateRequest(req,res){
  
  // let update=await estimateTotals.estimateTotalsPayload(req,res);
  // let updatedTotals=await estimateRequestRepository
  // .UpdatingEstimateRequestEstimates(req.params.estimateRequestId,
  //   savedEstimates.DeveloperEstimates(req,res));
  // return res.send(updatedTotals);

};
}


module.exports = new UpdateEstimateRequest();
