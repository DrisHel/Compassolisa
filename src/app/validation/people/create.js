const { Router } = require('express');
const Joi = require('joi');
const People = require('../../schema/PeopleSchema');

module.exports = async (req, res, next) => {  
  try {
    const schema = Joi.object({
      nome: Joi.string().required(),
      cpf: Joi.string().min(14).max(14).pattern(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/).required(),
      data_nascimento: Joi.string().required(),
      email: Joi.string().email().required(),
      senha: Joi.string().min(6).required(),
      habilitado: Joi.string().required()
    });

    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) throw error
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }

}