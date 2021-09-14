const estimate_requests=require("../estimate_request_repository");
const gettingSingleProject = require('./gettingSingleProject');
class ProjectEstimateRequest {
  constructor(){}

  async projectEstimateRequest(req,res) {
  let singleProject= await gettingSingleProject.gettingSingleProject(req,res);
  const project_EstimateRequests=await estimate_requests.gettingByProjectId(singleProject._id);
  return project_EstimateRequests;
};
}
module.exports = new ProjectEstimateRequest();
