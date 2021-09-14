const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;
const EstimateRequestSchema = new Schema({
  project:{
    type:Schema.Types.ObjectId,
    ref:"Project"
  },
  developers:[{
    type:Schema.Types.ObjectId,
    ref:"Developer"
  }],
    title: { type: String },

  projectManager:{
    type:Schema.Types.ObjectId,
    ref:"Project Manager"
  },
  dueDate: { type: Date,default:Date.now},

  DateEstimated: { type: Date, default: Date.now },

  estimates:[{
    type:Schema.Types.ObjectId,
    ref:"Estimate"
  }],

  taskDescription: { type: String },

  ResearchTotal: { type: Number,default:0},
  PlanningTotal: { type: Number,default:0},
  DevelopmentTotal: { type: Number,default:0},
  testingTotal: { type: Number,default:0},
  stabilizationTotal: { type: Number,default:0},
  certaintyAverage: { type: Number,default:0},
  SumTotal: { type: Number,default:0},
  AdjustedTotal: { type: Number,default:0},

  status: {
    type: String,
    enum: ["Draft", "Submitted", "Estimated"],
    
  },

  dateCreated: { type: Date, default: Date.now }

});
const EstimateRequest = mongoose.model('EstimateRequest', EstimateRequestSchema, 'EstimateRequest');
module.exports = EstimateRequest;
