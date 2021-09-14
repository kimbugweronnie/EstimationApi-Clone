 //requiring dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
//project schema and model
const ProjectSchema = new Schema({
    name: String,
    projectManager:{
      type:Schema.Types.ObjectId,
      ref:"User"
    },
    estimate_requests:[{
      type:Schema.Types.ObjectId,
      ref:"EstimateRequest"
    }]
});

const Project = mongoose.model('Project', ProjectSchema, 'project');
module.exports = Project;
