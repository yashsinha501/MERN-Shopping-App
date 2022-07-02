const mongoose=require('mongoose');
const userSchema=mongoose.model("userSchema")
const bcrypt=require('bcryptjs')


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

module.exports.login=async function login(req,res){

    try {
        let data=req.body;
        if(data.email){
            let user=await userSchema.findOne({email:data.email});
        
            if(user){
                let salt=req.salt;

                bcrypt.compare(data.password,user.password, function (err, isMatch) {
                    if (!err) 
                        return res.json({
                            message:"User has Logged in",
                            userDetails:data
                        })
                    else{
                        return res.json({
                            message:err.message
                        })
                    }
                    cb(null, isMatch)
                })
            }
            else{
                return res.json({
                    message:"User Not Found"
                })
            }
        }
        else{
            return res.json({
                message:"User Not Found"
            })
        }

    } catch (error) {
        return res.json({
            message:error.message
        })
    }

}