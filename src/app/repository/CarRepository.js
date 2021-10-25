const CarSchema = require('../schema/CarSchema');

class CarRepository  {
  async create(payload) {
    return CarSchema.create(payload);
  }
  async findByParams(search){
    return CarSchema.find(search);
  }
  async deleteById(id){
    return CarSchema.findByIdAndDelete(id);
  }
}

module.exports = new CarRepository();