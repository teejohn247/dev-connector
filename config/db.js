import mongoose from 'mongoose';

const url = "mongodb+srv://teejohn247:wisdom123@database-974kv.mongodb.net/test?retryWrites=true&w=majority"

 const connectDB = async () => {
     try{
         await mongoose.connect(url, {
             useNewUrlParser:true,
             useUnifiedTopology: true 
         });
         console.log('MongoDb connected...')
     } catch (err){
         console.error(err.message);
         process.exit(1);
     }
}
  export default connectDB;