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

  endereco:[{

      cep:{
        type:String, 
        required:true   
     },
        logradouro:{
          type:String,
         
        },
        number:{
            type:String,
            
        },
        complemento:{
            type:String,
        },
        bairro:{
          type:String,
        },
      localidade:{
            type:String,
            
        },
        uf:{
            type:String,
            
        },
        isFilial:{
            type:Boolean,
            
        }
 }],



});

LocadoraSchema.plugin(mongoosePaginate);
const Locadora = mongoose.model('Locadora', LocadoraSchema);

module.exports = Locadora;


