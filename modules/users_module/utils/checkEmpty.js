const IsEmpty = require('./isEmpty');
class EmptyPayload{
  constructor(){}

  checkEmptyUserFields(value){
    const emptyPayloadParams = [ ];
    const  bodyParams = ['name', 'email','password','role'];
    bodyParams.forEach(param => {
      if (IsEmpty.isEmpty(value[param])) {
        emptyPayloadParams.push(`${param} cannot be empty`);
      }
    });
    return emptyPayloadParams;
}
}
module.exports = new EmptyPayload();
