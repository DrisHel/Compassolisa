const PeopleRepository = require('../repository/PeopleRepository');
const PegueCpf = require('../utils');
const moment = require('moment');

class PeopleService {
  async create(payload) {
    const checkCpf= PegueCpf.validarCPF(payload.cpf);
    if(!checkCpf)
    throw Error('CPF invalid!');
    const correctDate = moment(payload.data_nascimento, 'DD/MM/YYYY').format('YYYY-MM-DD');
    const age = moment().diff(correctDate, 'years');//idade
    if(age < 18) 
    throw Error('age under 18 years');
    payload.data_nascimento = correctDate;
    const results = await PeopleRepository.create(payload);
    return results;
  }

  async listAll(search) {
    const result = await PeopleRepository.findByParams(search);
    return result;    
  }

  async deletePeople(id) {
    const result = await PeopleRepository.deleteById(id);
    return result;
  }

  async updatePeople(id, payload) {
    const result = await PeopleRepository.updateById(id,payload);
    return result;
  }

  async getByIdPeople(id) {
    const result = await PeopleRepository.getById(id);
    return result;
  }
}

module.exports = new PeopleService();
