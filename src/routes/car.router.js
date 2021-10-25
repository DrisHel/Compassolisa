const CarController = require('../app/controller/CarController');


module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', CarController.create);
  routes.get('/', CarController.getAll);
  routes.delete('/:id', CarController.delete);
  server.use(prefix, routes);
}