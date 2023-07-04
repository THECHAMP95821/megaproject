const User=require("../models/User")
const mailSender=require("../utils/mailSender");
const bcrypt=require("bcrypt");
const crypto=require("crypto");

//reset password token
exports.resetPasswordToken=async (req,res)=>{
    try {
        //get email form req body
        const email=req.body.email
        //check user for email validation
        const user=await User.findOne({email:email});
        if(!user){
            return res.json({
                success:false,
                message:"Email not registered"
            })
        }
        //generate token
        const token=crypto.randomBytes(20).toString("hex");
        // console.log(token);
        // console.log(typeof(token));
        //update user by adding token and expirtaion time
        const updatedDetails=await User.findOneAndUpdate({email:email},{token:token,resetPasswordExpires:Date.now()+5*60*1000},{new:true})
        //generate link
        const url=`http://localhost:3000/update-password/${token}`
        //send mail
        await mailSender(
			email,
			"Password Reset",
			`Your Link for email verification is ${url}. Please click this url to reset your password.`
		);
        //return response
        return res.json({
            success:true,
            message:"email sent seccessfully,change password"

        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message

        })
    }
    

}

//resetPassword
exports.resetPassword=async (req,res)=>{
    try {
        //data fetch
        const {password,confirmPassword,token}=req.body;
        //validation
        if(password!==confirmPassword){
            return res.json({
                success:false,
                message:"passwords dont match"

            });
        }
        //fetch user details using token
        const userDetails=await User.findOne({token:token});
        
        //if no entry,invalid token
        if(!userDetails){
            return res.json({
                success:false,
                message:"invalid token"

            })
        }
        //token time check
        if(userDetails.resetPasswordExpires<Date.now()){
            return res.json({
                success:false,
                message:"token expired pls try again"

            })
        }
        //hash password
        const hashedPassword=await bcrypt.hash(password,10);

        //update password
        //console.log(userDetails);

        await User.findByIdAndUpdate(
            {_id:userDetails._id},
            {token:token,password:hashedPassword},
            
            {new:true},
        )

        if(await bcrypt.compare(password, userDetails.password)){
            return res.status(500).json({
                success:false,
                message:"could not change pwd"
            })
        }
        
        // const newuserDetails=await User.findOne({token:token});
        // console.log(newuserDetails);
        
        //return res
        return res.json({
            success:true,
            message:"password reset successful"

        })
    }
    catch (error) {
        console.log(error);
        return res.json({
            success:false,
            message:error.message
        })
    }
}
    