const user = require('../../users_module/userRepository');

class Projects{
  constructor(){}

  async ProjectManagerProjects(req,res){
    const projectmanager=await user.gettingProjects(req.body.Id);
  
     return projectmanager['projects'];

  };

}

module.exports = new Projects();
