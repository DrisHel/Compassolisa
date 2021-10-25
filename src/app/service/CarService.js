const CarRepository = require('../repository/CarRepository');

class CarService {
  async create(payload) {
    try {
      const result = await CarRepository.create(payload);
      return result;
    } catch (error) {
      return EvalError;
    }
  }

  async listAll(search) {
    try {
      const result = await CarRepository.findByParams(search);
      return result;
    } catch (error) {
      return error;
    }
  }

  async deleteCar(id) {
    try {
      const result = await CarRepository.deleteById(id);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new CarService();
