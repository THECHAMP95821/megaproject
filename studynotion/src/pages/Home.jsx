import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from "react-icons/bs"
import HighlightText from '../components/core/HomePage/HighlightText'
import { Button } from '../components/core/HomePage/Button'
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import TimeLine from '../components/core/HomePage/TimeLine'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import Footer from '../components/common/Footer'


const Home = () => {
  return (
    <div className=' relative'>
        {/* Section-1 */}



        <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between'>
            <Link to={"/signup"}>
                <div id='signupbtn' className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>
                    <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                        <p>Become an Instructor </p>
                        <BsArrowRight/>
                    </div>
                </div>
            </Link>

            <div className='text-centre text-4xl font-semibold mt-7'>
                Empower Your Future with 
                <HighlightText text={"Coding Skills"}/>
            </div>

            <div className='w-8/12 text-center font-bold text-richblack-300 mt-4'>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
            </div>

            <div className='flex flex-row gap-7 mt-8'>
                <Button active={true} linkto={"/signup"}>Learn More</Button>
                <Button active={false} linkto={"/login"}>Book a Demo</Button>
            </div>


            <div className=' mx-3 my-12 shadow-[10px_-5px_50px_-5px] shadow-blue-200'>
                <video muted loop autoPlay className='shadow-[20px_20px_rgba(255,255,255)]' >
                    <source src={Banner} type='video/mp4'></source>
                </video>
            </div>

            {/*code section -1*/}
            <div>
                <CodeBlocks 
                    position={"lg:flex-row"}
                    heading={
                        <div className='text-4xl font-semibold'>
                            Unlock your <HighlightText text={"coding potential"}/> with our online courses.
                        </div>
                    }
                    
                    subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                    btn1={
                        {
                            text:"Try It Yourself",
                            linkto:"/signup",
                            active:true
                        }
                    }
                    btn2={
                        {
                            text:"Learn More",
                            linkto:"/login",
                            active:false
                        }
                    }
                    codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example\n</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a><a href="two/">Two\n</a><a href="three/">Three</a>\n</nav>`}
                    codeColor={"yellow-25"}
                    backgroundGradient="linear-gradient(111.93deg, rgba(14, 26, 45, 0.24) -1.4%, rgba(17, 30, 50, 0.38) 104.96%)"
                    ellipse={"ellipse"}
                />
            </div>

            {/* Code Section-2 */}
            <div className='mb-[200px]'>
                <CodeBlocks 
                    position={"lg:flex-row-reverse"}
                    heading={
                        <div className='text-4xl font-semibold w-[35%]'>
                            Start <HighlightText text={"coding in seconds"}/> 
                        </div>
                    }
                    
                    subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
                    btn1={
                        {
                            text:"Continue Lesson",
                            linkto:"/signup",
                            active:true
                        }
                    }
                    btn2={
                        {
                            text:"Learn More",
                            linkto:"/login",
                            active:false
                        }
                    }
                    codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example\n</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a><a href="two/">Two\n</a><a href="three/">Three</a>\n</nav>`}
                    codeColor={""}
                    ellipse={"ellipse1"}
                />
            </div>

            <ExploreMore/>


        </div>

        {/* /*Section 2*/}

        <div className='bg-pure-greys-5 text-richblack-700 '>

            <div className='homepage_bg h-[310px]'>

                <div className='w-11/12 max-w-maxContent flex items-center mx-auto gap-5'>
                    <div className='flex flex-row gap-7 text-white mx-auto mt-[190px]'>
                        <Button active={true} linkto={"/signup"}>
                            <div className='flex items-center gap-2'>
                                <p>Explore Full Catalog </p>
                                <BsArrowRight/>
                            </div>
                            
                        </Button>

                        <Button active={false} linkto={"/login"}>
                            <div className='flex items-center gap-2'>
                                <p>Learn More </p>
                                
                            </div>
                            
                        </Button>

                        
                    </div>
                </div>
                
            </div>

            <div className='w-11/12 mx-auto max-w-maxContent flex flex-row items-center justify-between gap-5 mt-[50px] mb-10 '>
                
                <div className='flex flex-row gap-5 w-[50%]'>
                    <div className=' text-4xl font-semibold '>
                        Get the Skills you need for a
                        <HighlightText text={"Job that is in demand"}/>
                    </div>
                </div>

                <div className='flex flex-col gap-10 w-[40%] items-start mt-10'>
                    <div className='text-[16px]'>
                    The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                    </div>
                    <Button active={true} linkto={"/signup"}>
                        Learn More
                    </Button>
                </div>

                


            </div>

            <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-5 mt-[50px] mb-10'>
                <TimeLine/>

                <LearningLanguageSection/>
            </div>

            
            
            

        </div>

        {/* Section-3 */}
        <div className='w-11/12 mx-auto max-w--maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white mb-[90px]'>

            <InstructorSection/>

            <h2 className='text-center text-4xl font-semibold mt-[200px]'>Review from other Learners</h2>

        </div>

        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Home