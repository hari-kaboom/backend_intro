const  app=require('express')

const router=app.Router()
/*router.get('/user',(req,res,next)=>{
    res.send("lkhj")
    next()
})*/

router.use('/v1',require('./v1'))
module.exports=router 
