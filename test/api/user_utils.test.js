const isEmpty = require('../../modules/users_module/utils/isEmpty');
// const checkRequiredUserFields = require('../helpers/helper_checkRequiredUserFields');
// const isNamelessThan2OrString=require('../helpers/helper_validateName');
// const validText=require('../helpers/helper_validateText');
// const checkName=require('../helpers/nameTester');
//  const EmptyPayload = require("../helpers/helper_checkEmptyUserFields");
// let largeText=
// 'It must contain ONLY lower case, upper case or numerics ';

describe('utils Functions for users_module', () => {

 describe('isEmpty', () => {
   it('should indicate when a value is empty', () => {
     const empty = '';
     expect(isEmpty.isEmpty(empty)).toBe(true);
   });
   it('should indicate when a value is not empty', () => {
     let sampleString='challenge';
     expect(isEmpty.isEmpty(sampleString)).toBe(false);
   });
   it('should indicate when a value is  a number', () => {
    let number=1;
     expect(isEmpty.isEmpty(number)).toBe(false);
   });
   it('should indicate when a value is a boolean', () => {
    let isbool=false;
     expect(isEmpty.isEmpty(isbool)).toBe(false);
   });
 });


});
 describe('checkRequiredUserFields', () => {
   
 });
 //   it('should show that name and text is required', () => {
 //     let value={};
 //     expect(checkRequiredUserFields.checkRequiredUserFields(value).length).toBe(2);
 //     expect(checkRequiredUserFields.checkRequiredUserFields(value)).toContain("name is required");
 //     expect(checkRequiredUserFields.checkRequiredUserFields(value)).toContain("text is required");
 //     expect(checkRequiredUserFields.checkRequiredUserFields(value)[0]).toBe("name is required");
 //     expect(checkRequiredUserFields.checkRequiredUserFields(value)[1]).toBe("text is required");
 //
 //   });
 //   it('should show that text is required', () => {
 //     let value= { name:'' };
 //     expect(checkRequiredUserFields.checkRequiredUserFields(value).length).toBe(1);
 //     expect(checkRequiredUserFields.checkRequiredUserFields(value)[0]).toContain("text is required");
 //   });
 //   it('should show that text is required', () => {
 //     let value= { text:'' };
 //     expect(checkRequiredUserFields.checkRequiredUserFields(value).length).toBe(1);
 //     expect(checkRequiredUserFields.checkRequiredUserFields(value)[0]).toContain("name is required");
 //   });
 //
 // });
 // describe('validateName', () => {
 //   it('should return a message', () => {
 //     let value='a';
 //     expect(isNamelessThan2OrString.isNamelessThan2OrString(value)['alert'])
 //     .toBe("name must be at least two characters");
 //   });
 //
 // });
 // describe('validateText', () => {
 //   it('should return false', () => {
 //     let value='!@#$asdfghj'
 //     expect(validText.checkText(value)).toBe(false);
 //   });
 //   it('should return true', () => {
 //     let value='ASAab';
 //     expect(validText.checkText(value)).toBe(false);
 //   });
 //   it('should return true', () => {
 //     let value='ASAas12b';
 //     expect(validText.checkText(value)).toBe(true);
 //   });
 //   it('should return true', () => {
 //    let value='knitedeveloper';
 //     expect(validText.checkText(value)).toBe(true);
 //   });
 //   // it('should return true', () => {
 //   //   expect(validText.checkText(largeText)).toBe(false);
 //   // });
 //   it('should return message', () => {
 //    let value='knitedeveloper';
 //     expect(validText.TextMessage(value)['message'])
 //     .toBe('knitedeveloper failed to match the following rules');
 //   });
 //   it('should return message', () => {
 //    let value='knitedeveloper';
 //     expect(validText.TextMessage(value)['rule1'])
 //     .toBe('It must contain ONLY lower case, upper case or numerics');
 //   });
 //   it('should return message', () => {
 //    let value='knitedeveloper';
 //     expect(validText.TextMessage(value)['rule2'])
 //     .toBe('It must be at least 8 characters long, and not more than 32 characters');
 //   });
 // });
 // describe('nameTester', () => {
 //   it('should return false', () => {
 //     let value=1111;
 //     expect(checkName.checkName(value)).toBe(false);
 //   });
 //   it('should return true', () => {
 //     let value='ASAas12b';
 //     expect(checkName.checkName(value)).toBe(true);
 //   });
 //   it('should return message', () => {
 //    let value='knitedeveloper';
 //     expect(checkName.NameMessage(value)['message'])
 //     .toBe('knitedeveloper contain ONLY lower case, upper case ');
 //   });
 // });
 // describe('checkRequiredUserFields', () => {
 //   it('should show that name and text is required', () => {
 //     let value={name:'',text:''};
 //     expect(EmptyPayload.checkEmptyUserFields(value).length).toBe(2);
 //     expect(EmptyPayload.checkEmptyUserFields(value)).toContain( "name cannot be empty");
 //     expect(EmptyPayload.checkEmptyUserFields(value)).toContain( "text cannot be empty");
 //     expect(EmptyPayload.checkEmptyUserFields(value)[0]).toBe( "name cannot be empty");
 //     expect(EmptyPayload.checkEmptyUserFields(value)[1]).toBe( "text cannot be empty");
 //
 //   });
 //   it('should show that text is required', () => {
 //     let value= {name:'name',text:''};
 //     expect(EmptyPayload.checkEmptyUserFields(value).length).toBe(1);
 //     expect(EmptyPayload.checkEmptyUserFields(value)[0]).toContain("text cannot be empty");
 //   });
 //   it('should show that text is required', () => {
 //     let value= {name:'',text:'text'}
 //     expect(EmptyPayload.checkEmptyUserFields(value).length).toBe(1);
 //     expect(EmptyPayload.checkEmptyUserFields(value)[0]).toContain("name cannot be empty");
 //   });
 //
 //});
 //});
