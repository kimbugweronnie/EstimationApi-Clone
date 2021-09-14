const express = require("express");
const router = express.Router();

 const projectController = require("./projectController");

 const checkEmptyUserFields = require('../users_module/middleware/checkEmptyUserFields');
 const checkLengthUserFields = require('../users_module/middleware/checkLengthUserField');
 const projects_update=require('./middleware/updateProjectManager');
 const verifyAccount = require('../users_module/middleware/verifyAccount');


 router.post('/createproject',
 checkEmptyUserFields.EmptyUserFields,
 checkLengthUserFields.LengthUserFields,
 verifyAccount.reqHeader,
 verifyAccount.getPayload,
 projectController.CreateProject,
  (req, res) =>
  projectController.updateProjectManager(req, res));

  router.get('/project/:id',
  verifyAccount.reqHeader,
  verifyAccount.getPayload,
   (req, res) =>
   projectController.getOneProject(req, res));

   router.get('/projects',
   verifyAccount.reqHeader,
   verifyAccount.getPayload,
    (req, res) =>
    projectController.getAllProjects(req, res));

    router.put('/update/project/:id',
    checkEmptyUserFields.EmptyUserFields,
    checkLengthUserFields.LengthUserFields,
    verifyAccount.reqHeader,
    verifyAccount.getPayload,
     (req, res) =>
     projectController.updateProjectDetails(req, res));

     router.delete('/delete/project/:id',
     verifyAccount.reqHeader,
     verifyAccount.getPayload,
     projects_update.ProjectManagerUpdated,
    // project_filter.ProjectManagerProjects,

      (req, res) =>
      projectController.deleteProject(req, res));

  module.exports = router;
