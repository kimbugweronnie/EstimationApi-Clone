const checkLengthPayload = require('../utils/checkLength');
class CheckLengthUserFields{
  constructor(){}
 LengthUserFields(req,res,next) {
  const lengthParams=checkLengthPayload.checkLengthUserFields(req.body);
    if(lengthParams.length){
    return res.status(400).send(lengthParams);
   }
   next();
 };
}
module.exports = new CheckLengthUserFields();
