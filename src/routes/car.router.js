const CarController = require('../app/controller/CarController');


module.exports = (server, routes, prefix = '/car') => {
  routes.post('/', CarController.create);
  server.use(prefix, routes);
}