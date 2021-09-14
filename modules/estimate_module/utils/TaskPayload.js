let  Estimate_Request= require("../../estimate_request_module/estimate_request_repository");
let sumPayload=require('./sum');
class TaskPayload {
  constructor(){}
//
async getTaskPayload(req,res){
  const estimaterequest = await Estimate_Request.gettingEstimateRequest(req.params.estimateRequestId);

  const payload=Object.assign(req.body, {
    EstimateRequest: estimaterequest._id,
    developer:req.body.Id,
    sum:await sumPayload.getSum(req,res),
    adjustedSum:await sumPayload.getAdjustedSum(req,res)
  });
return payload;

 };
 }
module.exports = new TaskPayload();
