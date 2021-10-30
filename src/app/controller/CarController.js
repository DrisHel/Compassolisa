const Car = require('../schema/CarSchema');
const { paginatedSerialiser,serializer } = require('../serializer/carSerializer');
const CarService = require('../service/CarService');

class CarController  {
  async create(req, res) {
    const result = await CarService.create(req.body);
    return res.status(201).json(serializer(result));
  }
  async getAll(req,res){
    const result = await CarService.listAll(req.query)
    return res.status(200).json(paginatedSerialiser(result));

  }
  async delete(req,res){
    const result = await CarService.deleteCar(req.params.id)
    return res.status(204).json(result);
  }
  async update(req,res){
    const result = await CarService.updateCar(req.params.id, req.body)
    return res.status(200).json(serializer(result));
  }
  async getById(req,res){
    const result = await CarService.getByIdCar(req.params.id)
    return res.status(200).json(serializer(result));
  }
}

module.exports = new CarController();