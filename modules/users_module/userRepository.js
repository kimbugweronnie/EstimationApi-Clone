const User = require('./user_model');

const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
class GettingUser{
 constructor(){}

async gettingUserByEmail(value){
 const user_email= await User.find({ email: value});
return user_email[0];
}

async gettingUserByName(value){
 const  user_name= await User.find({ name: value});
return user_name[0];
}
async gettingDevelopers(value){
 const  developers= await User.Developer.find({role:value});
return developers;
}

async gettingProjectManagers(value){
 const  projectManagers= await User.ProjectManager.find({role:value});
return projectManagers;
}

async gettingUser(value){
 const  user= await User.Developer.findById({ _id: value});
return user;
}

async gettingDeveloper(value){
 const  developer= await User.Developer.findById({ _id: value});
return developer;
}
async gettingProjects(value){
  const projectManager_projects=await User.ProjectManager.findById({_id:value});
  return projectManager_projects;
}

async UpdatingProjectManager(value,value1){
  const updatedProjectManager= await User.ProjectManager
  .findOneAndUpdate({ _id:value},{$set:{projects:value1}},{new:true});
return updatedProjectManager;
};

async UpdatingProjectManagerRequest(value,value1){
  let updatedProjectManager= await User.ProjectManager
  .findOneAndUpdate({ _id:value},{$set:{estimate_requests:value1}},{new:true});
return updatedProjectManager;
};

async UpdatingDeveloperRequest(value,value1){
  let updatedDeveloper= await User.Developer
  .findOneAndUpdate({ _id:value},{$set:{estimate_requests:value1}},{new:true});
return updatedDeveloper;
};

async UpdatingDeveloperEstimates(value,value1){
  let updatedDeveloper= await User.Developer
  .findOneAndUpdate({ _id:value},{$set:{estimates:value1}},{new:true});
return updatedDeveloper;
};

async UpdatingUser(value){
  const update = await User.findByIdAndUpdate({ _id:value.Id},value).exec();
return update;
};


async DeletingUser(value){
const deletedUser = await User.findByIdAndDelete(value);
return deletedUser;
};

}
module.exports = new GettingUser();
