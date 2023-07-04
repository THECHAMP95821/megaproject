import React from 'react'
import logo_full_light from "../../assets/Logo/Logo-Full-Light.png"
import { FooterLink2 } from '../../data/footer-links'
import {BsFacebook,BsYoutube,BsTwitter,BsGoogle} from "react-icons/bs"

const Footer = () => {
  return (
    <div className=' bg-richblack-800 lg:mt-[150px] flex flex-col w-screen '>

        <div className='flex mt-16 w-11/12 mx-auto pb-10 border-b border-richblack-700 mb-16'>

            <div className='w-[50%] border-r border-richblack-700 flex gap-16 justify-center'>

                <div className='flex flex-col gap-2'>
                    <img src={logo_full_light}></img>
                    <div className='text-richblack-25 font-inter text-lg mt-2'>Company</div>
                    <div className='text-richblack-400 hover:text-richblack-25 cursor-pointer'>About</div>
                    <div className='text-richblack-400 hover:text-richblack-25 cursor-pointer'>Careers</div>
                    <div className='text-richblack-400 hover:text-richblack-25 cursor-pointer'>Affiliates</div>
                    <div className='flex gap-2 text-richblack-400  cursor-pointer'>
                        <BsFacebook className='hover:text-richblack-25'/>
                        <BsGoogle className='hover:text-richblack-25'/>
                        <BsTwitter className='hover:text-richblack-25'/>
                        <BsYoutube className='hover:text-richblack-25'/>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    
                    <div className='text-richblack-25 font-inter text-lg mt-2'>Resources</div>
                    <div className='text-richblack-400 hover:text-richblack-25 cursor-pointer'>Articles</div>
                    <div className='text-richblack-400 hover:text-richblack-25 cursor-pointer'>Blog</div>
                    <div className='text-richblack-400 hover:text-richblack-25 cursor-pointer'>Chart Sheet</div>
                    <div className='text-richblack-400 hover:text-richblack-25 cursor-pointer'>Code challenges</div>
                    <div className='text-richblack-400 hover:text-richblack-25 cursor-pointer'>Docs</div>
                    <div className='text-richblack-400 hover:text-richblack-25 cursor-pointer'>Projects</div>
                    <div className='text-richblack-400 hover:text-richblack-25 cursor-pointer'>Videos</div>
                    <div className='text-richblack-400 hover:text-richblack-25 cursor-pointer'>Workspaces</div>
                    <div className='text-richblack-25 font-inter text-lg mt-5'>Support</div>
                    <div className='text-richblack-400 hover:text-richblack-25 cursor-pointer'>Health Center</div>

                </div>

                <div className='flex flex-col gap-2'>
                    
                    <div className='text-richblack-25 font-inter text-lg mt-2'>Plans</div>
                    <div className='text-richblack-400 hover:text-richblack-25 cursor-pointer'>Paid memberships</div>
                    <div className='text-richblack-400 hover:text-richblack-25 cursor-pointer'>For students</div>
                    <div className='text-richblack-400 hover:text-richblack-25 cursor-pointer'>Chart Business solutions</div>
                    
                    <div className='text-richblack-25 font-inter text-lg mt-5'>Community</div>
                    <div className='text-richblack-400 hover:text-richblack-25 cursor-pointer'>Forums</div>
                    <div className='text-richblack-400 hover:text-richblack-25 cursor-pointer'>Chapters</div>
                    <div className='text-richblack-400 hover:text-richblack-25 cursor-pointer'>Events</div>

                </div>
                    
                
            </div>

            <div className='flex gap-16 w-[50%]  justify-center '>
                {
                    FooterLink2.map((element,index)=>{
                        return (
                            <div key={index} className='flex flex-col mb-2 gap-2'>

                                <div className=' text-richblack-25 font-inter text-lg'>
                                    {element.title}
                                </div>

                                {
                                    element.links.map((ele,ind)=>{
                                        return (
                                            <div key={ind} className=' text-richblack-400 hover:text-richblack-25 cursor-pointer'>
                                                {ele.title}
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        )
                    })
                }
            </div>

        </div>

            
        
        <div className='flex justify-start w-11/12 mx-auto text-richblack-300 text-[14px] font-inter items-center mb-16'>

            <div className='pr-2 border-r border-richblack-700 '>Privacy Policy</div>
            <div className='pr-2 pl-2 border-r border-richblack-700'>Cookie Policy</div>
            <div className='pl-2'>Terms</div>

        </div>

    </div>
  )
}

export default Footer