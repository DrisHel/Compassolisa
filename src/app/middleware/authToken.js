const jwt = require('jsonwebtoken')


module.exports = () => {
  const authenticationJWT =  (req, res, next) => {
    
    const authHeader = req.headers.authorization

    if(!authHeader) 
      return res.status('401').send({ error: 'Falta informar o Token.' })

    const parts = authHeader.split(' ')

    if(!parts.length === 2)
      return res.status('401').send({ error: 'Erro no token, verifique e tente novamente.' })

    const [ bearer, token ] = parts

    if(!/^Bearer$/i.test(bearer))
      return res.status('401').send({ error: 'Formatação do token incorreta, por favor, corrija.' })

    jwt.verify(token,"ola123456", (err, decoded) => {
      if(err) 
        return res.status('401').send({ error: 'Token inválido' })

      req.userId = decoded.id

      return next()
    })
  }

  return { authenticationJWT }
}