const {  serializer,paginatedSerialiser} = require('../serializer/locadoraSerializer');

const LocadoraService = require('../service/LocadoraService');

class LocadoraController{
    async create(req, res) {
        try{
        const result = await LocadoraService.create(req.body);
        return res.status(201).json(result);
    
        }catch(error){
          return res.status(500).json({msg:error.message});
        }
      }
      async getAll(req,res){
        try {
          const result = await LocadoraService.listAll(req.query)
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json({msg:error.message});
        }
       
      }
      async delete(req,res){
        try {
          const result = await LocadoraService.deleteLocadora(req.params.id)
        return res.status(204).json(result);
        } catch (error) {
          return res.status(404).json({msg:error.message});
        }
      }
      async update(req,res){
        try {
          const result = await LocadoraService.updateLocadora(req.params.id, req.body)
        return res.status(200).json(serializer(result));
        } catch (error) {
          return res.status(500).json({msg:error.message});
        }
      }
      async getById(req,res){
       try {
        const result = await LocadoraService.getByIdLocadora(req.params.id)
        return res.status(200).json(result);
       } catch (error) {
        return res.status(500).json({msg:error.message});
       }
      }
      
    }
    
    
    module.exports = new LocadoraController();
