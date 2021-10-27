
  const AuthService = require('../service/AuthService');

class AuthController{
    async auth(req,res){
        const result = await AuthService.authenticate(req.body);
        return res.status(200).json(result);
      }
    
    
}
module.exports = new AuthController();