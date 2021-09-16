let developersEstimates = require('./developersEstimates');
let userRepository=require('../../users_module/userRepository');
// let estimateRequestRepository=require('../../estimate_request_module/estimate_request_repository');

class DeveloperEstimatesPayload {
   constructor(){}
async DeveloperEstimatesPayload(req,res){
let developer=await userRepository.gettingUser(req.body.Id);
let estimates= await developersEstimates.DeveloperEstimates(req,res);
estimates.forEach(estimate => {
    developer['estimates'].push(estimate);
});
return  developer['estimates'];
};
}
module.exports = new DeveloperEstimatesPayload();
