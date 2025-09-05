import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import UserLayout from './component/userLayout'
import Home from './component/Home'
import Events from './component/Events'
import Contact from './component/contact'
import DetailPage from './component/DetailPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Routes>
<Route path='/' element={<UserLayout/>} >
<Route index element={<Home/>} />
<Route path='upcomingevents' element={<Events/>} />
<Route path='contact' element={<Contact/>} />
<Route path='detailpage/:id' element={<DetailPage/>} />

</Route>
</Routes>
    </>
  )
}

export default App
