// //requiring dependecies
const express = require("express");
const router = express.Router();

 const registerController = require("./registerController");
 const loginController = require('./loginController');
 const userController = require('./userController');

const encryptPassword=require('./middleware/encryptPassword');
 const checkEmptyUserFields = require('./middleware/checkEmptyUserFields');
 const checkLengthUserFields = require('./middleware/checkLengthUserField');
 const validateEmail = require('./middleware/validateEmail');
 const validatePassword = require('./middleware/validatePassword');
 const savedPayload = require('./middleware/savedPayload');
 const checkUserExists = require('./middleware/checkUserExists');
 const checkIfEmailExists = require('./middleware/userEmailExists');
 const userEmailNotExists = require('./middleware/userEmailNotExists');
 const comparePassword = require('./middleware/comparePassword');

 const verifyAccount = require('./middleware/verifyAccount');

 router.post('/register',
checkEmptyUserFields.EmptyUserFields,
checkLengthUserFields.LengthUserFields,
 validateEmail.EmailTester,
 validatePassword.PasswordTester,
 checkUserExists.checkIfNameExists,
 checkIfEmailExists.checkIfUserEmailExists,
 savedPayload.registerPayload,
  (req, res) =>
  registerController.jwtPayloadSigning(req, res));



router.post('/login',
checkEmptyUserFields.EmptyUserFields,
checkLengthUserFields.LengthUserFields,
validateEmail.EmailTester,
validatePassword.PasswordTester,
 userEmailNotExists.checkIfUserEmailNotExists,
 comparePassword.passwordValidate,
(req, res) =>loginController.loginController(req, res));

router.get( "/developers" ,
verifyAccount.reqHeader,
verifyAccount.getPayload,
(req, res) =>userController.DevelopersList(req, res));

// router.get( "/developers" ,
// verifyAccount.reqHeader,
// verifyAccount.getPayload,
// (req, res) =>verifyAccount.getPayload(req, res));


router.get( "/projectManagers" ,
verifyAccount.reqHeader,
verifyAccount.getPayload,
(req, res) =>userController.projectManagersList(req, res));

router.get( "/user" ,
verifyAccount.reqHeader,
verifyAccount.getPayload,
(req, res) =>userController.User(req, res));

router.put( "/user/update" ,
checkEmptyUserFields.EmptyUserFields,
checkLengthUserFields.LengthUserFields,
validateEmail.EmailTester,
checkUserExists.checkIfNameExists,
checkIfEmailExists.checkIfUserEmailExists,
verifyAccount.reqHeader,
verifyAccount.getPayload,
(req, res) =>userController.updateUserDetails(req, res));


router.delete("/user/delete" ,
verifyAccount.reqHeader,
verifyAccount.getPayload,
(req, res) =>userController.deleteUser(req, res));

 module.exports = router;






 // router.get( "/name" ,loginController.myname);


// const userController = require("./userController");
//
// const loginController = require("../user_module/loginController");
// //All users routes
// router.post("/user/userlogin", loginController.loginUser);
//
// //get all users
// router.get("/users", userController.usersList);
//
// //get all projectManagers
// router.get(
//   "/users/project-managers",
//   loginController.CheckToken,
//   userController.projectManagersList
// );
//
// //get all developers
// router.get(
//   "/users/developers",
//   loginController.CheckToken,
//   userController.developersList
// );
//
// //get a single developer
// router.get(
//   "/users/developer/:requestId",
//   loginController.CheckToken,
//   userController.singleDeveloperRequest
// );
//
