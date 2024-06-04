import React from 'react';
import { FaGitSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaLink } from "react-icons/fa";

function Portfolio  ()  {
    
  return (
    <div name="Projects" className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
        <div className='flex text-center flex-col'> 
            <h1 className='text-center text-5xl text-white mt-10'>Projects</h1>
            <span className=' underline text-2xl text-green-600 mt-3'>Featured Projects</span>
                 <div className='grid grid-col-1 md:grid-cols-3 mt-4 gap-3'>

                    <div className='w-full md:w-[300px] md:h-[300px] border-[2px]  rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-200'>
                         <img src='https://plus.unsplash.com/premium_photo-1681816189240-9437a3a017fb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcHV0ZXIlMjBkZXNrJTIwaG9tZSUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D' className='h-[180px] md:w-[300px] border-[2px] w-full rounded-lg' alt='img' />
                         
                         <h1 className='text-2xl underline my-3 text-green-600'>Dummy-portfolio</h1>
                         <div className='flex justify-between '>
                          <div className='flex flex-row text-3xl gap-2'>
                          <FaHtml5 className='text-red-600'/>
                          <FaCss3Alt className='text-green-600'/>
                          <IoLogoJavascript className='text-blue-600'/>
                          </div>
                          <div className='flex flex-row text-3xl gap-2'>
                           <a href='https://github.com/chiragha/Responsive-Portfolio-website'><FaGitSquare className='text-blue-600'/></a> 
                           <a href='https://chiragha.github.io/Responsive-Portfolio-website/'> <FaLink className='text-white'/></a>
                          </div>
                         </div>
                        
                    </div>

                    <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-200'>
                          


                    <img src='https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='h-[180px] md:w-[300px] border-[2px] w-full rounded-lg' alt='img' />
                         
                         <h1 className='text-2xl underline my-3 text-green-600'>Youtube-Clone</h1>
                         <div className='flex justify-between '>
                          <div className='flex flex-row text-3xl gap-2'>
                          <FaHtml5 className='text-red-600'/>
                          <FaCss3Alt className='text-green-600'/>
                          <IoLogoJavascript className='text-blue-600'/>
                          </div>
                          <div className='flex flex-row text-3xl gap-2'>
                          <a href='https://github.com/chiragha/Youtube-Clone'> <FaGitSquare className='text-blue-600'/></a> 
                            <a href="https://chiragha.github.io/Youtube-Clone/"><FaLink className='text-white'/></a>
                          </div>
                         </div>
                    </div>

                    <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-200'>
                    
                    <img src='https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='h-[180px] md:w-[300px] border-[2px] w-full rounded-lg' alt='img' />
                         
                         <h1 className='text-2xl underline my-3 text-green-600'>To-Do-List-app</h1>
                         <div className='flex justify-between '>
                          <div className='flex flex-row text-3xl gap-2'>
                          <FaHtml5 className='text-red-600'/>
                          <FaCss3Alt className='text-green-600'/>
                          <IoLogoJavascript className='text-blue-600'/>
                          </div>
                          <div className='flex flex-row text-3xl gap-2'>
                           <a href='https://github.com/chiragha/To-Do-App-JS'><FaGitSquare className='text-blue-600'/></a> 
                            <a href='https://chiragha.github.io/To-Do-App-JS/'><FaLink className='text-white'/></a>
                          </div>
                         </div>
                    </div>

                    {/* <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-200'>
                    
                    </div>

                    <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-200'>
                    
                    </div>

                    <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-200'>
                         
                    </div> */}
                 </div>
        </div>
    </div>
  )
}

export default Portfolio