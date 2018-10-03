var mongoose=require('mongoose')
var Schema=mongoose.Schema

var restsign=new Schema({
    
    districtname:{
        type:String,
        required:true
    },
    
    phone:{
        type:Number,
        requied:true,
        unique:true
    },
     
    email:{ type: String,
          required: true

    },
   
password:{
   type:String,
   required:true,

},
})

module.exports=mongoose.model('District',restsign)