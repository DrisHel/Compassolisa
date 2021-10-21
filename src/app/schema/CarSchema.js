const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
  modelo:{
  type: String,
  required:true
},

  cor:{
  type:String,
  required:true
},
  ano:{
  type:Number,
  required:true
},

  acessorios:{
  type:Array,
  required:true
},

  descricao:{
  type:String,
  required:true
},

  QtdPassageiros:{
  type:Number,
  required:true
}


});

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;