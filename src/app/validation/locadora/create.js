const Joi = require('joi');

module.exports = async (req, res, next) => {  
  try {
    const schema = Joi.object({
      nome: Joi.string().required(),
      cnpj: Joi.string().required(),
      atividades: Joi.string().required(),
      endereco: Joi.array().items({
      cep: Joi.string().trim().required(),
      number: Joi.string().min(1).trim().required(),
      complemento: Joi.string().trim().optional(),
      isFilial: Joi.boolean().required()
      })
      .unique()
      .min(1)
      .required()
     
    });

    const { error } = await schema.validate(req.body, { abortEarl: true });
    if (error) throw error
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
}