import React from 'react'
import Contact_Main from '../components/Contact/Contact_Main'
import Contact_details from '../components/Contact/Contact_details'
import Contact_Message from '../components/Contact/Contact_Message'

const Contact = () => {
  return (
    <div className='bg-zinc-100 ' >
        <Contact_Main/>
        <Contact_details/>
        <Contact_Message/>
    </div>
  )
}

export default Contact
