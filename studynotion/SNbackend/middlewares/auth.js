const jwt=require("jsonwebtoken");
require("dotenv").config();
const User=require("../models/User")

//auth
exports.auth=async (req,res,next)=>{
    try {
        //fetch token
        const token=req.cookies.token||req.body.token||req.header("Authorisation").replace("Bearer ","");
        if(!token){
            return res.status(401).json({
                success:false,
                message:"missing token"
            })
        }

        //veriify token
        try {
            const decode=await jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode);
            req.user=decode;
        } catch (error) {
            return res.status(401).json({
                success:false,
                message:"invalid token"
            })
        }
        next();

    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Something went wrong"
        })
    }
}

//isStudent
exports.isStudent=async (req,res,next)=>{
    try {
        if(req.user.accountType!=="Student"){
            return res.status(401).json({
                success:false,
                message:"this is a protected route for students only"
            })
        }
        next();
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"could not verify"
        })
    }
}

//isInstructor
exports.isInstructor=async (req,res,next)=>{
    
    try {
        
        if(req.user.accountType!=="Instructor"){
            return res.status(401).json({
                success:false,
                message:"this is a protected route for Instructor only"
            })
        }
        next();
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"could not verify"
        })
    }
}


//isAdmin
exports.isAdmin=async (req,res,next)=>{
    try {
        //console.log("printing account type",req.user.accountType);
        if(req.user.accountType!=="Admin"){
            return res.status(401).json({
                success:false,
                message:"this is a protected route for Admin only"
            })
        }
        next();
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"could not verify"
        })
    }
}

