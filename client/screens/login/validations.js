export const validateName = (name) => {
  // name
  const re = /^[A-Za-z\s]+$/;
  return re.test(name);
};

export const validateUser = (user) => {
  //user
  const re = /^\S{4,}$/;
  return re.test(user);
};

export const validateDateOfBirth = (dateOfBirth) => {
  //fecha de nacimiento
  const re = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  return re.test(dateOfBirth);
};

export const validateAddress = (address) => {
  // direccion
  return address.length >= 5;
};

export const validatePhone = (phone) => {
  //celular
  const re = /^\d{10}$/;
  return re.test(phone);
};

export const validateEmail = (email) => {
  //email
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const validatePassword = (password) => {
  //password
  return password.length >= 6;
};
