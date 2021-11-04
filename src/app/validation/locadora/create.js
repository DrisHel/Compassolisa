const Joi = require('joi');

module.exports = async (req, res, next) => {  
  try {
    const schema = Joi.object({
      nome: Joi.string().required(),
      cnpj: Joi.string().required(),
      atividades: Joi.string().required(),
      endereco:Joi.array().items({descricao:Joi.string().required()}).unique((a, b) => a === b).required(),
     
    });

    const { error } = await schema.validate(req.body, { abortEarl: true });
    if (error) throw error
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
}