import React from 'react'
import Avatargroup from '../images/Avatar group.png'
export default function Query() {
  return (
    <div className="my-10 py-10 px-10 bg-white grid grid-cols-1 justify-items-center rounded shadow-xl mb-20">
            <img src={Avatargroup} alt="Avatar-group"/>
            <h4 className=" text-center font-medium lg:text-xl sm:text-lg max-sm:text-lg sm:w-full max-sm:w-full">Still have questions?</h4>
            <p className="text-gray-500 text-center mb-5 lg:text-lg sm:text-base max-sm:text-base ">Can't find the answer you're looking for? Please chat to our friendly team.</p>
            <button className="mt-4 text-lg border bg-black text-white py-2 px-5 rounded-lg">Get in touch</button>
        </div>
  )
}
