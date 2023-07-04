import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timeLineImage from "../../../assets/Images/TimelineImage.png"

const timeLine=[
    {
        Logo:Logo1,
        heading:"Leadership",
        Description:"Fully committed to success company"
    },
    {
        Logo:Logo2,
        heading:"Responsibility",
        Description:"Students will always be our top priority"
    },
    {
        Logo:Logo3,
        heading:"Flexibility",
        Description:"The ability to switch is an important skills"
    },
    {
        Logo:Logo4,
        heading:"Solve the problem",
        Description:"Code your way to a solution"
    }

]

const TimeLine = () => {
  return (
    <div className='mx-auto mb-[150px]'>

        <div className='flex flex-row space-x-10 gap-12 items-center'>

            <div className='w-[45%] flex flex-col gap-5 relative'>
                {
                    timeLine.map((element,index)=>{
                        return (
                            <div className='flex flex-row gap-6 mb-12' key={index}>
                                <div className='w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center  '>
                                    <img src={element.Logo}></img>
                                </div>
                                

                                <div className='hidden absolute lg:block  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px] translate-y-12'>

                                </div>

                                <div>
                                    <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                                    <p className='text-base'>{element.Description}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

            <div className='relative shadow-[10px_-5px_50px_-5px] shadow-blue-200 mb-10 space-x-[60px]'>
                <div className=''></div>
                <img src={timeLineImage} alt='timelineimage' className='object-fit shadow-white shadow-[20px_20px_0px_0px]'></img>

                <div className=' absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7 left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7'>
                        <h1 className='text-3xl font-bold'>10</h1>
                        <h2 className=' text-caribbeangreen-300'>Years of experience</h2>
                    </div>

                    <div className='flex flex-row gap-5 items-center  px-7'>
                        <h1 className='text-3xl font-bold'>250</h1>
                        <h2 className=' text-caribbeangreen-300'>Types of Courses</h2>
                    </div>
                </div>

                

            </div>

        </div>
        
    </div>
  )
}

export default TimeLine