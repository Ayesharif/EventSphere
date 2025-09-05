import React, { useState } from 'react'
import { events } from '../../data'
import { Link, useNavigate } from 'react-router-dom'

export default function Events() {
  const navigate = useNavigate();
  const [dropdown, setDropDown] = useState(false);
 const [gridview, setgridview] = useState(false);
  return (
    <div className='flex flex-col items-center'>
      <div className='w-full h-[50px] flex justify-start items-center shadow-lg'>
    <div className=' w-full relative  px-2 rounded cursor-pointer '
onClick={()=>setDropDown(!dropdown)}
>
  <p className='text-black py-2 text-center transform transition ease-in-out delay-500 duration-500 w-[200px]'>

All Categories <i className={`fa-solid ${ dropdown==true?"fa-angle-down":"fa-angle-up"}`}></i>
  </p>
  <div className={`w-full flex flex-col items-center  bg-blue-50 right-0  absolute  z-5 
    ${dropdown ==true?"visible":"hidden"}
    `}>
      { events.map((category, key)=>(
        <Link key={key} className='hover:bg-blue-100 py-1 px-10  w-full '> {category.category}</Link>
      ))
}
      </div>
  </div>


</div>


      <div className='w-[80%] grid sm:grid-cols-2 items-start  place-items-center gap-5 py-20 '>
        {events.map((item, j) => (
          <div
            key={j}
            className='flex sm:flex-col flex-row lg:w-[80%]    border-1 border-gray-300 rounded-lg bg-white shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] mb-10 hover:p-0  p-2 transition'
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
  )
}
