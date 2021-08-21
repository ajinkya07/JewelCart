const validateEmail = email => {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
const validateFirstName = fName => {
  var re = /^[a-zA-Z ]{1,40}$/;
  return re.test(fName);
};

const validateIsNumber = number => {
  return /^\d*$/.test(number);
};
const Validations = {
  validateEmail,
  validateFirstName,
  validateIsNumber,
};
export default Validations;
