import React from 'react'
import HighlightText from './HighlightText'
import knowYourProgress from "../../../assets/Images/Know_your_progress.png"
import compareWithOthers from "../../../assets/Images/Compare_with_others.png"
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png"
import { Button } from './Button'


const LearningLanguageSection = () => {
  return (
    <div>
        <div className='flex flex-col gap-5 items-center mb-20'>

            <div className='text-4xl font-semibold text-center'>
                Your swiss knife for <HighlightText text={"Learning any language"}></HighlightText>   
            </div>

            <div className='text-center text-richblack-600 mx-auto text-base mt-3 w-[75%]'>
                Using spin making learning multiple languages easy. with 20+ languages realistic voice-over,progress tracking, custom schedule and more.
            </div>

            <div className='flex flex-row items-center justify-center mt-5 '>
                <img src={knowYourProgress} className=' object-contain -mr-32 ml-5'></img>
                <img src={compareWithOthers} className=' object-contain ml-5'></img>
                <img src={Plan_your_lessons} className=' object-contain -ml-36 '></img>
            </div>

            <div className='w-fit'>
                <Button active={true}>
                    <div className='font-bold'>
                        Learn More
                    </div>
                </Button>
            </div>
            
        </div>

        
    </div>
    
  )
}

export default LearningLanguageSection