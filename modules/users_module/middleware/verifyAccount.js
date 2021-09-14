const get_Token = require('../utils/getToken');
const jwt = require("jsonwebtoken");
class VerifyAccount{
 constructor(){}

 reqHeader(req,res,next){
     if (!req.headers.authorization) {
       return res.status(401).send({
         status: "Unauthorized request"
       });
}
next();
};

getPayload(req,res,next){
  try {
    const token =get_Token.geToken(req.headers.authorization);
    const payload = jwt.verify(token, "secretKey");
    req.body.Id= payload.subject;
    req.body.role = payload.role;
    
  } catch  {
    return res.status(401).send({status: "The provided token is incorrect"});
}
next();
}
}
module.exports = new VerifyAccount();
