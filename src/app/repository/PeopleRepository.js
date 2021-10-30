const PeopleSchema = require('../schema/PeopleSchema');

class PeopleRepository  {
  async create(payload) {
    return PeopleSchema.create(payload);
  }
  async findByParams(search){
    const {page=1,limit=100,...query}=search;
    return PeopleSchema.paginate({query},{
      limit:Number(limit),
      page:Number(page),
      skip:(Number(page)-1)*Number(limit)
    });
    
    
  }
  async find(search){
    console.log(search)
    return PeopleSchema.findOne(search);
    
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