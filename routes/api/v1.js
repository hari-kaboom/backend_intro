const  app=require('express')

const router=app.Router()



router.get('/conversations/insights',(req,res,next)=>{
    res.json({"vac":78,
    "name":"sajid",
    "rollnumber":"19am1a0307"})
    next()
})
module.exports=router