
class CalcuateSum {
  constructor(){}
//
 async getSum(req,res){

   let research= parseInt(req.body.research);
   let planning= parseInt(req.body.planning);
   let development= parseInt(req.body.development);
    let stabilization= parseInt(req.body.stabilization);
    let testingTime= parseInt(req.body.testingTime);
    let certainty=parseInt(req.body.certainty)/100;
const sumEstimates=research+development+planning+stabilization+testingTime;
return sumEstimates;
 };

 async getAdjustedSum(req,res){
   let research= parseInt(req.body.research);
   let planning= parseInt(req.body.planning);
   let development= parseInt(req.body.development);
    let stabilization= parseInt(req.body.stabilization);
    let testingTime= parseInt(req.body.testingTime);
    let certainty=parseInt(req.body.certainty)/100;
const adjustedSum=(research+development+planning+stabilization+testingTime)*certainty;
return adjustedSum;
 };
 
 }
module.exports = new CalcuateSum();
