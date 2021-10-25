const PeopleRepository = require('../repository/PeopleRepository');

class PeopleService {
  async create(payload) {
    try {
      const result = await PeopleRepository.create(payload);
      return result;
    } catch (error) {
      return error;
    }
  }

  async listAll(search) {
   
    try {
      const result = await PeopleRepository.findByParams(search);
      return result;
    } catch (error) {
      return error;
    }
  }

  async deletePeople(id) {
    try {
      const result = await PeopleRepository.deleteById(id);
      return result;
    } catch (error) {
      return error;
    }
  }

  async updatePeople(id, payload) {
    try {
      const result = await PeopleRepository.updateById(id,payload);
      return result;
    } catch (error) {
      return error;
    }
  }

  async getByIdPeople(id) {
    try {
      const result = await PeopleRepository.getById(id);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new PeopleService();
