const user_getter = require('./userRepository');
const password = require('./utils/passwordHash');
const mongoose = require("mongoose");
class UserController {
  constructor(){}


async DevelopersList(req,res) {
 const developerlist=await user_getter.gettingDevelopers("Developer");
 if(developerlist.length){
   return res.status(200).send(developerlist);
 }else{
   return res.status(200).send({alert:'No developers registered yet'});
 };
};

async projectManagersList(req,res) {
 const projectManagersList=await  user_getter.gettingProjectManagers("Project Manager")
 if(projectManagersList.length){
   return res.status(200).send(projectManagersList);
 }else{
   return res.status(200).send({alert:'No Project Managers registered yet'});
 };
};

async User(req,res){
  //req.body.Id
  const singleUser = await user_getter.gettingUser(req.body.Id);
  return res.status(200).send(singleUser);
};

async updateUserDetails(req,res){
  if(req.body.password){
    req.body.password= await password.gethashUserPassword(req.body.password);
  }
  const userSaved = await user_getter.UpdatingUser(req.body);
  const uniqueUser = await user_getter.gettingUser(req.body.Id);
  const message = 'Update Successful';
  const responseObject={ message:message };
  return res.status(200).send(responseObject);

};

async deleteUser(req, res) {
  const uniqueUserDeleted= await user_getter.DeletingUser(req.body.Id);
  const deletedUser={message:`${uniqueUserDeleted['name']} has been deleted`};
  return res.status(200).send(deletedUser);
}

}
module.exports = new UserController();


// const User = require('./user_model')
// const mongoose = require("mongoose");
// mongoose.set("useFindAndModify", false);
// exports.developerlist = async function(req, res) {
//   try {
//     const developers = await User.find({
//       role: "developer"
//     })
//     return res.status(200).send(developers);
//   } catch (e) {
//     return e;
//   }
// };
// //login
//
// // exports.usersList = function(req, res, next){
// //
// //   User.find({})
// //   .exec(function (err, usersrequest){
// //       if(err){
// //           return next(err);
// //       }else{
// //           res.json(usersrequest);
// //       }
// //   })
// // }
// //
// // //get all projectManagers
// // exports.projectManagersList = function(req, res, next){
// //
// //   User.find({role: "Project Manager"})
// //   .exec(function (err, projectManagerRequest){
// //       if(err){
// //           return next(err);
// //       }else{
// //           res.json(projectManagerRequest);
// //       }
// //   })
// // }
// //
// // //get all developers
// // exports.developersList = function(req, res, next){
// //
// //   User.find({role: "Developer"})
// //   .exec(function (err, developerRequest){
// //       if(err){
// //           return next(err);
// //       }else{
// //           res.json(developerRequest);
// //       }
// //   })
// // }
// //
// // //get a single projectManager
// // exports.singleProjectManagerRequest = function(req, res, next){
// //
// //   User.findById({_id: req.params.requestId})
// //   .exec(function (err, singleProjectManagerRequest){
// //       if(err){
// //           return next(err);
// //       }else{
// //           res.json(singleProjectManagerRequest);
// //       }
// //   })
// // }
// //
// // //get a single developer
// // exports.singleDeveloperRequest = function(req, res, next){
// //
// //   User.findById({_id: req.params.requestId})
// //   .exec(function (err, singleDeveloperRequest){
// //       if(err){
// //           return next(err);
// //       }else{
// //           res.json(singleDeveloperRequest);
// //       }
// //   })
// // }
