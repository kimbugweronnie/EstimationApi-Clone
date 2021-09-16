const IsShort = require('./isShort');
class LengthPayload{
  constructor(){}

  checkLengthUserFields(value){
    const lengthPayloadParams = [];
    const  bodyParams = ['name', 'email','password','role'];
    bodyParams.forEach(param => {
      if (IsShort.isShort(value[param])) {
        lengthPayloadParams.push(`${param} must be more than 2 characters`);
      }
    });
    return lengthPayloadParams;
}
}
module.exports = new LengthPayload();
