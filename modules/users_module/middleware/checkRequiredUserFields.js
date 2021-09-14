const checkRequiredPayload = require('../utils/checkRequired');
class CheckRequiredUserFields{
  constructor(){}
 RequiredUserFields(req,res,next) {
  const requiredPayloadParams=checkRequiredPayload.checkRequiredUserFields(req.body);
    if(requiredPayloadParams.length){
    return res.status(400).send(requiredPayloadParams);
   }
   next();
 }
}
module.exports = new CheckRequiredUserFields();
