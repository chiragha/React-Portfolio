import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import {Link} from "react-scroll";


function Navbar  () {
    const [menu, setMenu] =useState(false);
    const navItems = [
       {
        id:1,
        text:"Home"
       },
       {
        id:2,
        text:"About"
       },
       {
        id:3,
        text:"Projects"
       },
       {
        id:4,
        text:"Skills"
       },
      
    ]



  return (
    <div className='max-w-screen-2xl container h-16 mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 z-10'>
     
        <div className='flex justify-between items-center h-16'>
            {/* logo content */}

            <div className='flex flex-col'>
                <h1 className='font-semibold text-xl cursor-pointer text-white'>Shivani</h1>
                <p className='text-green-600'>Web Developer</p>
            </div>

            {/* navbar content */}

            <div>
                <ul className='hidden md:flex space-x-8 text-[rgba(255,255,255,0.71)]'>
                    {
                        navItems.map(({id, text}) => (
                            <li className="hover:scale-105 duration-200 cursor-pointer hover:text-green-600" key={id}><Link
                            to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'>{text}</Link></li>
                        ))
                    }
                </ul>


                {/* hamburger code */}
                <div className='cursor-pointer text-white md:hidden font-medium' onClick={() => setMenu(!menu)}>
                { menu ? <IoMdClose size={25}/> : <CiMenuFries size={25}/>}
                </div>
               



            </div>
        </div>




{/* for mobile */}
       {
        menu && (
            <div className=''>
            <ul className='text-xl h-full  text-center text-white cursor-pointer md:hidden flex flex-col  mt-12 items-center justify-center'>
            {
                        navItems.map(({id, text}) => (
                            <li className="hover:scale-105 duration-200 cursor-pointer" key={id}><Link
                            to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'>{text}</Link></li>
                        ))
                    }
            </ul>
        </div>
        )
       }

       
       </div>
  )
}

export default Navbar
