const LocadoraRepository = require('../repository/LocadoraRepository');
const CepRepository = require('../repository/CepRepository');

class LocadoraService {
  async create(payload) {
    const {endereco} = payload;
    console.log(endereco[0].cep);
    const meuCEP = endereco[0].cep;
    const {data} = await CepRepository.getCep(meuCEP);
    console.log(data);

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
