const projectManagerProjects=require('./projectManagerProjects');
class FilteredProjects{
  constructor(){}

  async ProjectManagerFilteredProjects(req,res,project_id){
    const projectIds=await projectManagerProjects.ProjectManagerProjects(req,res);
    projectIds.pull(project_id);
    return projectIds;
  };
}

module.exports = new FilteredProjects();
