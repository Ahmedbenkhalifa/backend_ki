const mongoose = require('mongoose');

const connectDB= async() =>{
  try {
    await mongoose.connect(process.env.MONGO_URL,
      { useNewUrlParser: true,
       useUnifiedTopology: true,})
       console.log("the database is connected ..")
  } catch (error) {
    console.log('ERROR DB CONNECTION');
  }
}

module.exports=connectDB