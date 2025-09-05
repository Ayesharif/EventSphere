import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    const [showbar, setshowbar] = useState(false);
    const [userAvail, setuserAvail] = useState(false);
    const [fixedbar, setfixedbar] = useState(false);
    useEffect(() => {
        const handelbar = () => {
            if (window.scrollY > 50) {
                setfixedbar(true);
            }
            else {
                setfixedbar(false);
            }
        }
        window.addEventListener("scroll", handelbar);

        // cleanup
        return () => {
            window.removeEventListener("scroll", handelbar);
        };
    }, []);


    return (

        <div className={`flex  flex-row w-full items-center bg-blue-50 text-black justify-between md:justify-around transition-all duration-200 ease-in z-10 
            
            ${fixedbar== true ?"fixed h-[70px]":" static h-[90px]"}
            
        `}>
            <div className='md:w-[25%] flex items-center justify-center'>
                <Link className='flex items-center flex-col px-5' to={'/'}>
                    <p className='text-2xl font-extrabold'>EventSphere</p>
                </Link>
            </div>
            <button type='button' className='md:hidden px-5'
                onClick={() => { setshowbar(!showbar) }}
            > <i className='fa-solid fa-bars text-2xl text-black'></i> </button>
            <div 
            onMouseLeave={()=>{setshowbar(false)}}
            className={` md:w-[50%] w-full flex flex-col md:flex-row md:items-center justify-end md:static absolute top-20  transition-all duration-300 ease-in-out overflow-hidden 
                transform md:bg-transparent bg-white  text-black gap-2 md:py-0 py-4
                     ${showbar ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4 md:max-h-none md:opacity-100 md:translate-y-0"}
                     z-2
                     gap-5 pr-5
                `}>
                <Link  onClick={()=>{setshowbar(false)}} className='md:px-0 px-6 font-medium hover:bg-blue-950 hover:text-white md:hover:text-blue-900 md:hover:bg-transparent' to={'/'}      >
                Home
                 </Link>

                <Link  onClick={()=>{setshowbar(false)}} className='md:px-0 px-6 font-medium hover:bg-blue-950 hover:text-white md:hover:text-blue-900 md:hover:bg-transparent' to={'/upcomingevents'} >Upcoming Event</Link>
                
                <Link  onClick={()=>{setshowbar(false)}} className='md:px-0 px-6 font-medium hover:bg-blue-950 hover:text-white md:hover:text-blue-900 md:hover:bg-transparent' to={'/contact'}    > Contact </Link>
          
            </div>
        </div>

    )
}
