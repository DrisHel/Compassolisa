const mongoose = require('mongoose');

const PeopleSchema = mongoose.Schema({
    nome:{
        type: String,
        required:true
      },

    cpf:{
        type: String,
        required:true
      },
    data_nascimento:{
        type:Date,
        required:true
      },
      email:{
        type:String,
        required:true
      },
    senha:{
        type:String,
        required:true
      },

    habilitado:{
        type:Boolean,
        required:true
      },

});

const People = mongoose.model('People', PeopleSchema);

module.exports = People;

