const Section=require("../models/Section");
const Course=require("../models/Course");


exports.createSection=async (req,res)=>{

    try {
        //fetch data
        const {sectionName,courseId}=req.body;
        //validation
        if(!sectionName||!courseId){
            return res.status(400).json({
                success:false,
                message:"missing properties"
            })
        }
        //section create
        const newSection=await Section.create({sectionName});
        const newSectionid=newSection._id
        //update course schema
        const updatedCourseDetails=await Course.findByIdAndUpdate(
            {_id:courseId},
            {
                $push:{
                    courseContent:newSectionid
                }
            },
            {new:true}
        ).populate({
            path: "courseContent",
            populate: {
                path: "subSection",
            },
        })
        .exec();

        console.log("Updated Course Details", updatedCourseDetails)
        //retuen res
        return res.status(200).json({
            success:true,
            message:"Section Created successfully",
            data:updatedCourseDetails
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success:false,
            message:error.message,
            
        })
    }
    
}


exports.updateSection=async (req,res)=>{
    try {
        
        //data input
        const {sectionName,sectionId}=req.body

        //validation
        if(!sectionName||!sectionId){
            return res.status(400).json({
                success:false,
                message:"missing properties"
            })
        }

        //update data
        const section=await Section.findByIdAndUpdate(sectionId,{sectionName},{new:true})

        //return res
        
            return res.status(200).json({
                success:true,
                message:"section updated successfully"
            })
       

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Unable to update section"
        })
    }
}

exports.deleteSection=async (req,res)=>{
    try {
        
        //get ID
        const {sectionId,courseId}=req.body

        //update course schema
        await Course.findByIdAndUpdate(
            {_id:courseId},
            {$pull:{courseContent:sectionId}}
        )

        //findByIdAndDelete
        await Section.findByIdAndDelete(sectionId);
                
        return res.status(200).json({
            success:true,
            message:"Section deleted successfully"
        })
        

    } catch (error) {
        
            return res.status(400).json({
                success:false,
                message:"Error while deleting section"
            })
        
    }
}