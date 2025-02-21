import React, { useState } from 'react'
import Contact_Mes_Inp from './Contact_Mes_Inp';
import Contact_Mes_Title from './Contact_Mes_Title';

const Contact_Message = () => {

  const [firstname, setfirstname] =useState('');
  const [lastname, setlastname] =useState('');
  const [email, setemail] =useState('');
  const [subject, setsubject] =useState('');
  const [message, setmessage] =useState('');

  return (
    <div className=' flex justify-center min-h-screen'>
      <div className='flex flex-col w-[40%] justify-center'>

        <h1 className='text-5xl font-raleway font-semibold'>Send a Message</h1>

        <p className='text-zinc-900 font-raleway my-4 pr-10'>Comfortably progressing, the individual moves with ease, balancing focus on well-being, adjusting to aging gracefully, and nurturing growth.</p>

        <div className='my-3'>
          <Contact_Mes_Title title="Name" />
          <div className='flex flex-row w-full justify-between'>
            <div className='flex flex-col w-[49%]'>
              <Contact_Mes_Inp value={firstname} setvalue={setfirstname} />
              <p className=' text-sm text-zinc-600 py-2'>First</p>
            </div>
            <div className='flex flex-col w-[49%]'>
            <Contact_Mes_Inp value={lastname} setvalue={setlastname} />
            <p className=' text-sm text-zinc-600 py-2'>Last</p>
            </div>
          </div>
        </div>

        <div className='my-3'>
        <Contact_Mes_Title title="Email" />
          <Contact_Mes_Inp value={email} setvalue={setemail} />
        </div>

        <div className='my-3'>
        <Contact_Mes_Title title="Subject" />
          <Contact_Mes_Inp value={subject} setvalue={setsubject} />
        </div>

        <div className='my-3'>
        <Contact_Mes_Title title="Message" />
          <Contact_Mes_Inp value={message} setvalue={setmessage} type="textarea" />
        </div>

        <div className='my-3'>
          <button className='text-blue-700 border-[1px] border-blue-700 text-lg font-raleway px-5 py-2 rounded-lg hover:bg-blue-700 hover:text-white'>Send Message</button>
        </div>

        
      </div>
    </div>
  )
}

export default Contact_Message
