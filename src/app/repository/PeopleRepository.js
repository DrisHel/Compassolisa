const PeopleSchema = require('../schema/PeopleSchema');

class PeopleRepository  {
  async create(payload) {
    return PeopleSchema.create(payload);
  }
  async findByParams(search){
    console.log(search)
    return PeopleSchema.find(search);
    
  }
  async deleteById(id){
    return PeopleSchema.findByIdAndDelete(id);
  }

  async updateById(id,payload){
    return PeopleSchema.findByIdAndUpdate(id,{...payload});
  }

  async getById(_id){
    return PeopleSchema.findById(_id);
  }
}

module.exports = new PeopleRepository();