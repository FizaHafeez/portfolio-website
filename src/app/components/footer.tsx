import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { AiOutlineLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-blue-50">
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image 
      src={require("../../../public/assets/my-logo.png")} 
      alt="fiza hafeez" 
      width={100} 
      height={100}
      className='w-[120px]'
      />
      <span className="ml-3 text-xl">FIZA HAFEEZ</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
       2024 FIZA HAFEEZ 
      </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
      target="_blank" 
      href={"https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAEvDy_AB_98M3pivv0UhI15BqXEUkHcF4P0&keywords=fiza%20hafeez&origin=RICH_QUERY_SUGGESTION&position=0&searchId=e96eb7ae-40b1-416a-a6b2-b7aefc57f5ff&sid=uiw&spellCorrectionEnabled=false"} 
      className="text-gray-500"
      >
      <AiOutlineLinkedin className="text-4xl hover:text-[#0056b3]"/>
      </Link>
     
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
