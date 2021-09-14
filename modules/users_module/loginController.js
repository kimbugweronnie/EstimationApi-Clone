const user_getter = require('./userRepository');
const jwt = require("jsonwebtoken");
class LoginController{
 constructor(){}
async loginController(req,res){
 const userlogin= await user_getter.gettingUserByEmail(req.body.email);
 if(userlogin){
   const payload = {subject: userlogin._id,role: userlogin.role};
   const token = jwt.sign(payload, "secretKey");
       return res.status(200).send({
         token,
         name: userlogin.name,
         email: userlogin.email,
         role: userlogin.role,
         status: "successful login"
       });
 }


};
}

module.exports = new LoginController();




// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const User = require("./user_model");
// const bcrypt = require("bcryptjs");
//
//
// exports.login = async function(req, res) {
// try {
//      let newUser = req.body;
//
//      const user = await User.findOne({ email: newUser.email });
//   if (!user) {
//
//      res.status(401).send({ status: "Invalid Email or Password" });
//
//   }
//   else if (! await bcrypt.compare(newUser.password, user.password)) {
//      res.status(401).send({ status: "Invalid Password" });
//   }
//
//   else{
//     const payload = {subject: user.id,role: user.role};
//     // console.log(payload);
//
//     const token = jwt.sign(payload, "secretKey");
//     res.status(200).send({
//       token,
//       name: user.name,
//       email: user.email,
//       role: user.role,
//       status: "successful login"
//     });
//   }
//
// } catch (e) {
//     res.status(500).send({
//     status: "Connection problem"
//   });
// }
// }
//
// exports.verifyAccount = async function(req, res,next) {
//   if (!req.headers.authorization) {
//     return res.status(401).send({
//       status: "Unauthorized request"
//     });
//   }
//   const token = req.headers.authorization.split(" ")[1];
//   if (token == null) {
//     return res.status(401).send({
//       status: "Unauthorized request"
//     });
//   }
//   try {
//     const payload = jwt.verify(token, "secretKey");
//
//     // Add user Id as a property
//     req.body.userId = payload.subject;
//     req.body.userRole = payload.role;
//
//   } catch (error) {
//     return res.status(401).send({
//       status: "The provided token is incorrect"
//     });
//   }
//     next();
// }
// exports.myname = async function(req, res) {
//
//     return res.status(200).send({
//       status: "Switch"
//     });
//
// }
// // class loginController {
// //   constructor() {}
// //
// //   //function for login user
// //   async loginUser(req, res) {
// //     const userData = req.body;
// //     User.findOne(
// //       { email: userData.email, password: userData.password },
// //       async (error, user) => {
// //         // In case of error with Mongo
// //         if (error) {
// //           console.log(error);
// //           res.status(500).send({
// //             status: "Error retrieving details from the database"
// //           });
// //           // No errror occured
// //         } else {
// //           // No user found with that email
// //           if (!user) {
// //             res.status(401).send({ status: "Invalid Email or Password" });
// //
// //             // User found but the passwords do not match
// //           } else {
// //             // For successfull login
// //             const payload = {
// //               subject: user.id,
// //               role: user.role,
// //               name: user.email
// //             };
// //             const token = jwt.sign(payload, "secretKey");
// //             res.status(200).send({
// //               token,
// //               id: user._id,
// //               email: user.email,
// //               name: user.name,
// //               role: user.role,
// //               status: "successful login"
// //             });
// //           }
// //         }
// //       }
// //     );
// //   }
// //   //checking for the token match
// //   CheckToken(req, res, next) {
// //     if (!req.headers.authorization) {
// //       return res.status(401).send({
// //         status: "Unauthorized request"
// //       });
// //     }
// //     const token = req.headers.authorization.split(" ")[1];
// //     if (token == null) {
// //       return res.status(401).send({
// //         status: "Unauthorized request"
// //       });
// //     }
// //
// //     try {
// //       const payload = jwt.verify(token, "secretKey");
// //       // Add user Id as a property
// //       req.body.userId = payload.subject;
// //       req.body.userRole = payload.role;
// //     } catch (error) {
// //       return res.status(401).send({
// //         status: "The provided token is incorrect"
// //       });
// //     }
// //
// //     next();
// //   }
// // }
// //
// // module.exports = new loginController();
