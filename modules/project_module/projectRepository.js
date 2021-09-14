const Project = require("./project_model");
// const User=require("../users_module/user_model");

const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
class GettingProject{
 constructor(){}

async gettingByProjectManagerId(value){
 const projects= await Project.find({ projectManager: value});
return projects;
}

async gettingProject(value){
 const  project= await Project.findOne({ _id: value});
return project;
}

async UpdatingProject(projectId,update){
  const updatedproject= await Project
  .findOneAndUpdate({ _id:projectId},{$set:{name:update}},{new:true});
  return updatedproject;

};
async UpdatingProjectEstimateRequest(projectId,update){
  const updatedProject= await Project
  .findOneAndUpdate({ _id:projectId},{$set:{estimate_requests:update}},{new:true});
  return updatedProject;
};

async DeletingUser(value){
const deletedProject = await Project.findOneAndRemove(value);
return deletedProject;
};

}
module.exports = new GettingProject();
