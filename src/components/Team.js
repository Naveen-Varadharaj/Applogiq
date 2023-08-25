import React from 'react'
import Avatar1 from "../images/Avatar-1.jpg"
import Avatar2 from "../images/Avatar-2.png"
import Avatar3 from "../images/Avatar-3.png"
import Avatar4 from "../images/Avatar-4.png"
import Avatar5 from "../images/Avatar-5.png"
import Avatar6 from "../images/Avatar-6.png"
import Avatar7 from "../images/Avatar-7.png"
import Avatar8 from "../images/Avatar-8.png"

export default function Team() {
  return (
    <>
    <div className="text-center lg:my-20 sm:my-15">
            <p className="text-pink-500 font-medium lg:text-xl sm:text-lg max-sm:text-base">We're hiring!</p>
            <h2 className=" my-5 font-bold lg:text-3xl sm:text-2xl max-sm:text-2xl">Meet our team</h2>
            <p className="text-gray-500 text-center mb-10 mx-auto lg:w-1/2 lg:text-xl sm:text-lg max-sm:text-lg sm:w-5/6 max-sm:w-5/6  ">Our philosophy is simple - hire a team of diverse, passionate peopleand foster a culture that empowers you to do you best work. </p>
        </div>
        <div className="my-10 mb-20 lg:grid lg:grid-cols-4 lg:justify-items-center  max-sm:grid max-sm:grid-cols-2 max-sm:justify-items-center  sm:grid sm:grid-cols-2 sm:justify-items-center">
            <div className=" grid justify-items-center mx-auto my-2 lg:w-2/4 sm:w-5/6 max-sm:w-full sm:ml-20 max-sm:ml-18 ">
                <img src={Avatar1} alt="Avatar-1"/>
                <p className="font-medium text-center lg:text-lg sm:text-base max-sm:text-base">Olivia Rhye</p>
                <p className="text-center font-medium text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 lg:text-lg sm:text-base max-sm:text-base">Founder & CEO</p>
            </div>
            <div className=" grid justify-items-center mx-auto my-2 lg:w-2/4 sm:w-5/6 max-sm:w-full sm:ml-20 max-sm:ml-18">
                <img src={Avatar2} alt="Avatar-2" />
                <p className="font-medium text-center lg:text-lg sm:text-base max-sm:text-base">Phoenix Baker</p>
                <p className="text-center font-medium text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 lg:text-lg sm:text-base max-sm:text-base">Engineering Manager</p>
            </div>
            <div className="grid justify-items-center mx-auto my-2 lg:w-2/4 sm:w-5/6 max-sm:w-full sm:ml-20 max-sm:ml-18">
                <img src={Avatar3} alt="Avatar-3"/>
                <p className="font-medium text-center lg:text-lg sm:text-base max-sm:text-base">Lana Steiner</p>
                <p className="text-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 lg:text-lg sm:text-base max-sm:text-base">Product Manager</p>
            </div>
            <div className="grid justify-items-center mx-auto my-2 lg:w-2/4 sm:w-5/6 max-sm:w-full sm:ml-20 max-sm:ml-18">
                <img src={Avatar4} alt="Avatar-4" />
                <p className="font-medium text-center lg:text-lg sm:text-base max-sm:text-base">Demi Wilkinson</p>
                <p className="text-center font-medium text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 lg:text-lg sm:text-base max-sm:text-base">Frontend Developer</p>
            </div>
            <div className=" grid justify-items-center mx-auto my-2 lg:w-2/4 sm:w-5/6 max-sm:w-full sm:ml-20 max-sm:ml-18">
                <img src={Avatar5} alt="Avatar-5" />
                <p className="font-medium text-center lg:text-lg sm:text-base max-sm:text-base">Candice Wu</p>
                <p className="text-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 lg:text-lg sm:text-base max-sm:text-base">Backend Developer</p>
            </div>
            <div className="grid justify-items-center mx-auto my-2 lg:w-2/4 sm:w-5/6 max-sm:w-full sm:ml-20 max-sm:ml-18">
                <img src={Avatar6} alt="Avatar-6"/>
                <p className="font-medium text-center lg:text-lg sm:text-base max-sm:text-base">Natali Craig</p> 
                <p className="text-center font-medium text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 lg:text-lg sm:text-base max-sm:text-base">Product Designer</p>
            </div>
            <div className="grid justify-items-center mx-auto my-2 lg:w-2/4 sm:w-5/6 max-sm:w-full sm:ml-20 max-sm:ml-18">
                <img src={Avatar7} alt="Avatar-7"/>
                <p className="font-medium text-center lg:text-lg sm:text-base max-sm:text-base">Drew Cano</p>
                <p className="text-center font-medium text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 lg:text-lg sm:text-base max-sm:text-base">UX Researcher</p>
            </div>
            <div className=" grid justify-items-center mx-auto my-2 lg:w-2/4 sm:w-5/6 max-sm:w-full sm:ml-20 max-sm:ml-18">
                <img src={Avatar8} alt="Avatar-8"/>
                <p className="font-medium text-center lg:text-lg sm:text-base max-sm:text-base">Orlando Diggs</p>
                <p className="text-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 lg:text-lg sm:text-base max-sm:text-base">Customer Success</p>
            </div>
        </div></>
  )
}
