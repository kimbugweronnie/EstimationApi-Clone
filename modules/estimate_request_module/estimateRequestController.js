const EstimateRequest = require('./estimateRequest_model');
// const EstimateRequestDeveloper=require("./estimate_request_developer_model");
const estimateRequest_repository = require('./estimate_request_repository');
const projectRepository= require('../project_module/projectRepository');
const userRepository = require('../users_module/userRepository');

const projectsController=require('../project_module/projectController');

const project_EstimateRequest=require('./utils/project_EstimateRequest');
const projectManager_EstimateRequests=require('./utils/projectManager_EstimateRequests');
const DeveloperRequest = require('./utils/developerRequest');
const Estimate_Request = require('./utils/estimateRequest');
const EstimateRequestDeveloperPayload = require('./utils/estimateDeveloperPayload');
 const CreateEstimateRequestDeveloper=require('./utils/createEstimateRequestDeveloper');
 const GetDevelopers = require('./utils/developers');
const AddDeveloper = require('./utils/estimatesRequestDevelopers');
const AddDeveloperUpdate = require('./utils/estimateRequestDevelopersUpdate');
const GetEstimateRequest = require('./utils/estimateRequests');
const AddEstimateRequests = require('./utils/developerEstimateRequests');
const AddEstimateRequestUpdate = require('./utils/developersEstimateRequestUpdate');
const EstimateRequestDevelopers = require('./utils/getEstimateRequesrDeveloper');
const DevelopersEstimateRequests = require('./utils/getDevelopersEstimateRequest');
const RemoveEstimateRequest = require('./utils/removeEstimateRequest');
const RemoveEstimateRequestUpdate = require('./utils/removeEstimateRequestUpdate');
const RemoveDeveloper = require('./utils/removeDeveloper');
const RemoveDeveloperUpdate = require('./utils/removeDeveloperUpdate');
class EstimateRequestController {
  constructor(){}

  async AddDeveloper(req, res) {
    DeveloperRequest.developerRequest(req,res);
    Estimate_Request.estimateRequest(req,res);
    EstimateRequestDeveloperPayload.EstimateDeveloperPayload(req,res);
    CreateEstimateRequestDeveloper.createEstimateRequestDeveloper(req,res);
    GetDevelopers.developerPayload(req,res);
     AddDeveloper.developersPush(req,res);
    AddDeveloperUpdate.estimateRequestUpdate(req,res);
     GetEstimateRequest.estimateRequests(req,res);
    AddEstimateRequests.developerRequestPush(req,res);
    AddEstimateRequestUpdate.developerRequestUpdate(req,res);

    let record =await DeveloperRequest.developerRequest(req,res);
  return res.status(200)
  .send({alert:`${record['name']} has been added`});

  };
  async RemoveDeveloper(req, res) {
EstimateRequestDevelopers.estimateRequest(req,res);
DevelopersEstimateRequests.developerRequest(req,res);
RemoveEstimateRequest.removeEstimateRequest(req,res);
RemoveEstimateRequestUpdate.removeEstimateRequestUpdate(req,res);
RemoveDeveloper.removeDeveloper(req,res);
RemoveDeveloperUpdate.removeDeveloperUpdate(req,res);

let message =await DeveloperRequest.developerRequest(req,res);
return res.status(200)
.send({alert:`${message['name']} has been removed`});
 };

  async CreateEstimateRequest(req,res,next) {
  let singleProject= await projectRepository.gettingProject(req.params.id);
  Object.assign(req.body, {
     projectManager:req.body.Id,
     project:singleProject._id,
   });
     const newEstimateRequest = new EstimateRequest(req.body);
     const createdEstimateRequest = await newEstimateRequest.save();
   next();
};

async estimateRequestProjectUpdate(req,res){
  let project_estimateRequest=await project_EstimateRequest.projectEstimateRequest(req,res);
  const updatedEstimateRequest=await projectRepository
  .UpdatingProjectEstimateRequest(req.params.id,project_estimateRequest);
  //return updatedEstimateRequest;
};

async projectManagerUpdate(req,res){
   let projectManager_estimateRequest=await projectManager_EstimateRequests
   .projectManagerEstimateRequest(req,res);
   let updatedProjectManager=await userRepository
  .UpdatingProjectManagerRequest(req.body.Id,projectManager_estimateRequest);

 return res.status(200).send({alert:'Estimate Request created',updatedProjectManager});
};

async getOneEstimateRequest(req, res) {
  const estimateRequest = await estimateRequest_repository
  .gettingEstimateRequest(req.params.id);
  return res.status(200).send(estimateRequest);
};

async getAllEstimateRequests(req, res) {
  const estimateRequests=await estimateRequest_repository
  .gettingByProjectManagerId(req.body.Id);
  if(estimateRequests.length){
      return res.status(200).send(estimateRequests);
    }else{
      return res.status(200).send({alert:'No estimate requests added'});
  }
 };

 async updateEstimateRequestDetails(req,res){
     const estimateRequestsSaved = await estimateRequest_repository
     .updateEstimateRequestDetails(req.params.id,req.body);
     return res.status(200).send(estimateRequestsSaved);
 };

 async getAllEstimateRequestsDeveloper(req, res) {
   const estimateRequestsDeveloper=await EstimateRequestDeveloper.find();
   return res.status(200).send(estimateRequestsDeveloper);
  };

 async deleteEstimateRequest(req, res) {
   const uniqueEstimateRequestDeleted= await EstimateRequest.findByIdAndDelete(req.params.id);
    const estimateRequestProject={message:`Estimate Request has been deleted`};
   return res.status(200).send(estimateRequestProject);
 };

}

module.exports = new EstimateRequestController();
