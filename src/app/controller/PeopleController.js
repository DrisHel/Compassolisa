const PeopleService = require('../service/PeopleService');

class PeopleController  {
  async create(req, res) {
    try{
    const result = await PeopleService.create(req.body);
    return res.status(201).json(result);

    }catch(error){
      return res.status(500).json({msg:error.message});
    }
  }
  async getAll(req,res){
    const result = await PeopleService.listAll(req.query)
    return res.status(200).json(result);
  }
  async delete(req,res){
    const result = await PeopleService.deletePeople(req.params.id)
    return res.status(204).json(result);
  }
  async update(req,res){
    const result = await PeopleService.updatePeople(req.params.id, req.body)
    return res.status(200).json(result);
  }
  async getById(req,res){
    const result = await PeopleService.getByIdPeople(req.params.id)
    return res.status(200).json(result);
  }
  
}


module.exports = new PeopleController();