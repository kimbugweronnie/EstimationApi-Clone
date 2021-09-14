const passwordHash = require('./utils/passwordHash');
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("./user_model");

class Register {
  constructor(){}

async jwtPayloadSigning(req,res) {
  let newUser = req.body;
  newUser.password=await passwordHash.gethashUserPassword(newUser.password);
          const token = jwt.sign(newUser, "secretKey");
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
