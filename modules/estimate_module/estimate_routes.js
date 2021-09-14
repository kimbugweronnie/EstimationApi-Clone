const express = require("express");
const router = express.Router();

 const estimateController = require("./estimateController");
 //const createdTask= require('./utils/createTask');

 // const checkEmptyUserFields = require('../users_module/middleware/checkEmptyUserFields');
 // const checkLengthUserFields = require('../users_module/middleware/checkLengthUserField');
  const verifyAccount = require('../users_module/middleware/verifyAccount');
// const CreateEstimate = require('./utils/createEstimate');
// const CalcuateSum = require('./utils/sum');

router.post('/createTask/:estimateRequestId',
verifyAccount.reqHeader,
verifyAccount.getPayload,
estimateController.CreateTask,
(req, res) =>
estimateController.CreateEstimateTask(req, res));

router.get('/task/:id',
verifyAccount.reqHeader,
verifyAccount.getPayload,
 (req, res) =>
 estimateController.getOneTask(req, res));

 router.get('/developer/tasks',
 verifyAccount.reqHeader,
 verifyAccount.getPayload,
  (req, res) =>
  estimateController.getDeveloperTasks(req, res));


  // router.get('/tasks/:id',
  // verifyAccount.reqHeader,
  // verifyAccount.getPayload,
  //  (req, res) =>
  //  estimateController.getDeveloperTasks(req, res));

  router.get('/tasks',
  verifyAccount.reqHeader,
  verifyAccount.getPayload,
   (req, res) =>
   estimateController.getTasks(req, res));

   router.put('/update/task/:id',
   verifyAccount.reqHeader,
   verifyAccount.getPayload,
    (req, res) =>
    estimateController.updateTask(req, res));

    router.delete('/delete/task/:id',
    verifyAccount.reqHeader,
    verifyAccount.getPayload,
     (req, res) =>
     estimateController.deleteTask(req, res));



module.exports = router;
