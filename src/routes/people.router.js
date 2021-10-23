const PeopleController = require('../app/controller/PeopleController');

module.exports = (server, routes, prefix = '/people') => {
    routes.post('/',PeopleController.create);
    server.use(prefix, routes);
  }