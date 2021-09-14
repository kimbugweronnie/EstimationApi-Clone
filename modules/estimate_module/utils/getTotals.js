let developer_estimates=require('./developersEstimates');
class EstimateTotalPayload {
   constructor(){}
async estimatePayload(req,res){
const estimatesList=await developer_estimates.DeveloperEstimates(req,res);
let count;
// let count;
let researchTotal =0;
let planningTotal =0;
let developmentTotal =0;
let totalSum=0;
let adjustedSum =0;
let testingTotal =0;
let stabilizationTotal =0;
let certaintyAverage =0;

 for (count = 0; count < estimatesList.length; count++) {
  researchTotal = researchTotal + estimatesList[count].research;
  planningTotal = planningTotal + estimatesList[count].planning;
  developmentTotal = developmentTotal + estimatesList[count].development;
  totalSum = totalSum + estimatesList[count].sum;
  adjustedSum = adjustedSum + estimatesList[count].adjustedSum;
  testingTotal = testingTotal + estimatesList[count].testingTime;
  stabilizationTotal = stabilizationTotal + estimatesList[count].stabilization;
  certaintyAverage = (certaintyAverage + estimatesList[count].certainty)/estimatesList.length;
 };
 const estimateUpdatePayload={
   ResearchTotal: researchTotal,
   PlanningTotal: planningTotal,
   DevelopmentTotal: developmentTotal,
   testingTotal: testingTotal,
   stabilizationTotal: stabilizationTotal,
   certaintyAverage: certaintyAverage,
   SumTotal:totalSum,
   AdjustedTotal:adjustedSum
 };

 return estimateUpdatePayload;

 };
 }
module.exports = new EstimateTotalPayload();
