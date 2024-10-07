  /*  console.log('server file is running');

    function add(a,b)
    {
        return a+b;
    }
    var result=add(5,1);
    console.log(result);

    (function()
{
    console.log('shubham');
})();
function callback(){
    console.log("shubham singh is a good boy");
}
const add=function(a,b,callback){
    var res=a+b;
    console.log('result: '+res);
    callback();
}
add(3,4,callback );
var fs= require('fs');
var os =require('os');

var user=os.userInfo();
console.log(user);

fs.appendFile('greeting.txt' , 'Hi '+ user.usrname + '!\n',()=>{
    console.log("file is created");
});
const notes= require('./notes.js');
console.log('server file is available');
const notes= require('./notes.js');
var _ =require('lodash');

console.log('server file is available');


var data= ["person","person",1,1,2,2,'name','age','2'];
var filter=_.uniq(data);
console.log(filter);
const jsonString='{"name": "jhon","age": 30,"city": "New York"}';
const jsonObject= JSON.parse(jsonString);
console.log(jsonObject.name); 

console.log(typeof json);*/
const express = require('express')
const app = express();
const db=require('./db');


const bodyParser=require('body-parser');
app.use(bodyParser.json());


app.get('/',function(req,res){
    res.send('Welcome to my hotel')
})

const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);
app.listen(3000,()=>{
    console.log('listening on port 3000');
}
) 