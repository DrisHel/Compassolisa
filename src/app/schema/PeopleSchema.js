const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const mongoosePaginate =require('mongoose-paginate-v2');

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
        required:true,
        unique: true,
        lowercase:true
      },
    senha:{
        type:String,
        required:true,
        
      },

    habilitado:{
        type:String,
        required:true
      },

      senhaResetToken: {
        type: String,
        select: false
      },
      senhaResetExpires: {
        type: Date,
        select: false
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
      
});

PeopleSchema.pre('save', async function(next) {
  const people = this
  if(people.isModified('senha')) {
    people.senha = await bcrypt.hash(people.senha, 10)
  }

  next()
})

PeopleSchema.plugin(mongoosePaginate);
const People = mongoose.model('People', PeopleSchema);

module.exports = People;

