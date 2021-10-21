const { Router } = require('express');
const Car = require('../routes/car.router')

module.exports = server => {
  server.use((req, res, next) => {
    car(server, new Router());
    next();
  });
}