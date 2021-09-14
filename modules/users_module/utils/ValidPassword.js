class ValidPassword{
  constructor(){}

  checkPassword(value) {
      const validPasswordRegex = /[a-zA-Z0-9]{8,32}/;
      return validPasswordRegex.test(value);
    };

    PasswordMessage(value){
        const password_message={
          message:`${value} failed to match the following rules`,
          rule1:'It must contain ONLY lower case, upper case or numerics',
          rule2:'It must be at least 8 characters long, and not more than 32 characters'
        };
      return password_message;
    };
}
module.exports = new ValidPassword();
