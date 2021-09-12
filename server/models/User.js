import mongoose from 'mongoose'

/* @ schema numbers, minlength also defined in form for validation in front-end */

const userSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true
  },

  number: {
    type: String,
    required: true,
    minlength: 10
  },

});

export default mongoose.model('User', userSchema);

