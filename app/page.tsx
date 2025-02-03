import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import minepic from "../(assets)/minepic.jpg"
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
// import project from "../(assets)/project.png"
import images from "../(assets)/images.png"

import {   FaRegCheckSquare } from "react-icons/fa";
import figmapic from "../(assets)/figmapic.png"
import webclone from "../(assets)/webclone.png"
import loginpage from "../(assets)/loginpage.png"


function page() {
  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
      <div className="bg-gray-950 pt-52 h-auto w-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
  <div className="flex flex-col md:flex-row w-full max-w-5xl h-[80%] gap-8">

    {/* Left Side (Text Content) */}
    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center order-2 md:order-1">
      <h3 className="text-lg md:text-xl font-bold text-red-600 mb-2">
        Hello! My Name is
      </h3>
      <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-100 mb-4">
        HUSSAIN ALI
      </h1>
      <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
        A passionate and dedicated junior web developer, I am student of GIAIC currently learning Next.js and Tailwind CSS.
      </p>
      <Link 
        href="/contact" 
        className="inline-block bg-red-600 hover:bg-red-700 text-white text-sm md:text-base px-6 py-3 rounded-md transition-colors duration-200 w-fit"
      >
        Contact me
      </Link>
    </div>

    {/* Right Side (Image Content) */}
    <div id='about' className="hidden md:flex w-full md:w-1/2   items-center justify-center order-1 md:order-2 relative">
      <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-3xl shadow-xl">
        <Image 
          src={minepic} 
          alt="Portrait of Hussain Ali"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </div>

  </div>
</div>









                                   {/* About section */}
{/* About section */}
<div id='Aboutme' className="bg-slate-900 py-16 md:py-24">
  <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 gap-8 md:gap-12">
    
    {/* Image section - Hidden on mobile */}
    <div className="hidden md:block w-full md:w-1/2 relative aspect-square">
      <Image 
        src={images} 
        alt="Hussain Ali working on laptop"
        fill
        className="rounded-2xl object-cover shadow-xl"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>

    {/* Text Content */}
    <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-widest">
          About Myself
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
          Who am I?
        </h2>
      </div>

      <p className="text-gray-400 text-base md:text-lg leading-relaxed">
        I&apos;m Hussain Ali, a Junior Front-end Web Developer and student at GIAIC 
        Governor&apos;s Initiative for Artificial Intelligence & Cloud Computing), 
        currently in Quarter 2. My previous quarter focused on TypeScript mastery, 
        and I&apos;m now advancing my skills in Next.js and Tailwind CSS to create 
        sophisticated user interfaces.
      </p>

      {/* Optional: Add a button or link */}
      <Link 
        href="https://ui-ux-omega.vercel.app/"
        className="mt-4 inline-block text-red-400 hover:text-red-300 transition-colors duration-200 font-medium"
      >
        View My Projects →
      </Link>
    </div>
  </div>
</div>

