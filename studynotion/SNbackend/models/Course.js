const mongoose=require("mongoose");

const courseSchema=new mongoose.Schema({
    
    courseName:{
        type:String,
        required:true
    },
    courseDescription:{
        type:String,
        required:true
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    whatYouWillLearn:{
        type:String,
        required:true
    },
    courseContent:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Section",
    }],
    ratingAndReviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"RatingAndReview",
    }],
    price:{
        type:Number,
    },
    thumbnail:{
        type:String
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
    },
    tag:{
        type: [String],
		required: true,
    },
    status: {
		type: String,
		enum: ["Draft", "Published"],
	},
    studentsEnrolled:[{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    }]

});
module.exports=mongoose.model("Course",courseSchema);



