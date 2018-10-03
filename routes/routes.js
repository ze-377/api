var express=require('express')
var router=express.Router()


//restaurant login and signup
var restsign=require('./restaurant/restsign')
router.post('/restsign',restsign.rsignup)
router.post('/restlogin',restsign.restlogin)

//customer login
var custlogin=require('./loginandsignup')
router.post('/signup',custlogin.signup)
router.post('/login',custlogin.login)


module.exports=router
