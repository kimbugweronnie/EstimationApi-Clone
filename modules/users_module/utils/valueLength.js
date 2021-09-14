class IsShort{
  constructor(){}

  isShort(value){
     if (typeof value === "string" && value.length < 2) {
        return true;
      }else{
        return false;
      }
  };
}
module.exports = new IsShort();
