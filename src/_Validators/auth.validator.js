const yup = require('yup');
const { object } = require('yup');
// implementer plus avec yup
const authValidator = object({
    emailUser: yup.string().email().required(),
    password: yup.string().min(6).max(40).required()
})

module.exports = authValidator;