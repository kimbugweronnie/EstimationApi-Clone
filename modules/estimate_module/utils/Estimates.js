let userRepository=require('../../users_module/userRepository');
class Estimates {
   constructor(){}
async DeveloperEstimates(req,res){
let developer= await userRepository.gettingDeveloper(req.body.Id);
 return developer['estimates'];

};
}

module.exports = new Estimates();
