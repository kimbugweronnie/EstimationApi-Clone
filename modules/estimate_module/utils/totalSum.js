let CreateTask= require('./createTask');
let gettingEstimateByDeveloper=require('../estimate_repository');
class CalcuateTotalSum {
  constructor(){}

async totalSum(req,res){
  let developerEstimates=await gettingEstimateByDeveloper.gettingEstimateByDeveloper(req.body.Id);
  //return developerEstimates;
  return res.send(developerEstimates);
};

}
module.exports = new CalcuateTotalSum();
