import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Contact from './pages/Contact.jsx'
import Amenities from './pages/Amenities.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='' element={<App/>}>
      <Route path='' element={<Home/>} />
      <Route path='services' element={<Services/>} />
      <Route path='aboutus' element={<AboutUs/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='amenities' element={<Amenities/>} />
    </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
