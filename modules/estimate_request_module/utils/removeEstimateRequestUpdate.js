let removeEstimateRequest=require('./removeEstimateRequest');
let user=require('../../users_module/userRepository');

class RemoveEstimateRequestUpdate {
async removeEstimateRequestUpdate(req,res){
  let developerUpdate=await user
  .UpdatingDeveloperRequest(req.params.developerId,
  await removeEstimateRequest.removeEstimateRequest(req,res));
  return  developerUpdate;

};
}
module.exports = new RemoveEstimateRequestUpdate();
