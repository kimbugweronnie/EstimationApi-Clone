const EstimateRequestDeveloper = require('../estimate_request_developer_model');
const getPayload=require('./estimateDeveloperPayload')
class CreateEstimateRequestDeveloper {
  constructor(){}
  async createEstimateRequestDeveloper(req,res){
    const payload = await getPayload.EstimateDeveloperPayload(req,res);
    const newEstimateRequestDeveloper=new EstimateRequestDeveloper(payload);
    const developersEstimateRequestsIdAdded = await newEstimateRequestDeveloper.save();
    return developersEstimateRequestsIdAdded;


  };
}

module.exports = new CreateEstimateRequestDeveloper();
