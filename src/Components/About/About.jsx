import React from 'react'

function About () {
  return (
    <div name="About" className=''>
         <h1 className='text-center text-5xl text-white md:mt-10'>About-me</h1>
        <div class="px-2 py-20 w-full flex justify-center">
           

    <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
        <div class="lg:w-1/2 w-full">
            <div class="lg:scale-110 h-80 bg-cover lg:h-full  rounded-b-none border lg:rounded-lg">
                <img src='https://play-lh.googleusercontent.com/g3DtfXccz_yJo9XFhcJsqH_Cmt7XkbtkI0dte3ec7o99O-yAlPIm07f5VZgtjLKdmg' alt=""/>
            </div>
        </div>
        <div class="py-12 px-6 lg:px-12 max-w-xl lg:max-w-4xl lg:w-1/2 md:mt-0 mt-20 rounded-t-none border lg:rounded-lg">
            <p class="mt-4 text-white">
             1.5+ years of experience as a Web Developer with expertise in user interface design and development,
             testing, debugging, and staff training for eCommerce technologies.Skilled in writing clean and efficient code, collaborating with cross-functional
              teams, and identifying and fixing critical bugs
            </p>
            <div class="mt-8">
                <a href="#" class="bg-green-600 text-gray-100 px-5 py-3 font-semibold rounded">Download Resume</a>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default About