{/* skills  */}



    <div id="skills" className=''>
        <section className="text-gray-600 body-font bg-blue-900">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-200 tracking-widest font-semibold title-font mb-1">
        Skills
      </h2>
      <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-900">
        My skills:
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">
      {/* skills */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaRegCheckSquare className='text-xl font-bold' />
            </div>
            <h2 className="text-zinc-300 text-lg title-font font-semibold">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
           <div className=" relative h-1 w-full bg-slate-400 rounded-xl">
            <div className='absolute bg-blue-500 h-1 rounded-xl w-[80%]'></div>
            </div> 
          <p className='font-bold text-blue-500 text-right'>90%</p>
            
           </div>
        </div>
      </div>
      {/* skills */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaRegCheckSquare className='text-xl font-bold' />
            </div>
            <h2 className="text-zinc-300 text-lg title-font font-semibold">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
           <div className=" relative h-1 w-full bg-slate-400 rounded-xl">
            <div className='absolute bg-blue-500 h-1 rounded-xl w-[60%]'></div>
            </div> 
          <p className='font-bold text-blue-500 text-right'>60%</p>
            
           </div>
        </div>
      </div>
      {/* skills */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaRegCheckSquare className='text-xl font-bold' />
            </div>
            <h2 className="text-zinc-300 text-lg title-font font-semibold">
              Javascript/Typescript
            </h2>
          </div>
          <div className="flex-grow">
           <div className=" relative h-1 w-full bg-slate-400 rounded-xl">
            <div className='absolute bg-blue-500 h-1 rounded-xl w-[60%]'></div>
            </div> 
          <p className='font-bold text-blue-500 text-right'>60%</p>
            
           </div>
        </div>
      </div>
      {/* skills */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaRegCheckSquare className='text-xl font-bold' />
            </div>
            <h2 className="text-zinc-300 text-lg title-font font-semibold">
              Next.js
            </h2>
          </div>
          <div className="flex-grow">
           <div className=" relative h-1 w-full bg-slate-400 rounded-xl">
            <div className='absolute bg-blue-500 h-1 rounded-xl w-[70%]'></div>
            </div> 
          <p className='font-bold text-blue-500 text-right'>70%</p>
            
           </div>
        </div>
      </div>
      {/* skills */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaRegCheckSquare className='text-xl font-bold' />
            </div>
            <h2 className="text-zinc-300 text-lg title-font font-semibold">
              Tailwind Css
            </h2>
          </div>
          <div className="flex-grow">
           <div className=" relative h-1 w-full bg-slate-400 rounded-xl">
            <div className='absolute bg-blue-500 h-1 rounded-xl w-[60%]'></div>
            </div> 
          <p className='font-bold text-blue-500 text-right'>70%</p>
            
           </div>
        </div>
      </div>
 {/* skills */}

 <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaRegCheckSquare className='text-xl font-bold' />
            </div>
            <h2 className="text-zinc-300 text-lg title-font font-semibold">
              Github
            </h2>
          </div>
          <div className="flex-grow">
           <div className=" relative h-1 w-full bg-slate-400 rounded-xl">
            <div className='absolute bg-blue-500 h-1 rounded-xl w-[35%]'></div>
            </div> 
          <p className='font-bold text-blue-500 text-right'>40%</p>
            
           </div>
        </div>
      </div>


            {/* skills */}
            <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaRegCheckSquare className='text-xl font-bold' />
            </div>
            <h2 className="text-zinc-300 text-lg title-font font-semibold">
              Figma
            </h2>
          </div>
          <div className="flex-grow">
           <div className=" relative h-1 w-full bg-slate-400 rounded-xl">
            <div className='absolute bg-blue-500 h-1 rounded-xl w-[55%]'></div>
            </div> 
          <p className='font-bold text-blue-500 text-right'>40%</p>
            
           </div>
        </div>
      </div>
       
    </div>
  </div>
 </section>

    </div>

    {/* Projects */}
  <div id='project' className='bg-blue-950 h-screen '>
    <h1 className='font-normal text-gray-200 flex justify-center text-sm pt-14'> Projects</h1>
    <h1 className='font-bold text-gray-200 flex justify-center text-2xl pt-7'>My Projects</h1>
    <div className='grid grid-cols-3 gap-7 pt-16'>


  <div className='rounded-2xl shadow-2xl shadow-black transform transition-transform duration-300 hover:scale-105 hover:shadow-lg '>
  <Image className='rounded-2xl' src={webclone} alt={"project web clone"} />
   <h3 className='p-5 text-lg text-gray-500 flex justify-center font-bold rounded-lg'>GIAIC Web Clone</h3>
    </div>

  <div className='rounded-2xl shadow-2xl shadow-black transform transition-transform duration-300 hover:scale-105 hover:shadow-lg '>  
  <Image className='rounded-2xl' src={figmapic} alt={"project Figma portfolio"} /> 
 <h3 className='p-5 text-lg text-gray-500 flex justify-center font-bold rounded-lg'>Figma Project</h3> 
 </div>


 {/* <div className='rounded-2xl shadow-2xl shadow-black transform transition-transform duration-300 hover:scale-105 hover:shadow-lg '>
 <Image className='rounded-2xl' src={project} alt={"E-commerce web"} /> 
  <h3 className='p-5 text-lg text-gray-500 flex justify-center font-bold rounded-lg'>Complete E-Commerce Website</h3> 
</div> */}


  <div className='rounded-2xl shadow-2xl shadow-black transform transition-transform duration-300 hover:scale-105 hover:shadow-lg '>
 <Image className='rounded-2xl' src={loginpage} alt={"Login/SignUp page"} /> 
  <h3 className='p-5 text-lg text-gray-500 flex justify-center font-bold rounded-lg'>Login Page</h3> 
  </div>
    </div>
  <h1 className=' pt-20 text-center text-2xl font-semibold text-blue-300'>If you see more projects please visit my Github Account</h1>




                           </div>


                           

<div id='contactme' className="space-y-6">
                  <h3 className="text-xl font-semibold flex justify-center text-gray-800">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-3">
                      <FaEnvelope className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-600 ">hfareed376@gmail.com</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <FaPhone className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-600">+1 (555) 123-4567</span>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4  flex items-center justify-center">Find me on</h3>
                    <div className=" space-x-4  flex items-center justify-center">
                      <a
                        href="https://github.com/hussain9491"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600  flex items-center justify-center hover:text-blue-600 transition-colors"
                      >
                        <FaGithub size={50} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/hussain-ali-7021aa2b8/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600  hover:text-blue-600 transition-colors"
                      >
                        <FaLinkedin size={50} />
                      </a>

                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600  hover:text-blue-600 transition-colors"
                      >
                        <FaInstagram size={50} />
                      </a>
                    </div>
                  </div>
                </div>


                       </div>
  )
}

export default page;
