const Car = require('../schema/CarSchema');
const CarService = require('../service/CarService');

class CarController  {
  async create(req, res) {
    const result = await CarService.create(req.body);
    return res.status(201).json(result)
  }
  async getAll(req,res){
    const result = await CarService.listAll(req.query)
    return res.status(200).json(result);
  }
  async delete(req,res){
    const result = await CarService.deleteCar(req.params.id)
    return res.status(204).json(result);
  }
  async update(req,res){
    const result = await CarService.updateCar(req.params.id, req.body)
    return res.status(200).json(result);
  }
  async getById(req,res){
    const result = await CarService.getByIdCar(req.params.id)
    return res.status(200).json(result);
  }
}

module.exports = new CarController();