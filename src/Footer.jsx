import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
<div className='flex items-center justify-center  bg-blue-50 text-black py-5 gap-10 flex-wrap '>
     

        <Link className="flex items-center " to={'/'}>
<p className='text-xl font-medium'>EventSphere</p>
          
        </Link>
        © 2025
      </div>
    
  )
}
