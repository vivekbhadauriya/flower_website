import mongoose from 'mongoose';


export const connection = async() =>{
    const URL = 'mongodb://vkthakur6798:<8447963948>@flower-shard-00-00.lx5ap.mongodb.net:27017,flower-shard-00-01.lx5ap.mongodb.net:27017,flower-shard-00-02.lx5ap.mongodb.net:27017/?ssl=true&replicaSet=atlas-11xp3t-shard-0&authSource=admin&retryWrites=true&w=majority&appName=flower'
    try{ 
        await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:ture});
        console.log('Database Connected Succesfully');
        
        
    }
    catch(error){
        console.log("Some error occured",error.message);
        
    }
}
export default connection; 