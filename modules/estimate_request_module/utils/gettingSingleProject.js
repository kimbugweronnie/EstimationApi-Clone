const projects=require("../../project_module/projectRepository");
class GettingSingleProject {
  constructor(){}

  async gettingSingleProject(req,res){
    let project= await projects.gettingProject(req.params.id);
    return project;
  };
}
module.exports = new GettingSingleProject();
