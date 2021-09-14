const mongoose = require("mongoose");
const Project = require("./project_model");
const User = require('../users_module/user_model');
const projectRepository = require('./projectRepository');
let userRepository= require('../users_module/userRepository');
const filteredProjects=require('./utils/filteredProjects');

class ProjectController {
  constructor(){

  }

  async CreateProject(req,res,next) {
    Object.assign(req.body, { projectManager:req.body.Id});
    const newProject = new Project(req.body);
    const createdProject = await newProject.save();
    next();
};

async updateProjectManager(req,res){
  const projectManager_projects=  await projectRepository.gettingByProjectManagerId(req.body.Id);
  const projectmanager=await userRepository.UpdatingProjectManager(req.body.Id,projectManager_projects);
  return res.status(200).send(projectmanager);
};

async getOneProject(req, res) {
  const project = await projectRepository.gettingProject(req.params.id);
  return res.status(200).send(project);
};

async getAllProjects(req, res) {
  const projects=await projectRepository.gettingByProjectManagerId(req.body.Id);
  return res.status(200).send(projects);
 };

 async updateProjectDetails(req,res){
     const projectSaved = await projectRepository.UpdatingProject(req.params.id,req.body.name);
     return res.status(200).send(projectSaved);
 };

 async deleteProject(req, res) {

   const uniqueProjectDeleted= await projectRepository.DeletingUser(req.params.id);
    const deletedProject={message:`${uniqueProjectDeleted['name']} has been deleted`};
    return res.status(200).send(deletedProject);

 };
}
module.exports = new ProjectController();
