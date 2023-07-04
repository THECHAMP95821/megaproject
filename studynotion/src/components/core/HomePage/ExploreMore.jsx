import React, { useState } from 'react'
import { HomePageExplore } from '../../../data/homepage-explore';
import HighlightText from './HighlightText';
import {BsFillPeopleFill} from "react-icons/bs"
import {GoRepoForked} from "react-icons/go"

const tabsName=[
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths"
]

const ExploreMore = () => {

    const [currentTab,setCurrentTab]=useState(tabsName[0]);  
    const [courses,setCourses]=useState(HomePageExplore[0].courses);
    const [currentCard,setCurrentCard]=useState(HomePageExplore[0].courses[0].heading);

    const setMyCards=(value)=>{
        setCurrentTab(value);
        const result=HomePageExplore.filter((arr)=>{return arr.tag==value});
        setCourses(result.courses);
        //setCurrentCard(result.courses[0].heading)
    }

    const setMyCourses=(value)=>{
        setCurrentTab(value);
        const myCourses=HomePageExplore.filter((currval)=> currval.tag==value);
        setCourses(myCourses[0].courses)
        setCurrentCard(myCourses[0].courses[0].heading)
        console.log(currentCard)
        
    }
    

  return (
    <div className='relative mx-auto w-max '>
        <div className='text-4xl font-semibold text-center'>
            Unlock the <HighlightText text="Power of Code"/>
        </div>

        <div className='mx-auto text-center text-richblack-300 text-md font-bold mt-5 mb-20 border-richblack-100'>Learn to Build Anything You Can Imagine</div>

        <div className='flex gap-2 items-center mb-2 rounded-full bg-richblack-800 px-1 py-1 cursor-pointer'>
            {
                tabsName.map((element,index)=>{
                    return (
                        <div key={index} onClick={()=>setMyCourses(element)} className={`text-16px rounded-full px-7 py-2 font-inter transition-all duration-200 hover:bg-richblack-900 hover:text-richblack-5 ${currentTab==element?" bg-richblack-900 text-richblack-5":" text-richblack-200"} `}>
                            {element}
                        </div>
                    )
                })
            }
        </div>

        <div className='lg:h-[150px]'></div>
        
        <div className='absolute flex gap-11 justify-center w-full -translate-y-32 '>
            {
                courses.map((course,index)=>{
                    return (
                        <div onClick={()=>setCurrentCard(course.heading)}  key={index} className={`cursor-pointer w-[350px] flex flex-col items-start ${currentCard==course.heading?`bg-white `:"bg-richblack-700"} ${currentCard==course.heading?"current-card-shadow":""}  px-4 pt-4`}>
                            <div className={`text-[20px] font-inter font-semibold  ${currentCard==course.heading?" text-richblack-800":"text-richblack-25"} `}>
                                {course.heading}
                            </div>
                            <div className='mt-[12px] pb-[24px] border-b border-dashed text-sm text-richblack-400'>
                                {course.description}
                            </div>
                            <div className='flex gap-x-16 pb-3'>
                                <div className={`flex ${currentCard==course.heading?"text-blue-500":"text-richblack-300"} `}>
                                    <BsFillPeopleFill color=''/>{course.level}
                                </div>
                                <div className={`flex ${currentCard==course.heading?"text-blue-500":"text-richblack-300"}`}>
                                    <GoRepoForked/>{course.lessionNumber}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    </div> 
  )
}

export default ExploreMore