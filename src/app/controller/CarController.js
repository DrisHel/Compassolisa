const Car = require('../schema/CarSchema');
const { paginatedSerialiser,serializer } = require('../serializer/carSerializer');
const CarService = require('../service/CarService');

class CarController  {
  async create(req, res) {
    try {
      const result = await CarService.create(req.body);
    return res.status(201).json(serializer(result));
    } catch(error) {
      return res.status(400).json(error);
      
    }
    
  }
  async getAll(req,res){
    try {
      const result = await CarService.listAll(req.query)
    return res.status(200).json(paginatedSerialiser(result));
    } catch (error) {
      return res.status(400).json(error);
    }
    

  }
  async delete(req,res){
    try {
      const result = await CarService.deleteCar(req.params.id)
    return res.status(204).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
    
  }
  async update(req,res){
    try {
      const result = await CarService.updateCar(req.params.id, req.body)
    return res.status(200).json(serializer(result));
    } catch (error) {
      return res.status(400).json(error);
    }
    
  }
  async getById(req,res){
    try {
      const result = await CarService.getByIdCar(req.params.id)
    return res.status(200).json(serializer(result));
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  
}

module.exports = new CarController();