let  estimate_Requests=require('../estimate_request_repository');
let removeDeveloper=require('./removeDeveloper');

class RemoveDeveloperUpdate {
async removeDeveloperUpdate(req,res){
  let estimateRequestsUpdate=await estimate_Requests
  .UpdatingEstimateRequest(req.params.estimateRequestId,
    await removeDeveloper.removeDeveloper(req,res));
  return estimateRequestsUpdate;
};
}
module.exports = new RemoveDeveloperUpdate();
