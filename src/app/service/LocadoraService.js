const LocadoraRepository = require('../repository/LocadoraRepository');

class LocadoraService {
  async create(payload) {
    const result = await LocadoraRepository.create(payload);
    return result;
  }

  async listAll(search) {
    const result = await LocadoraRepository.findByParams(search);
    return result;
  }

  async deleteLocadora(id) {
    const result = await LocadoraRepository.deleteById(id);
      return result;
  }

  async updateLocadora(id, payload) {
    const result = await LocadoraRepository.updateById(id,payload);
      return result;
  }

  async getByIdLocadora(id) {
    const result = await LocadoraRepository.getById(id);
    return result;
  }
}

module.exports = new LocadoraService();
