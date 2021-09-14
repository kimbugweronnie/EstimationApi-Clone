
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

const UsersSchema = new Schema({
  name: {
      type: String,
      required: true,
      unique : true
  },
  email: {
      type: String,
      required: true
  },
  password: {
      type: String,
      required: true
  },

    role: {
        type: String,
        Developer: {type: Schema.ObjectId, ref: 'Developer'},
        ProjectManager: {type: Schema.ObjectId, ref: 'Project Manager'}
    }
},
{
    timestamps: true
});
//developers schema specific for developer role

const developerSchema = new Schema({
  name: {
      type: String,
      required: true,
      unique : true
  },
  email: {
      type: String,
      required: true
  },
  password: {
      type: String,
      required: true
  },

    role: {
        type: String
    },
    estimate_requests:[{
      type:Schema.Types.ObjectId,
      ref:"EstimateRequest"
    }],
    estimates:[{
      type:Schema.Types.ObjectId,
      ref:"Estimate"
    }]

});
//projectManagersSchema specific for projectManager role
const projectManagerSchema = new Schema({
  name: {
      type: String,
      required: true,
      unique : true
  },
  email: {
      type: String,
      required: true
  },
    role: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    projects:[{
      type:Schema.Types.ObjectId,
      ref:"Project",
      // required:true
    }],
    estimate_requests:[{
      type:Schema.Types.ObjectId,
      ref:"EstimateRequest"
    }]

});

const User = mongoose.model('User', UsersSchema, 'user');
User.ProjectManager = mongoose.model('Project Manager', projectManagerSchema, 'user');
User.Developer = mongoose.model('Developer', developerSchema, 'user');

module.exports = User;
