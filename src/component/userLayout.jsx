import React from 'react'
import NavBar from './NavBar'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

export default function UserLayout() {
  return (
    <div>
        <NavBar/>


        <Outlet/>

        <Footer/>
      
    </div>
  )
}
