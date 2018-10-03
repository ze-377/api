var restsign=require('../../models/restaurant')
var mongoose=require('mongoose')

exports.rsignup=(req,res)=>{
    if(!req.body.districtname||!req.body.phone||!req.body.email||!req.body.password)
    {
        res.json({
            success:false,
            msg:"please enter all the details"
        })
    }
            else
            {
                new restsign({
                    districtname:req.body.districtname,
                    email:req.body.email,
                    password:req.body.password,
                    phone:req.body.phone,
                    
                }).save((err,resData)=>
                {
                    if(err)
                    {

                        res.json({
                            success:false,
                            msg:"please try after sometime"
                        })
                    }
                    else{
                        res.json({
                            success:true,
                            msg:"Registration done..Please login to continue"
                        })
                    }
                })
            }
            
        }

exports.restlogin=(req,res)=>{
    if(!req.body.email||!req.body.password){

        res.json({
            success:false,
            msg:"please enter all the details"
        })
    }else{


        restsign.findOne({email:req.body.email},(err,login)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"please try after sometimes"
                })
            }else if(!login ||login==null){
                res.json({
                    success:false,
                    msg:"plesase register first"
                })

            }
            else if(login.password!=req.body.password){
                res.json({
                    success:false,
                    msg:"Incorrect Password"
                })
            }else{
                // var tokenD={
                //     name:login.name,
                //     email:login.name
                // }
                // var token=jwt.sign(tokenD,'mow')

                res.json({
                    success:false,
                    // token:token,
                    msg:"login Done"

                })
            }
        })
    }
}