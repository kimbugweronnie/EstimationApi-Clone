const developersUpdate = require('./estimatesRequestDevelopers');
let  estimate_Requests=require('../estimate_request_repository');

class EstimateRequestDeveloperUpdate {

  async estimateRequestUpdate(req,res){

    const updatedEstimateRequests=await developersUpdate.developersPush(req,res);

    const estimateRequestUpdate=await estimate_Requests
    .UpdatingEstimateRequest(req.params.estimateRequestId,updatedEstimateRequests);
    return estimateRequestUpdate;
  };

}

module.exports = new EstimateRequestDeveloperUpdate();
