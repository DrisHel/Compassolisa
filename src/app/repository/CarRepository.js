const CarSchema = require('../schema/CarSchema');

class CarRepository  {
  async create(payload) {
    return CarSchema.create(payload);
  }
  async findByParams(search){
    console.log(search)
    return CarSchema.find(search);
    
  }
  async deleteById(id){
    return CarSchema.findByIdAndDelete(id);
  }

  async updateById(id,payload){
    return CarSchema.findByIdAndUpdate(id,{...payload});
  }

  async getById(_id){
    return CarSchema.findById(_id);
  }
}

module.exports = new CarRepository();