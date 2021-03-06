const { Router } = require('express');
const car = require('../routes/car.router');
const people = require('../routes/people.router');
const locadora = require('../routes/locadora.router')
const auth = require('../routes/authPeople.router');
const swaggerRoutes = require('./swagger.routes');

module.exports = server => {
  server.use((req, res, next) => {
    car(server, new Router());
    people(server, new Router());
    auth(server, new Router());
    locadora(server, new Router());
    swaggerRoutes(server, new Router());
    next();
  });
 
}