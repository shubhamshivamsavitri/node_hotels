const mongoose=require('mongoose');


const mongoURL=`mongodb://localhost:27017/hotels`//replace 'mydatabase' with our database name

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db=mongoose.connection;
db.on('connected',()=>{
    console.log('Connected to MongoDB server');
});
db.on('error',(err)=>{
    console.log('MongoDb connection error',err);
});
db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
});

module.exports=db;