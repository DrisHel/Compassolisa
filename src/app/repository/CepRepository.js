const axios = require('axios');
class CepRepository {
    async getCep(cep) {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      return response;
    }
}
module.exports = new CepRepository();