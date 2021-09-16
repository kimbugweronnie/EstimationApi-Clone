const jwt = require("jsonwebtoken");
let payload = require('./utils/getpayload');

class Register {
  constructor(){}

async jwtPayloadSigning(req,res) {

          

                  return  res.status(200).send({
                     token,
                     subject: newUser._id,
                     name: newUser.name,
                      email: newUser.email,
                     password:newUser.password,
                      role: newUser.role,
                     status: "Registration Successful"
                   });

};
};
module.exports = new Register();
