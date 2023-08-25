import React from 'react'
import Image4 from "../images/Image-4.jpg"
export default function About() {
  return (
    <>
    <div className="my-5 grid justify-items-center gap-y-1">
    <h1 className="font-bold mx-auto mb-5 sm:text-xl sm:text-center sm:w-full max-sm:text-xl max-sm:text-center max-sm:w-full lg:w-2/4 lg:text-3xl lg:font-bold lg:text-center ">With <span className="text-blue-400">UPMONEY</span> app, you'll never miss a beat when it comes to managing your credit card</h1>
     <img  src={Image4} alt="pic-4"  className="mt-2 lg:w-2/4 sm:w-3/5 rounded-xl"/>
   </div>
   </>
  )
}
