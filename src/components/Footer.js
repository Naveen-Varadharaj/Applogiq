import React from 'react'
import Logo from "../images/Logo.png"
export default function Footer() {
  return (
    <div className='my-10'>
        
        <div className="px-4 mx-2 ">
            <img src={Logo} alt="logo" className="mb-2" />
            <p className="text-gray-500 mt-2 lg:text-xl sm:text-lg max-sm:text-lg">"Intorducing the <span className="text-blue-600">UPMONEY</span> app, the ultimate tool for managing your credit card on-the-go. With our app, 
                you can view your accountinformation, make payment,redeem rewards, and more, all from your smartphone or tablets."
            </p>
        </div>
        <div className=" text-gray-500  my-10 px-2 lg:grid lg:grid-cols-4 lg:mx-4 sm:grid sm:grid-cols-1 sm:gap-y-5 sm:mx-4  max-sm:grid max-sm:grid-cols-1 max-sm:gap-y-5 max-sm:mx-4  ">
            <div className='flex gap-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <p>Tel<br /><p className='font-medium font-sans'>310-473-2766</p></p>
            </div>
            <div className='flex gap-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <p>Mail<br /><p className='font-medium font-sans'>unreal@outlook.com</p></p>
            </div>
            <div className='flex gap-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <p>Address<br /><p className='font-medium font-sans'>706 Campfire Ave. Meriden, CT 06450</p></p>
            </div>
            <div className='flex gap-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
            </svg>

            <p>Fax<br /><p className='font-medium font-sans'>+1-000-0000</p></p>
            </div>
            
        </div>
        <div className=" text-gray-500 my-10 px-2 lg:grid lg:grid-cols-6 lg:mx-4 lg:justify-items-start  sm:grid sm:grid-cols-2 sm:justify-items-center sm:gap-y-5 sm:mx-4  max-sm:grid max-sm:grid-cols-2 max-sm:justify-items-center max-sm:gap-y-5 max-sm:mx-4 ">
            <span>
                <ul >
                    <h4 className="text-black text-lg font-bold">About</h4>
                    <li >About Us</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Jobs</li>
                    <li>In Press</li>
                </ul>
            </span>
            <span>
                <ul >
                    <h4 className="text-black text-lg font-bold">Support</h4>
                    <li>Contact Us</li>
                    <li>Online Chat</li>
                    <li>Whatsapp</li>
                    <li>Telegram</li>
                    <li>Ticketing</li>
                </ul>
            </span>
            <span>
                <ul >
                    <h4 className=" text-black text-lg font-bold">FAQ</h4>
                    <li>Account</li>
                    <li>Deliveries</li>
                    <li>Orders</li>
                    <li>Payments</li>
                    <li>Returns</li>
                </ul>
            </span>
            <span>
                <ul >
                    <h4 className="text-black text-lg font-bold">About</h4>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Jobs</li>
                    <li>In Press</li>
                </ul>
            </span>
            <span>
                <ul>
                    <h4 className="text-black text-lg font-bold">Support</h4>
                    <li>Contact Us</li>
                    <li>Online Chat</li>
                    <li>Whatsapp</li>
                    <li>Telegram</li>
                    <li>Ticketing</li>
                </ul>
            </span>
            <span>
                <ul >
                    <h4 className="text-black text-lg font-bold">FAQ</h4>
                    <li>Account</li>
                    <li>Deliveries</li>
                    <li>Orders</li>
                    <li>Payments</li>
                    <li>Returns</li>
                </ul>
            </span>
        </div>
        <hr className="h-0.5 my-8 bg-gray-300 border-0 w-full mx-1 rounded-lg" />
        <div className="py-5 px-2 mx-4">
            <ul className="text-lg font-medium text-gray-500 lg:flex lg:gap-x-6  sm:grid sm:grid-cols-3 sm:gap-4 max-sm:grid max-sm:grid-cols-2 max-sm:gap-2 ">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Sitemap</li>
                <li>Terms of Use</li>
            </ul>
        </div>
    </div>
  )
}
