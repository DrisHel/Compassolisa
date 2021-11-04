const LocadoraRepository = require('../repository/LocadoraRepository');

class LocadoraService {
  async create(payload) {
    try {
      const result = await LocadoraRepository.create(payload);
      return result;
    } catch (error) {
      return EvalError;
    }
  }

  async listAll(search) {
   
    try {
      const result = await LocadoraRepository.findByParams(search);
      return result;
    } catch (error) {
      return error;
    }
  }

  async deleteLocadora(id) {
    try {
      const result = await LocadoraRepository.deleteById(id);
      return result;
    } catch (error) {
      return error;
    }
  }

  async updateLocadora(id, payload) {
    try {
      const result = await LocadoraRepository.updateById(id,payload);
      return result;
    } catch (error) {
      return error;
    }
  }

  async getByIdLocadora(id) {
    try {
      const result = await LocadoraRepository.getById(id);
      return result;
    } catch (error) {
      return error;
    }
  }

}

module.exports = new LocadoraService();
