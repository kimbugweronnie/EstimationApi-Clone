//let User=require("../users_module/utils/userRepository");
let Estimate_repository=require('./estimate_repository');
//const CreateTask = require('./utils/CreateTask');
const TaskPayload = require('./utils/TaskPayload');
let DevelopersEstimates=require('./utils/developersEstimates');
let GetTotals=require('./utils/getTotals');
const Estimate = require('./estimate_model');
const taskpayload=require('./utils/TaskPayload');
const UpdateEstimateTotals = require('./utils/updateEstimateTotals');
const DeveloperEstimatesPayload = require('./utils/developerEstimatesPayload');
const EstimateRequestEstimatesPayload = require('./utils/EstimateRequestEstimatesPayload');
const EstimateRequestEstimatesUpdate = require('./utils/EstimateRequestEstimatesUpdate');
const DeveloperEstimatesUpdate = require('./utils/developerEstimatesUpdate');
//const UpdateEstimateRequest = require('./utils/updateEstimateRequest');
// const Estimates=require('./utils/Estimates');
// const EstimatesPayload = require('./utils/developerEstimatesPayload');
// const UpdateDeveloper = require('./utils/developerEstimatesUpdated');
//



class EstimateController {
  constructor(){}

  async CreateTask(req,res,next) {
     const task=await taskpayload.getTaskPayload(req,res);
     const newTask = new Estimate.Task(task);
     const createdTask = await newTask.save();
     next();
  };


  async CreateEstimateTask(req,res){
    DevelopersEstimates.DeveloperEstimates(req,res);
   GetTotals.estimateTotalsPayload(req,res);
   UpdateEstimateTotals.updateEstimateRequest(req,res);
  DeveloperEstimatesPayload.DeveloperEstimatesPayload(req,res);
  EstimateRequestEstimatesPayload.EstimatesRequestPayload(req,res);
  EstimateRequestEstimatesUpdate.EstimatesRequestUpdate(req,res);
  DeveloperEstimatesUpdate.DeveloperUpdate(req,res);
  };

async getOneTask(req,res){
let singleTask=await Estimate.getSingleTask(req.params.id);
return res.send(singleTask);
};


async getAllDeveloperTasks(req,res){
  let allestimates=await Estimate_repository.gettingAllDevelopersTasks(req.body.Id);
  return res.send(allestimates);
};


async gettingDevelopersTasks(req,res){
  let estimates=await Estimate_repository
  .gettingDevelopersTasks(req.body.Id,req.params.estimateRequestId);
  return res.send(estimates);
};

async getTasks(req,res){
  let tasks=await Estimate_repository.Tasks();
  return res.send(tasks);
};

async updateTask(req,res){
  let updateTask=await Estimate_repository.updateTaskDetails(req.params.id,req.body);
return res.send(updateTask);
};

async deleteTask(req,res){

  
  let deleteTask=await Estimate_repository.DeletingTask(req.params.id);
  res.send(deleteTask);
//return res.send({alert:`${deleteTask['task']} has been deleted`});
};

}
module.exports = new EstimateController();

// let  estimateRequest = await EstimateRequests.gettingEstimateRequest(req.params.estimateRequestId);
// //const developer=await User.gettingDeveloper(req.body.Id);
//     Object.assign(req.body, {
//       EstimateRequest: estimateRequest._id,
//       developer:req.body.Id
//     });
//      const newEstimate = new Estimate(req.body);
//      const createdEstimate = await newEstimate.save();
     // const estimateRequest_estimates =await Estimate.find({EstimateRequest:req.params.estimateRequestId});
     //
     // const estimaterequest=await EstimateRequest.findByIdAndUpdate({_id:req.params.estimateRequestId},
     //   {estimates:estimateRequest_estimates}).exec();
     //
     //   const developers_estimates=await User.Developer.findByIdAndUpdate({_id:req.params.id},
     //     {estimates:estimateRequest_estimates}).exec();
     //console.log(createdEstimate);
  //return res.status(200).send(createdEstimate);



// async getOneEstimate(req, res) {
//    const estimate = await Estimate.findById({ _id: req.params.id });
//   return res.status(200).send(estimate);
// };

// async getAllEstimates(req, res) {
//   const estimates=await Estimate.find({developer:req.body.Id});
//   return res.status(200).send(estimates);
//  };


 // async updateEstimateDetails(req,res){
 //     const estimateSaved = await Estimate.findByIdAndUpdate({ _id: req.params.id },req.body);
 //     const message = 'Update Successful';
 //      return res.status(200).send(message);
 // };

 // async updateDeveloperTotals(req,res){
 //   const developers_estimates = await Estimate.find({
 //     EstimateRequest: req.params.estimateRequestId,
 //     developer:req.params.id
 //   });
 //
 //   let PlanningTotal = 0;
 //   let DevelopmentTotal = 0;
 //   let testingTotal = 0;
 //   let stabilizationTotal = 0;
 //   let SumTotal = 0;
 //   let AdjustedTotal = 0;
 //   let certaintyAverage = 0;
 //   let ResearchTotal = 0;
 //
 //   for (count = 0; count < developers_estimates.length; count++) {
 //     ResearchTotal += ResearchTotal developers_estimates[count].research;
 //     PlanningTotal += developers_estimates[count].planning;
 //     DevelopmentTotal += developers_estimates[count].development;
 //     testingTotal += developers_estimates[count].testing;
 //     stabilizationTotal += developers_estimates[count].stabilization;
 //     SumTotal += developers_estimates[count].sum;
 //     AdjustedTotal += developers_estimates[count].adjustedSum;
 //     certaintyAverage = developers_estimates[count].certainty / developers_estimates.length;
 //   }
 //   const estimateSaved = await Estimate.findByIdAndUpdate({ _id: req.params.id },req.body);
 //
 // }

 // async deleteEstimate(req, res) {
 //   const uniqueEstimateDeleted= await Estimate.findByIdAndDelete(req.params.id);
 //   const deletedEstimate={message:`${uniqueEstimateDeleted['task']} has been deleted`};
 //   return res.status(200).send(deletedEstimate);
 // }
