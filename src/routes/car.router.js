const CarController = require('../app/controller/CarController');
const ValidationCarCreate = require('../app/validation/car/create');


module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/',ValidationCarCreate, CarController.create);
  routes.get('/', CarController.getAll);
  routes.get('/:id', CarController.getById);
  routes.delete('/:id', CarController.delete);
  routes.put('/:id', CarController.update);
  server.use(prefix, routes);
}

