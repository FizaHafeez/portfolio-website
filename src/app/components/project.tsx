import Image from 'next/image'
import React from 'react'

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
       My Projects
      </h1>
    
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
      {/*Project*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/3_picture.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Currency Coverter
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Currency Coverter
            </h1>
            <p className="leading-relaxed line-clamp-2">
             A tool that helps users convert amounts between two currencies using predefined rates or data from an API.
            </p>
          </div>
        </div>
      </div>
      
     {/*Project*/}
     <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/dynamic_resume.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Resume
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Dynamic Resume 
            </h1>
            <p className="leading-relaxed line-clamp-2">
             A customizable resume builder where users can add or edit sections to create a personalized resume.
            </p>
          </div>
        </div>
      </div>

      {/*Project*/}
     <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/1_picture.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
             Timer           
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Countdown Timer 
            </h1>
            <p className="leading-relaxed line-clamp-2">
            A simple timer that allows users to set a countdown, with options to start, pause, and reset the timer as needed.
            </p>
          </div>
        </div>
      </div>
      {/*Project*/}
     <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/editable_resume.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
             Resume           
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Editable Resume 
            </h1>
            <p className="leading-relaxed line-clamp-2">
            An advanced resume builder offering real-time editing and formatting options for creating a professional, polished resume.
            </p>
          </div>
        </div>
      </div>
      {/*Project*/}
     <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/2_picture.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
             Calculator           
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Simple Calculator 
            </h1>
            <p className="leading-relaxed line-clamp-2">
            A basic calculator supporting essential operations like addition, subtraction, multiplication, and division.
            </p>
          </div>
        </div>
      </div>
      {/*Project*/}
     <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/resume.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
             Resume           
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Static Resume 
            </h1>
            <p className="leading-relaxed line-clamp-2">
            A resume generator with a fixed format, allowing users to create a basic resume without customization options.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
