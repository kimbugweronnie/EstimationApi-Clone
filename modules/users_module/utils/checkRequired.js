class RequiredPayload{
  constructor(){}
  checkRequiredUserFields(value){
    const bodyParams = ['name', 'password','email','role'];
    const requiredPayloadParams = [];
    bodyParams.forEach(param => {
      if (!Object.keys(value).includes(param)) {
          requiredPayloadParams.push(`${param} is required`);
      }
    });
    return requiredPayloadParams;

  };
}
module.exports = new RequiredPayload();
