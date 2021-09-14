class ValidEmail{
  constructor(){}

  checkEmail(value) {
      const validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      return validEmailRegex.test(value);
      }
    EmailMessage(value){
        const email_message={
          message:`${value} is not a valid email`,

        };
      return email_message;
    }
}
module.exports = new ValidEmail();
