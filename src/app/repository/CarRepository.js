const CarSchema = require('../schema/CarSchema');

class CarRepository  {
  async create(payload) {
    return CarSchema.create(payload);
  }
  async findByParams(search){
  const {page=1,limit=100,...query}=search;
    return CarSchema.paginate({query},{
      limit:Number(limit),
      page:Number(page),
      skip:(Number(page)-1)*Number(limit)
    });
    
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