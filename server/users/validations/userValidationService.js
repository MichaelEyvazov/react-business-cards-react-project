const registerValidation = require("./Joi/registerValidation");
const loginValidation = require("./Joi/loginValidation");
const userUpdateValidation = require("./Joi/userUpdateValidation");

const verification = undefined || "Joi";

const validateRegistration = user => {
  if (verification === "Joi") return registerValidation(user);
};

const validateLogin = user => {
  if (verification === "Joi") return loginValidation(user);
};

const validateUserUpdate = user => {
  if (verification === "Joi") return userUpdateValidation(user);
};

exports.validateRegistration = validateRegistration;
exports.validateLogin = validateLogin;
exports.validateUserUpdate = validateUserUpdate;
