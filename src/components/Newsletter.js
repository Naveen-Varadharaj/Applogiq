import React from 'react'

export default function Newsletter() {
  return (
    <div class=" my-10 bg-black text-white py-3 px-2 rounded-lg">
    <span className=" px-3 py-2 lg:flex lg:justify-between sm:grid sm:grid-cols-1 sm:gap-y-5 max-sm:grid max-sm:grid-cols-1 max-sm:gap-y-5">
     <span className="lg:flex-col lg:justify-start max-sm:ml-5 sm:ml-5 pl-1">
        <h4 className="text-lg font-medium" >Newsletter</h4>
        <p className="text-base font-regular">Be the first one to know about discounts, offers and events</p>
    </span>
    <span className="px-5 py-2 lg:flex lg:justify-start lg:bg-zinc-700 lg:rounded-xl lg:w-1/3 sm:grid sm:grid-cols-1  max-sm:grid max-sm:grid-cols-1  ">
    <input type="email" placeholder="Enter your email" className=" text-md font-medium px-3 lg:bg-inherit lg:rounded-lg lg:w-2/3 max-sm:bg-zinc-700  max-sm:rounded-lg max-sm:py-2 sm:bg-zinc-700 sm:py-2 sm:rounded-lg"/>
    <input className=" px-3 py-1 lg:w-1/3 lg:text-black lg:bg-white lg:rounded-lg lg:ml-auto max-sm:bg-white max-sm:rounded-lg max-sm:text-black max-sm:my-2 sm:bg-white sm:rounded-lg sm:text-black sm:my-2" type="submit" value="Submit"/>
</span>

    </span>
</div>
  )
}
