const passwordHash = require('./passwordHash');
class GetPayload {
  constructor(){}
  async getPayload(req,res) {
    let newUser = req.body;
    newUser.password=await passwordHash.gethashUserPassword(newUser.password);
    return newUser;

}
}
module.exports = new GetPayload();
