const { Router } = require('express');
const Car = require('../routes/car.router')

module.exports = server => {
  server.use((req, res, next) => {
    Car(server, new Router());
    next();
  });
}