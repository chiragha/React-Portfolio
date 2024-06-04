import React from 'react';
import "./Home.css";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaGitSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
import { SiMongodb } from "react-icons/si";
import { ReactTyped} from "react-typed";


function Home  () {
  return (
    
   <div name="Home" className='max-w-screen-2xl container mx-auto h-96 px-4 md:px-20 mt-28 md:mt-48 '>


        <div className='text-center flex flex-col text-2xl text-white font-normal space-y-2'>
               
                <div className="flex flex-row text-center justify-center text-2xl md:text-4xl">
            
                <h1>Hello, I'm a </h1>
                <ReactTyped
                className='text-green-600 font-bold'
          strings={["Web Developer", "Full Stack Developer"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
                </div>
               
                <p className='text-center text-md'>Hello, I'm Shivani Sinha, a 
                passionate Web developer with a keen eye for MERN Stack with a background in IT. 
                    </p>
            



        </div>

        <br/>

{/* social media icons */}
           <div className='flex justify-between'>
           <div className=''>
                <h1 className='text-xl font-semibold  text-white mt-6 mb-2 '>Available on</h1>
               <ul className='flex space-x-4 text-md text-2xl'>
           <a href=""> <li className='text-green-600 hover:text-white cursor-pointer hover:scale-110 duration-200'><FaLinkedin /></li></a>    
           <a href="mailto:ssaritassinha@gmail.com"><li className='text-green-600 hover:text-white cursor-pointer hover:scale-110 duration-200'><BiLogoGmail /></li></a>     
           <a href="https://github.com/chiragha"> <li className='text-green-600 hover:text-white cursor-pointer hover:scale-110 duration-200'><FaGitSquare /></li></a>    
                </ul>
            </div>

            <div>
            <h1 className='text-xl font-semibold  text-white mt-6 mb-2 '>Currently Working on</h1>
                <ul className='flex space-x-4 justify-center text-2xl'>
                <li className='text-green-600 hover:text-white cursor-pointer hover:scale-110 duration-200'><FaReact  /></li>
                <li className='text-green-600 hover:text-white cursor-pointer hover:scale-110 duration-200'><FaPython /></li>
                <li className='text-green-600 hover:text-white cursor-pointer hover:scale-110 duration-200'><CgCPlusPlus /></li>
                <li className='text-green-600 hover:text-white cursor-pointer hover:scale-110 duration-200'><SiMongodb /></li>
                </ul>
            </div>
           </div>

   </div>
  
    
  )
}

export default Home
