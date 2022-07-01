const mongoose=require('mongoose');
const userSchema=mongoose.model("userSchema")


module.exports.register=async function register(req,res){

    try {
        let dataObj=req.body;
        let user=await userSchema.create(dataObj)

        if(user){
            res.json({
                message:"User Registered",
                data:user
            })
        }
        else{
            res.json({
                message:"Error while registering"
            })
        }

    } catch (error) {
        res.json({
            message:error.message
        })
    }

}