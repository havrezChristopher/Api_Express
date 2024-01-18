const yup = require("yup");

const userValidator = yup.object().shape({
  pseudo: yup.string().required().min(3).max(40),
  email: yup.string().require().email(),
  password: yup.string().require().min(6),
});

module.exports = userValidator;
