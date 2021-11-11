const LocadoraController = require('../app/controller/LocadoraController');
const ValidationLocadoraCreate = require('../app/validation/locadora/create');

module.exports = (server, routes, prefix = '/api/v1/rental/') => {

  routes.post('/', LocadoraController.create);
  routes.get('/',LocadoraController.getAll);
  routes.get('/:id', LocadoraController.getById);
  routes.delete('/:id', LocadoraController.delete);
  routes.put('/:id', LocadoraController.update);
  server.use(prefix, routes);
    
  }