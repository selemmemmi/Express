//function parameter req,res,next
//testing if the test is succ=> next
//else =res

const isAuth =(req,res,next)=>{
    let date=new Date();
    let t =date.getHours();
    let d = date.getDay();
    console.log(t)
    console.log(d)
    if (t>9 & t<17 & d>0 &d<6){
        next()
    }else{
        return res.status(401).send({msg:"sevice disponible Monday to Friday,  from 9 to 17"})
    }
}
export default isAuth ;