const yup = require('yup');
const { object } = require('yup');

const userValidator = object({
    // firstname: yup.string().min(1).max(50).required(),
    // lastname: yup.string().min(1).max(50).required(),
    // email: yup.string().email('L’email doit être valide').required(),

    idUser: yup.number().positive().integer().required('L\'identifiant de l\'utilisateur est requis'),
    firstname: yup.string().min(2, 'Le prénom doit contenir au moins 2 caractères').max(50, 'Le prénom ne peut pas dépasser 50 caractères').required('Le prénom est requis'),
    lastname: yup.string().min(2, 'Le nom doit contenir au moins 2 caractères').max(50, 'Le nom ne peut pas dépasser 50 caractères').required('Le nom est requis'),
    email: yup.string().email('L’email doit être valide').required('L\'email est requis'),
});

module.exports = userValidator;
