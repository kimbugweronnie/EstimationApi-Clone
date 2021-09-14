const checkEmptyPayload = require('../utils/checkEmpty');
class CheckEmptyUserFields{
  constructor(){}


 EmptyUserFields(req,res,next) {
  const emptyPayloadParams=checkEmptyPayload.checkEmptyUserFields(req.body);
  if(emptyPayloadParams.length){
    return res.status(400).send(emptyPayloadParams);
  }
  next();
}
}

module.exports = new CheckEmptyUserFields();
