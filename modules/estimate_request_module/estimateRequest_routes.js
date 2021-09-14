const express = require("express");
const router = express.Router();

 const estimateRequestController = require("./estimateRequestController");
 //const checkEmptyUserFields = require('../users_module/middleware/checkEmptyUserFields');
 // const checkLengthUserFields = require('../users_module/middleware/checkLengthUserField');
  const verifyAccount = require('../users_module/middleware/verifyAccount');
  const CheckingLength = require('./utils/checkingDeveloperExists');
  const CheckDeveloperNotExists = require('./utils/checkDeveloperNotExists');

//Creating an estimate request
router.post('/estimaterequest/create/:id',
verifyAccount.reqHeader,
verifyAccount.getPayload,
estimateRequestController.CreateEstimateRequest,
estimateRequestController.estimateRequestProjectUpdate,
(req, res) =>
estimateRequestController.projectManagerUpdate(req, res));

router.put('/addDeveloper/:developerId/:estimateRequestId',
verifyAccount.reqHeader,
verifyAccount.getPayload,
CheckingLength.CheckingLength,
(req, res) =>
estimateRequestController.AddDeveloper(req, res));


router.put('/removeDeveloper/:developerId/:estimateRequestId',
verifyAccount.reqHeader,
verifyAccount.getPayload,
CheckDeveloperNotExists.CheckingLength,
(req, res) =>
estimateRequestController.RemoveDeveloper(req, res));

router.get('/estimateRequests',
verifyAccount.reqHeader,
verifyAccount.getPayload,
(req, res) =>
estimateRequestController.getAllEstimateRequests(req, res));

router.get('/estimateRequest/:id',
verifyAccount.reqHeader,
verifyAccount.getPayload,
(req, res) =>
estimateRequestController.getOneEstimateRequest(req, res));

router.put('/update/estimateRequest/:id',
verifyAccount.reqHeader,
verifyAccount.getPayload,
(req, res) =>
estimateRequestController.updateEstimateRequestDetails(req, res));

router.delete('/delete/estimateRequest/:id',
verifyAccount.reqHeader,
verifyAccount.getPayload,
 (req, res) =>
 estimateRequestController.deleteEstimateRequest(req, res));

 router.delete('/delete/estimateRequestDeveloper/:id',
 verifyAccount.reqHeader,
 verifyAccount.getPayload,
  (req, res) =>
  estimateRequestController.deleteEstimateDeveloperRequest(req, res));

 router.get('/developer/estimateRequests',
 verifyAccount.reqHeader,
 verifyAccount.getPayload,
  (req, res) =>
  estimateRequestController.getAllEstimateRequestsDeveloper(req, res));

  module.exports = router;
