class GetToken{
 constructor(){}
geToken(value){
  let token = value.split(" ")[1];
  return token;
};
checkToken(value,value1){
  let checked_payload=jwt.verify(value,value1);
  return checked_payload;
}
}
module.exports = new GetToken();
