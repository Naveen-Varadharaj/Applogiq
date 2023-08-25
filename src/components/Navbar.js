import React from 'react'
import Logo from "../images/Logo.png"
import { useState } from 'react';
export default function Navbar() {
  const [result, setResult]=useState(false)
  
  return (
    <div className='flex mx-2'>
    <span className="mr-1/3">
    <img src={Logo} alt="Logo" />
     </span>
     <span className="mx-auto hidden lg:block">
        <ul className="flex gap-x-6 text-xl">
            <li>Solutions</li>
            <li>Industries</li>
            <li>Fees</li>
            <li>About</li>
        </ul>
     </span>
     <span className=" hidden lg:block ">
        <p className="px-1py-2 mr-5 text-xl">Sign in 
        <button class="bg-black text-white py-2 px-2 mx-1 rounded-lg ">Create free account</button></p>
     </span>
     <span className="ml-auto lg:hidden grid grid-cols-1 justify-items-end">
       <button onClick={()=>setResult(!result)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg> </button>
          <div className= { result ? "block": "hidden"}>
         
          <ul className="grid justify-items-end gap-y-2  py-2 px-2">
            <li className="bg-gray-700 text-white rounded-lg w-full  py-1 px-2">Solutions</li>
            <li className="bg-gray-700 text-white rounded-lg w-full py-1 px-2">Industries</li>
            <li className="bg-gray-700 text-white rounded-lg w-full py-1 px-2">Fees</li>
            <li className="bg-gray-700 text-white rounded-lg w-full py-1 px-2">About</li>    
        </ul>
       

     </div>
  
     </span>
     
    </div>
  )
}
