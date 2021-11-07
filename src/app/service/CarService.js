const CarRepository = require('../repository/CarRepository');

class CarService {
  async create(payload) {
      const result = await CarRepository.create(payload);
      return result;
    }  

  async listAll(search) {
    const result = await CarRepository.findByParams(search);
    return result;   
  }

  async deleteCar(id) {
    const result = await CarRepository.deleteById(id);
      return result;
  }

  async updateCar(id, payload) {
    const result = await CarRepository.updateById(id,payload);
    return result;
  }

  async getByIdCar(id) {
    const result = await CarRepository.getById(id);
    return result;
  }
}

module.exports = new CarService();
