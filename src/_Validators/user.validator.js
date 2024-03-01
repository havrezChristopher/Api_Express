const yup = require('yup');
const { object } = require('yup');

const userValidator = object({
    firstname: yup.string().min(1).max(50).required(),
    lastname: yup.string().min(1).max(50).required(),
    email: yup.string().email('L’email doit être valide'),
    birthdate: yup.date(),
    gender: yup.string().max(1).required()
});

module.exports = userValidator;
