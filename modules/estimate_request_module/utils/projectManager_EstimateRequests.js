const estimate_requests=require("../estimate_request_repository");

class ProjectManagerEstimateRequest {
  constructor(){}

  async projectManagerEstimateRequest(req,res) {
  let  projectManager_EstimateRequests=await estimate_requests.gettingByProjectManagerId(req.body.Id);
  //return projectManager_EstimateRequests;
  return projectManager_EstimateRequests;
};
}
module.exports = new ProjectManagerEstimateRequest();
