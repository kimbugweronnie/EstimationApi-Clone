 const filteredProjects=require('../utils/filteredProjects');
 const userRepository = require('../../users_module/userRepository');

class UpdatingFilteredProjects{
  constructor(){}

  async ProjectManagerUpdated(req,res,next){
    const projectLists=await filteredProjects.ProjectManagerFilteredProjects(req,res,req.params.id);
    const projectManagerProjectList=await userRepository
    .UpdatingProjectManager(req.body.Id,projectLists);
    next();
  };
}

module.exports = new UpdatingFilteredProjects();
