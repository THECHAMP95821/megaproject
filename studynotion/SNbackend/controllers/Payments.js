const {instance}=require("../config/razorpay");
const User=require("../models/User");
const Course=require("../models/Course")
const mailSender=require("../utils/mailSender");
const {courseEnrollmentEmail}=require("../mail/templates/courseEnrollmentEmail.js");
const { default: mongoose } = require("mongoose");

//capture payment and initiate order
exports.capturePayment=async (req,res)=>{
    //get course and yser id
    const {course_Id}=req.body
    const userId=req.user.id;

    //validation
    //valid course id
    if(!courseId){
        return res.json({
            success:false,
            message:"Please provide valid course Id"
        })
    }
    //valid course detail
    let course;
    try {
        course=await Course.findById(course_Id)
        if(!course){
            return res.json({
                success:false,
                message:"Could not find Course"
            })
        }

        //user already paid for course
        const uid=new mongoose.Types.ObjectId(userId);
        if(course.studentsEnrolled.includes(uid)){
            return res.status(200).json({
                success:false,
                message:"couldnt find the course"
            })
        }

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success:false,
            message:error.message
        })
        

    }
        
    //create order
    const amount=course.price;
    const currency="INR";
    const options={
        amount:amount*100,
        currency:currency,
        reciept:Math.random(Date.now()).toString(),
        notes:{
            courseId:course_Id,
            userId
        }
    }

    try {
        //initiate payment
        const paymentResponse=await instance.orders.create(options);
        console.log(paymentResponse);
        return res.status(200).json({
            success:true,
            courseName:course.courseName,
            courseDescription:course.courseDecription,
            thumbnai:course.thumbnail,
            orderId:paymentResponse.id,
            currency:paymentResponse.currency,
            amount:paymentResponse.amount,

        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"could not initiate order"
        })
    }

    //return res

}

//verify signature
exports.verifySignature=async (req,res)=>{
    const webHookSecret="12345678";
    const signature=req.headers["x-razorpay-signature"];

    const shasum=crypto.createHmac("sha256",webHookSecret);
    shasum.update(JSON.stringify(req.body));
    const digest=shasum.digest("hex");

    if(signature===digest){
        console.log("payment authorised");
        const {courseId,userId}=req.body.payload.payment.entity.notes;

        try {
            //fulfill action
    
    
            //find course and enroll the student
                const enrolledCourse=await Course.findOneAndUpdate({_id:courseId},{$push:{studentsEnrolled:userId}},{new:true});
                if(!enrolledCourse){
                    return res.status(500).json({
                        success:false,
                        message:"Course Not Found   "
                    })
                }
                console.log(enrolledCourse);

                //find student and addd course to enrolled courses
                const enrolledStudent=await User.findByIdAndUpdate({_id:userId},{$push:{Courses:courseId}},{new:true})

                console.log(enrolledStudent);

                //send conformation email
                const emailResponse=await mailSender(
                    enrolledStudent.email,
                    "congo from codehelp",
                    "Congratulations you have successfully purchased the course"
                );

                console.log(emailResponse);

                return res.status(200).json({
                    success:true,
                    message:"Signature verified and course added"
                })

    
        } catch (error) {
            console.log(error);
            return res.json({
                success:false,
                message:error.message
            })
        }
    }

    else{
        return res.status(400).json({
            success:false,
            message:"invalid request"
        })
    }
    

}