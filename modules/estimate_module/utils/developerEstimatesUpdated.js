const updatePayload = require('./developerEstimatesPayload');
let userRepository=require('../../users_module/userRepository');

class UpdateDeveloper {
   constructor(){}
async updateDeveloper(req,res){
let developerUpdate=await  userRepository.UpdatingDeveloperEstimates(req.body.Id,
await updatePayload.DeveloperEstimatesPayload(req,res));
//console.log(developerUpdate);
return res.send(await updatePayload.DeveloperEstimatesPayload(req,res));

};
}
module.exports = new UpdateDeveloper();
