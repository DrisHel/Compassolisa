const mongoose = require('mongoose');
const mongoosePaginate =require('mongoose-paginate-v2');



const LocadoraSchema = mongoose.Schema({
  nome:{
  type: String,
  required:true
},

  cnpj:{
  type:String,
  required:true
},
atividades:{
  type:String,
  required:true
},

  endereço:[{

      cep:{
        type:String, 
        required:true   
     },
        rua:{
          type:String,
          required:true
        },
        number:{
            type:String,
            required:true
        },
        complemento:{
            type:String,
        },
        cidade:{
            type:String,
            required:true
        },
        estado:{
            type:String,
            required:true
        },
        isFilial:{
            type:Boolean,
            required:true
        }
 }],



});

LocadoraSchema.plugin(mongoosePaginate);
const Locadora = mongoose.model('Locadora', LocadoraSchema);

module.exports = Locadora;


