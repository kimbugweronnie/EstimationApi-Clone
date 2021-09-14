
const bcrypt = require("bcryptjs");
class UserPasswordHash{
 constructor(){}
async gethashUserPassword(value){
 const salt = await  bcrypt.genSalt(10);
 const gethashPassword = await bcrypt.hash(value, salt);
  return  gethashPassword;
};
};
module.exports = new UserPasswordHash();
