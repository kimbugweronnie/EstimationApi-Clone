const Estimate = require('./estimate_model');
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);


class GettingEstimates{
 constructor(){}

 async getSingleEstimate(value){
   let estimate=await Estimate.findOne({_id:value});
   return estimate;
 };
 async getSingleTask(value){
   let task=await Estimate.Task.findOne({_id:value});
   return task;
 };

async gettingDevelopersTasks(value1,value2){
 const  developerTasks= await Estimate.Task.find({developer:value1,EstimateRequest:value2});
return developerTasks;
};
async gettingAllDevelopersTasks(value1){
 let  developerTasks= await Estimate.Task.find({developer:value1});
return developerTasks;
};

async getSingleTask(value){
  const estimate=await Estimate.Task.findOne({_id:value});
  return estimate;
};

async Tasks(){
 let tasks= await Estimate.Task.find();
return tasks;
};

async UpdatingEstimate(estimateId,update){
  const updatingEstimate= await Estimate.Task
  .findOneAndUpdate({ _id:estimateId},{$set:{sum:update}},{new:true});
  return updatingEstimate;

};
async UpdatingTask(taskId,update){
  let updatingTask= await Estimate.Task.findOneAndUpdate({ _id:taskId},{$set:{sum:update}},{new:true});
  return updatingTask;

};
async updateTaskDetails(taskId,update){
    let taskUpdate = await Estimate.Task.findOneAndUpdate({ _id:taskId},{$set:update},{new:true});
    return taskUpdate;
  };
  async DeletingTask(value){
  const deletedTask = await Estimate.findOneAndRemove(value);
  return deletedTask;
  };
}
module.exports = new GettingEstimates();
