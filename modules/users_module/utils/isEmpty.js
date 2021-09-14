class IsEmpty{
  constructor(){}
  isEmpty(value){
     if (typeof value === "string" && value.trim() === "") {
        return true;
      }else{
        return false;
      }
  }
}
module.exports = new IsEmpty();
