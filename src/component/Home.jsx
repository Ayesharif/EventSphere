import React, { useEffect, useState } from 'react'
import { events } from '../../data'
import { data, useNavigate } from 'react-router-dom'

export default function Home() {

    const [fixedbar, setfixedbar] = useState(false);
    useEffect(() => {
        const handlebar = () => {
            if (window.scrollY > 400) {
                setfixedbar(true);
            }
            else {
                setfixedbar(false);
            }
        }
        window.addEventListener("scroll", handlebar);

        // cleanup
        return () => {
            window.removeEventListener("scroll", handlebar);
        };
    }, []);

const  navigate = useNavigate();
   const upcoming = [...events]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);
  return (
    <div>

    <div className="w-full relative h-[500px] animate-pulse">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover"
        src="https://www.arch2o.com/wp-content/uploads/2021/06/Arch2O-top-30-tallest-building-in-the-world-in-2021-94-e1622639571364.jpg"
        alt="Hero Banner"
        />

      {/* Overlay (dark layer for readability) */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <p className="lg:text-5xl md:text-4xl text-2xl font-bold">
          Discover Upcoming Events Near You
        </p>
        <p className="mt-4 text-base md:text-lg max-w-2xl">
          Stay inspired with conferences, meetups, and workshops designed for growth
        </p>

        {/* Call to Action */}
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white font-medium shadow-md">
          Explore Events
        </button>
      </div>
    </div>

    <div className={`w-[100%] flex flex-row items-center justify-center py-5 bg-white 
     transition-all duration-500 
    ${fixedbar==true ? "fixed top-[70px] shadow-lg":""}  
      `}>
<input type="search" placeholder='Search All Events' className='sm:w-[50%] w-[80%] focus:outline-0 border rounded-l-lg p-2' />
<button className='border rounded-r-lg p-2'><i className='fa-solid fa-search'></i></button>

    </div>

    <div className='flex flex-col items-center'>
      <p className='text-center py-10 sm:text-2xl text-xl font-medium'>Explore Upcoming Events</p>

        <div className='md:w-[80%] sm:w-[90%] w-[80%] grid lg:grid-cols-3 sm:grid-cols-2 items-start  place-items-center gap-5 py-10'>
              {upcoming.map((item, j) =>  (
                <div
                  key={j}
                  className='flex sm:flex-col flex-row   border-1 border-gray-400 rounded-lg bg-white shadow hover:shadow-lg hover:p-0  p-2 transition'
                >
                  <img
                    onClick={() => navigate(`/detailpage/${item.id}`)}
                    src={item.images[0]}
                    alt={item.name}
                    className='sm:w-full w-[40%]  sm:h-70 object-cover rounded cursor-pointer'
                  />
                  <div className='flex flex-col gap-3 py-2'>
      
                    <p className='px-2 mt-2 text-2xl font-medium text-gray-800 '>{item.name}</p>
                    <p className='px-2 text-md'>📍 {item.venue} </p>
                    <p className='px-2 text-md'>📅 {item.date} | ⏰ {item.time}</p>
                    <p className='px-2 text-lg text-gray-600'>{item.description}</p>
                  <div className='flex flex-col  items-center'>
<button className='border w-[50%] rounded-3xl py-2 hover:bg-blue-100'
            onClick={()=> navigate(`/detailpage/${item.id}`)}
            >Learn more</button>
                  </div>
                  </div>
                </div>
              ))
              }
            </div>
    </div>
        </div>
  )
}
