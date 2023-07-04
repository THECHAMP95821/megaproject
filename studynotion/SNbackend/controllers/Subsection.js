const SubSection=require("../models/SubSection");
const Section=require("../models/Section");
const {uploadImageToCloudinary}=require("../utils/imageUploader")

//create subsection
exports.createSubSection=async (req,res)=>{
    try {
        
        //fetch data
        const {sectionId,title,timeDuration,description}=req.body;

        //extract video
        const video=req.files.video;
        //validation
        if(!sectionId||!title||!timeDuration||!description||!video){
            return res.status(400).json({
                success:false,
                message:"All fields required"
            })
        }
        //upload video to cloudinary
        const uploadDetails=await uploadImageToCloudinary(video,process.env.FOLDER_NAME);
        //create subsection
        const subSectionDetails=await SubSection.create({
            title:title,
            timeDuration:timeDuration,
            description:description,
            videoUrl:uploadDetails.secure_url
        })
        //update section schema
        const updatedSection=await Section.findByIdAndUpdate({_id:sectionId},{$push:{subSection:subSectionDetails._id}},{new:true}).populate("subSection").exec()

        //resturn res
        return res.status(200).json({
            success:true,
            message:"SubSection created successfully",
            updatedSection
        })

    } catch (error) {
        console.error("Error while creating subsection",error)
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

//update subsection
exports.updateSubSection=async (req,res)=>{
    try {
        
        //data input
        const {subSectionId,title,timeDuration,description}=req.body

        //validation
        if(!subSectionId||!title||!timeDuration||!description){
            return res.status(400).json({
                success:false,
                message:"missing properties"
            })
        }

        //update data
        const subSection=await SubSection.findByIdAndUpdate(subSectionId,{title,timeDuration,description},{new:true})
        if (!subSection) {
            return res.status(404).json({
              success: false,
              message: "SubSection not found",
            })
          }

        //return res
        
            return res.status(200).json({
                success:true,
                message:"Sub section updated successfully"
            })
       

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Unable to update Sub Section"
        })
    }
}

//delete subsection
exports.deleteSubSection = async (req, res) => {
    try {
      const { subSectionId, sectionId } = req.body
      await Section.findByIdAndUpdate(
        { _id: sectionId },
        {
          $pull: {
            subSection: subSectionId,
          },
        }
      )
      const subSection = await SubSection.findByIdAndDelete({ _id: subSectionId })
  
      if (!subSection) {
        return res
          .status(404)
          .json({ success: false, message: "SubSection not found" })
      }
  
      return res.json({
        success: true,
        message: "SubSection deleted successfully",
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: "An error occurred while deleting the SubSection",
      })
    }
  }