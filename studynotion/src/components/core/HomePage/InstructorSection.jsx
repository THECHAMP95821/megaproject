import React from 'react'
import instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import { Button } from './Button'
import { BsArrowRight } from 'react-icons/bs'

const InstructorSection = () => {
  return (
    <div className={`flex flex-row gap-20 items-center mt-20 `}>
        <div className='w-[50%]'>
            <img src={instructor} className=' shadow-white'></img>
        </div>

        <div className='w-[50%] flex flex-col items-start'>
            <div className='text-4xl font-semibold'>
                Become an 
            </div>
            <div className='text-4xl font-semibold'>
                <HighlightText text={"Instructor"}/>
            </div>

            <div className='mt-[12px] text-richblack-300 text-[16px] w-[70%] mb-[48px]'>
                Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
            </div>

            <Button active={true} linkto={"/signup"}>
                <div className='flex items-center gap-2'>
                    Start Teaching Button
                    <BsArrowRight/>
                </div>
            </Button>
            
        </div>

        

    </div>
  )
}

export default InstructorSection