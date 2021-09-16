const EstimateRequest = require("./estimateRequest_model");
const EstimateRequestDeveloper=require('./estimate_request_developer_model');

const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
class GettingEstimateRequest{
 constructor(){}

async gettingByProjectId(value){
 const estimateRequests= await EstimateRequest.find({ project: value});
return estimateRequests;
};
async gettingByProjectManagerId(value){
 const estimate_Requests= await EstimateRequest.find({ projectManager: value});
return estimate_Requests;
};

async gettingEstimateRequest(value){
 const  estimateRequest= await EstimateRequest.findOne({ _id: value});
return estimateRequest;
};


async estimateRequestDeveloper(value,value1){
const   checkDeveloper=await EstimateRequestDeveloper
  .find({developer:value,estimateRequest:value1});
return checkDeveloper;
};

async UpdatingEstimateRequestDevelopers(projectId,update){
  let updatedEstimateRequest= await EstimateRequest
  .findOneAndUpdate({ _id:projectId},{$set:{developers:update}},{new:true});
  return updatedEstimateRequest;
};

async updateEstimateRequestDetails(value,value1){
    const estimateRequestsSaved = await EstimateRequest
    .findOneAndUpdate({ _id:value},{$set:value1},{new:true});
    return estimateRequestsSaved;
  };

  async UpdatingEstimateRequestEstimates(estimateRequestId,update){
    let updated_estimateRequest= await EstimateRequest
    .findOneAndUpdate({ _id:estimateRequestId},{$set:{estimates:update}},{new:true});
    return updated_estimateRequest;
  };
// async UpdatingProjectManager(value,value1){
//   const updatedProjectManager= await User.ProjectManager
//   .findOneAndUpdate({ _id:value},{$set:{projects:value1}},{new:true});
// return updatedProjectManager;
// };

// async UpdatingProject(projectId,update){
//   const updatedproject= await Project
//   .findOneAndUpdate({ _id:projectId},{$set:{name:update}},{new:true});
//   return updatedproject;
//
// };

// async DeletingUser(value){
// const deletedProject = await Project.findOneAndRemove(value);
// return deletedProject;
// };

}
module.exports = new GettingEstimateRequest();
