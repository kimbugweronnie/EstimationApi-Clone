const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EstimateSchema = new Schema({
  developer:{
    type:Schema.Types.ObjectId,
    ref:"User",
  },
  EstimateRequest:{
    type:Schema.Types.ObjectId,
    ref:"EstimateRequest",
  },
  totalSum: { type: Number,default:0},
  adjustedSum: { type: Number,default:0},
  ResearchTotal: { type: Number,default:0},
  PlanningTotal: { type: Number,default:0},
  DevelopmentTotal: { type: Number,default:0},
  testingTotal: { type: Number,default:0},
  stabilizationTotal: { type: Number,default:0},
  certaintyAverage: { type: Number,default:0},
});

const TaskSchema = new Schema({
  developer:{
    type:Schema.Types.ObjectId,
    ref:"User",
  },
  EstimateRequest:{
    type:Schema.Types.ObjectId,
    ref:"EstimateRequest",
  },
  task: String,
  comments: String,
  research: { type: Number,default:0},
  planning: { type: Number,default:0},
  development: { type: Number,default:0},
  testingTime: { type: Number,default:0},
  stabilization: { type: Number,default:0},
  certainty: { type: Number,default:0},
  sum: { type: Number,default:0},
  dateCreated: { type: Date, default: Date.now},
  adjustedSum: { type: Number,default:0},
});

const Estimate = mongoose.model('Estimate', EstimateSchema,'Estimate');
Estimate.Task = mongoose.model('Task', TaskSchema,'Estimate');
module.exports = Estimate;
