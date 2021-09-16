let estimatesRequestPayload= require('./EstimateRequestEstimatesPayload');
let userRepository= require('../../users_module/userRepository');

class DeveloperEstimatesUpdate {
   constructor(){}
async DeveloperUpdate(req,res){
  let developerUpdate=await userRepository
  .UpdatingDeveloperEstimates(req.body.Id,
    await estimatesRequestPayload.EstimatesRequestPayload(req,res));
    return res.send({alert:'Estimate Created'});
};
 }
 module.exports = new DeveloperEstimatesUpdate();
