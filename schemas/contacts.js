const Joi = require("joi");

const addSchema = Joi.object({
    name: Joi.string()
        .pattern(new RegExp('^[a-zA-Z]+([-][a-zA-Z])? [a-zA-Z]*$'))
        .error(new Error('Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer'))
        .required(),
    email: Joi.string().required(),
    phone: Joi.string()
        .pattern(/^(?:(?:\+?\d{1,4}[-.\s]?)?(?:\(\d{1,4}\)[-.\s]?)?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/)
        .error(new Error('Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'))
        .required(),
})

module.exports = {
    addSchema,
}