let developer_Request=require('./developerRequest');
let estimate_Request=require('./estimateRequest');
class EstimateRequestDeveloperPayload {
  constructor(){}
  async EstimateDeveloperPayload(req,res,next){
    const developerRequest = await developer_Request.developerRequest(req,res);
    const estimateRequest=await estimate_Request.estimateRequest(req,res);
    const estimateDeveloperPayload={
      developer:developerRequest._id,
      estimateRequest:estimateRequest._id
    };
    return estimateDeveloperPayload;
    next();
  };
}

module.exports = new EstimateRequestDeveloperPayload();
