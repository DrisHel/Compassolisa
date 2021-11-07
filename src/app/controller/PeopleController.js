const { paginatedSerialiser, serializer } = require('../serializer/userSerializer');
const PeopleService = require('../service/PeopleService');

class PeopleController  {
  async create(req, res) {
    try{
    const result = await PeopleService.create(req.body);
    return res.status(201).json(serializer(result));

    }catch(error){
      return res.status(500).json({msg:error.message});
    }
  }
  async getAll(req,res){
    try {
      const result = await PeopleService.listAll(req.query)
    return res.status(200).json(paginatedSerialiser(result));
    } catch (error) {
      res.status(500).json({msg:error.message});
    }
    
  }
  async delete(req,res){
    try {
      const result = await PeopleService.deletePeople(req.params.id)
    return res.status(204).json(result);
    } catch (error) {
      res.status(500).json({msg:error.message});
    }
  }
  async update(req,res){
   try {
    const result = await PeopleService.updatePeople(req.params.id, req.body)
    return res.status(200).json(serializer(result));
   } catch (error) {
    res.status(500).json({msg:error.message});
   }
  }
  async getById(req,res){
    try {
      const result = await PeopleService.getByIdPeople(req.params.id)
    return res.status(200).json(serializer(result));
    } catch (error) {
      res.status(500).json({msg:error.message});
    }
  }
  
}


module.exports = new PeopleController();