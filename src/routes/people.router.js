const PeopleController = require('../app/controller/PeopleController');
const ValidationPeopleCreate = require('../app/validation/people/create');

module.exports = (server, routes, prefix = '/api/v1/people/') => {
   // routes.post('/',PeopleController.create);
   // server.use(prefix, routes);

  routes.post('/',ValidationPeopleCreate, PeopleController.create);
  routes.get('/', PeopleController.getAll);
  routes.get('/:id', PeopleController.getById);
  routes.delete('/:id', PeopleController.delete);
  routes.put('/:id', PeopleController.update);
  server.use(prefix, routes);
    
  }