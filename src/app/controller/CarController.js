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
}


 /* async getByModelo(req,res){
    const {modelo}=req.query;
    const car = await Car.find({modelo});
    
    return res.status(200).json(car);
  }

  async getByCor(req,res){
    const {cor}=req.query;
    const car = await Car.find({cor});
    
    return res.status(200).json(car);
  }

  async getByAno(req,res){
    const {ano}=req.query;
    const car = await Car.find({ano});
    
    return res.status(200).json(car);
  }

  async getByAcessorio(req,res){
    const {acessorio}=req.query;
    const car = await Car.find({acessorio});
    
    return res.status(200).json(car);
  }
  async getByQuantidadePassajeiro(req,res){
    const {quantidadePassajeiro}=req.query;
    const car = await Car.find({quantidadePassajeiro});
    
    return res.status(200).json(car);
  }
}*/

module.exports = new CarController();