const developersEstimates = require('./Estimates');
let savedEstimates = require('./developersEstimates');

let userRepository=require('../../users_module/userRepository');
class EstimatesPayload {
   constructor(){}
async DeveloperEstimatesPayload(req,res){
let estimates=await developersEstimates.DeveloperEstimates(req,res);
estimates.push(await savedEstimates.DeveloperEstimates(req,res));
res.send(estimates);

//return res.send(await developersEstimates.DeveloperEstimates(req,res));
// .push(await savedEstimates.DeveloperEstimates(req,res)));
// //};
//return res.send(await savedEstimates.DeveloperEstimates(req,res));
//return [];



//developers.pull(await developer.developerPayload(req,res));
//return developers;
};
}
module.exports = new EstimatesPayload();
