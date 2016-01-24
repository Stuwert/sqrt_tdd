function validPhoneNumber(phoneNumber){
  //TODO: Return whether phoneNumber is in the proper form
  var regex = /\d\d\d/
  return phoneNumber.match(regex) === -1 ? false : true;

}

console.log(validPhoneNumber('33'));
