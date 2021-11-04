const LocadoraSchema = require('../schema/LocadoraSchema');

class LocadoraRepository  {
  async create(payload) {
    return LocadoraSchema.create(payload);
  }
  async findByParams(search){
  const {page=1,limit=100,...query}=search;
    return LocadoraSchema.paginate({query},{
      limit:Number(limit),
      page:Number(page),
      skip:(Number(page)-1)*Number(limit)
    });
    
  }
  async deleteById(id){
    return LocadoraSchema.findByIdAndDelete(id);
  }

  async updateById(id,payload){
    return LocadoraSchema.findByIdAndUpdate(id,{...payload});
  }

  async getById(_id){
    return LocadoraSchema.findById(_id);
  }
}

module.exports = new LocadoraRepository();