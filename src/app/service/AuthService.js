const PeopleRepository = require('../repository/PeopleRepository');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthService {
 generateToken(params = {}){
        console.log(params);
        return  jwt.sign(params, 'DORIS', {
          expiresIn: 86400
        })
      }
  async authenticate(payload) {
    try {
        console.log('chegou');
        const userEmail = payload.email;
      const user = await PeopleRepository.find({email:userEmail});
      if(!user){
          throw Error({mensagem:'Usuário não existe!'});
      }
      
      if(!await bcrypt.compare(payload.senha, user.senha)) {
        throw Error({ mensagem: 'Senha Invalida.' })
    }
    user.senha = undefined 
    console.log({ 
        user, 
        token: this.generateToken({ email: user.email ,habilitado:user.habilitado})
      });
    return { 
      user, 
      token: this.generateToken({ email: user.email, habilitado:user.habilitado })
    }
     
    } catch (error) {
      return error;
    }
  }
}

module.exports = new AuthService();
