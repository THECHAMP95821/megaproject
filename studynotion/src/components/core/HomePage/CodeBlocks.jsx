import React from 'react'
import { Button } from './Button'
import HighlightText from './HighlightText'
import {BsArrowRight} from "react-icons/bs"
import {TypeAnimation} from "react-type-animation"

const CodeBlocks = ({position,heading,subheading,btn1,btn2,codeblock,backgroundGradient,codeColor,ellipse}) => {
  return (
    <div className={`flex ${position} my-20 justify-between gap-10 `}>

        {/*section-1*/}
        <div className='w-[50%] flex flex-col gap-8'>
            {heading}
            <div className='text-left font-bold text-richblack-300 mt-4 w-8/12'>
                {subheading}
            </div>
            
            <div className='flex gap-7 mt-7'>
                <Button active={btn1.active} linkto={btn1.linkto}>
                    <div className='flex gap-2 items-center'>
                        {btn1.text}
                        <BsArrowRight/>
                    </div>
                </Button>

                <Button active={btn2.active} linkto={btn2.linkto}>
                    <div className='flex gap-2 items-center'>
                        {btn2.text}
                        
                    </div>
                </Button>
            </div>

        </div>

        {/* Section - 2 */}
        <div className={`h-fit flex flex-row text-10[px] py-4 w-[100%] justify-center lg:w-[500px] background`}>
            {/* ADD GRADIENT */}
            <div className={ellipse}></div>
            <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
            </div>

            <div className={` w-[90%] flex flex-col gap-2 font-bold font-mono text-${codeColor} pr-2`}>
                <TypeAnimation  
                    sequence={[codeblock,2000,""]}
                    repeat={Infinity}
                    cursor={true}
                    omitDeletionAnimation={true}
                    style={
                        {
                            whiteSpace:"pre-line",
                            display:'block'
                        }
                    }
                />
            </div>
            
        </div>

    </div>
  )
}

export default CodeBlocks