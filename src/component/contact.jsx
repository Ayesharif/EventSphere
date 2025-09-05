import React from 'react'
import { Link } from 'react-router'

export default function Contact() {
  return (
    <div className='w-[100%] flex flex-col items-center '>


      <section className="w-[100%] flex flex-col-reverse md:flex-row md:items-start items-center justify-around gap-10 md:gap-0 p-5 pt-20 ">

        <div className="contact-div md:w-[40%] w-[90%] flex flex-col gap-5">

          <div className="flex items-center w-[100%] gap-5 py-2 border-1 border-gray-300 hover:border-white rounded hover:shadow-2xl  hover:bg-blue-100   cursor-pointer">
            <div className=" px-5">
              <i className="fa-solid fa-phone text-2xl"></i>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className='text-lg font-bold'>Call Me</h2>
              <Link to={'tel:+923353952759'}>
              +923353952759
              </Link>

            </div>
          </div>

          <div className="flex items-center w-[100%] gap-5 py-2 border-1 border-gray-300 hover:border-white rounded hover:shadow-2xl  hover:bg-blue-100   cursor-pointer">
            <div className="px-5">
              <i className="fa-solid fa-envelope text-2xl"></i>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className='text-lg font-bold'>Mail Me</h2>
              <Link to={"mailto:ayeshrf@gmail.com"}>
            ayeshrf@gmail.com
              </Link>

            </div>
          </div>

          <div className="flex items-center w-[100%] gap-5 py-2 border-1 border-gray-300 hover:border-white rounded hover:shadow-2xl  hover:bg-blue-100   cursor-pointer">
            <div className="px-5">
              <i className="fa-solid fa-location-dot text-2xl"></i>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className='text-lg font-bold'>Location</h2>
              <Link>Hyderabad, Sindh</Link>
            </div>
          </div>

        </div>

        <form autoComplete="off" className='md:w-[40%] w-[90%]  p-5 border-1 border-gray-300 hover:border-blue-100  rounded shadow-lg'>
          <p className="text-2xl text-center font-bold">Send Me Message</p>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Name</label>
            <input type="text" className='outline-1  p-2 rounded focus:outline-black' placeholder="Your Name" required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Email</label>
            <input type="text" className='outline-1  p-2 rounded focus:outline-black' placeholder="Your Email" required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Message</label>
            <textarea className='outline-1  p-2 rounded focus:outline-black' rows="5" placeholder="Enter Your Query ...." required></textarea>
          </div>
          <div className='flex items-center w-[100%] flex-col py-5'>
            <button type="submit" className='border-1 w-[100%] rounded hover:bg-blue-100    py-1 cursor-pointer '>Submit</button>
          </div>
        </form>
      </section>

    </div>
  )
}
