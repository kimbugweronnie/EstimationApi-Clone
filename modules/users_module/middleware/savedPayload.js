const passwordHash = require('../utils/passwordHash');

const mongoose = require("mongoose");
const User = require("../user_model");

class SavedPayload {
  constructor(){}

async registerPayload(req,res,next) {
  let newUser = req.body;
  newUser.password=await passwordHash.gethashUserPassword(newUser.password);
  newUser = new User(newUser);
   const createdUser = await newUser.save(newUser);
   const payload = {
             subject: createdUser._id,
             name: createdUser.name,
              email: createdUser.email,
             password:createdUser.password,
              role: createdUser.role
          };
next();
};
};
module.exports = new SavedPayload();
