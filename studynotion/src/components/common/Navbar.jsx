import React from 'react'
import logo_full_light from "../../assets/Logo/Logo-Full-Light.png"
import { Link, matchPath, useLocation } from 'react-router-dom'
import { NavbarLinks } from '../../data/navbar-links'

const Navbar = () => {
  
  const location=useLocation();
  const matchRoute=(route)=>{
    return matchPath({path:route},location.pathname)
  }

  return (
    <div className='  flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>

      <div className='flex w-11/12 items-center justify-between max-w-maxContent'>
          <Link to="/">
              <img src={logo_full_light} width={160} height={42} loading='lazy'></img>
          </Link>

          {/* Nav Links */}
          <nav>
            <ul className="flex gap-x-6 text-richblack-25">
              {
                NavbarLinks.map((element,index)=>(
                  <li key={index}>
                    {
                      element.title=="Catalog"?(<div></div>):(
                        <Link to={element?.path}>
                            <p className={`${matchRoute(element?.path)?"text-yellow-25":" text-richblack-25"}`}>
                              {element.title}
                            </p>
                        </Link>
                      )
                    }
                  </li>
                ))
              }
            </ul>
          </nav>

          {/* login/signup/dashboard */}
          <div className="flex gap-x-4 items-center">
            
          </div>

      </div>
        
    </div>
  )
}

export default Navbar