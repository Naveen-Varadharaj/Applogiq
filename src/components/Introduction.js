import React from 'react'
import Image1 from "../images/Image1.jpg"
import Image2 from "../images/Image-2.jpg"
import Image3 from "../images/Image-3.jpg"
export default function Introduction() {
  return (
    <>
        <div className="md:grid md:grid-cols-1 gap-y-1 lg:grid lg:grid-cols-2">
        <div className=" text-justify lg:w-4/5 sm:w-full max-sm:w-full lg:my-auto sm:my-3 max-sm:my-3">
            <h1 className="font-bold lg:text-3xl sm:text-2xl sm:text-justify max-sm:text-xl max-sm:text-justify ">Empower Your Purchasing Power with Our Credit Cards</h1>
            <p className=" text-gray-500 text-justify my-2 lg:w-3/4 sm:w-full max-sm:w-full lg:text-lg sm:text-base max-sm:text-base">
                With wide range of credit cards to choose from, you're sure to find 
                the one that fits your lifestyle. Form travel rewards to cash back, there's is something for everyone.
            </p>
            <br />
            <div className="lg:flex lg:border border-black  py-2 px-1 rounded-lg justify-between lg:w-full sm:w-1/2 max-sm:w-1/2">
            <input placeholder="Enter Email address" className=" py-1 px-2 mb-2 lg:w-2/3 lg:border-none max-sm:border max-sm:border-black max-sm:rounded-lg max-sm:w-full sm:border sm:border-black sm:rounded-lg" />
            <button className="bg-black text-white py-1 px-2 rounded-lg max-sm:w-full ">Get Free Card</button>
            </div>
            <br />
            <div className="my-3  w-4/5 sm:grid sm:grid-cols-2 sm:gap-y-5 max-sm:grid max-sm:grid-cols-1 max-sm:gap-y-5    lg:grid lg:grid-cols-3 ">
                <span className="flex lg:gap-x-2 max-md:gap-4"><p className="text-2xl font-medium">5000</p><p className="text-xs">Cards<br />Delivered</p></span>
                <span className="flex lg:gap-x-2 max-md:gap-4"><p className="text-2xl font-medium">$1M+</p><p className="text-xs">Transaction<br />Completed</p></span>
                <span className="flex lg:gap-x-2 max-md:gap-4"><p className="text-2xl font-medium">230+</p><p className="text-xs">Happy<br />Customers</p></span>
            </div>
        </div>
        <div className="my-auto w-4/5">
            <img  src={Image1} alt="pic-1" />
        </div>
        

        <div className="lg:my-auto  text-justify lg:w-4/5 sm:w-full max-sm:w-full sm:my-3 max-sm:my-3">
            <p className=" text-justify my-2 font-medium lg:text-xl sm:text-lg max-sm:text-lg text-transparent inline-block bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 ">Improve your worklife</p>
            <h1 className=" font-bold my-2 lg:text-3xl sm:text-2xl sm:text-justify max-sm:text-xl max-sm:text-justify">Track all your payments in one place</h1>
            <p className="text-gray-500 text-justify mb-5 my-2 lg:text-lg sm:text-base max-sm:text-base ">Our app provides you real-time access to your account information, so you can stay on top of your spending and keep track of your rewards.</p>
        </div>
        <div>
        <img  src={Image2} alt="pic-2" />
        </div>
        <div>
        <img  src={Image3} alt="pic-3" />
        </div>
        <div className="text-justify  lg:my-auto sm:w-full max-sm:w-full sm:mb-3 max-sm:mb-3">
            <p className="my-2 text-justify font-medium lg:text-xl sm:text-lg max-sm:text-lg text-transparent inline-block bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 ">Improve your worklife</p>
            <h1 className="font-bold my-2 lg:text-3xl sm:w-full max-sm:w-full sm:text-2xl sm:text-justify max-sm:text-xl max-sm:text-justify">Redeeming rewards has never been easier</h1>
            <div className="mt-2 mb-6 ">                        
                <p className="text-gray-500 text-justify lg:text-lg  lg:w-4/5 sm:w-full max-sm:w-full sm:text-base max-sm:text-base sm:mb-2 max-sm:mb-4 ">You can also receive alerts and notifications</p>
                <p className="text-gray-500 text-justify lg:text-lg  lg:w-4/5 sm:w-full max-sm:w-full sm:text-base max-sm:text-base sm:mt-2 max-sm:mt-4"> Robust security features, multi-factor authentication and secure data storage</p>
                
            </div>
        </div>
        </div>     
    </>
  )
}
