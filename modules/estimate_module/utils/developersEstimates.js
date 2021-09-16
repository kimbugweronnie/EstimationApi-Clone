let repo=require('../estimate_repository');
const taskpayload= require('./TaskPayload');

class Estimates {
   constructor(){
   }
async DeveloperEstimates(req,res){
const tasks=await taskpayload.getTaskPayload(req,res);
const estimates=await repo.gettingDevelopersTasks(tasks.developer,req.params.estimateRequestId);
 return estimates;
 };

 }
module.exports = new Estimates();
