const yup = require('yup');
const { object } = require('yup');

const authValidator = object({
    login: yup.string().min(1).max(100).required(),
    password: yup.string().min(8).max(50).required()
})

module.exports = authValidator;