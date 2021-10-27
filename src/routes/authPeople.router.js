const AuthController = require('../app/controller/AuthController');


module.exports = (server, routes, prefix = '/api/v1/auth/') => {

  routes.post('/',AuthController.auth);
  server.use(prefix, routes);
    
  }