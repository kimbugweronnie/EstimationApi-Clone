const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;
const EstimateRequestDeveloperSchema = new Schema({
  developer:{
    type:Schema.Types.ObjectId,
    ref:"Developer"
  },
  estimateRequest:{
    type:Schema.Types.ObjectId,
    ref:"EstimateRequest"
  },


});
const EstimateRequestDeveloper = mongoose.model('EstimateRequestDeveloper', EstimateRequestDeveloperSchema, 'estimateRequestDeveloper');
module.exports = EstimateRequestDeveloper;
