'use client'
import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'
import dynamic from 'next/dynamic'

const ScrollFloat = dynamic(() => import('../components/ScrollFloat'));



function Contact() {
  const [state, handleSubmit] = useForm('mqababvp')
  const [showToast, setShowToast] = useState(false)


  if (state.succeeded && !showToast) {
    toast.success("Message sent successfully!", { duration: 3000, position: "bottom-right", richColors: true })
    setShowToast(true)
  }


  return (
    <section id='contact' className='w-full h-auto z-40 mt-16 flex flex-col items-center justify-center text-white'>
      <Toaster richColors />
      <ScrollFloat
        containerClassName='w-full h-48 !py-0 !my-0 font-black flex items-center justify-center'
        animationDuration={2}
        ease='back.inOut(2)'
        scrollStart='center bottom+=40%'
        scrollEnd='bottom bottom-=20%'
        stagger={0.03}
      >
        Contact
      </ScrollFloat>
      <form action={handleSubmit} className='w-full sm:w-1/2 h-auto p-6 sm:p-12 mt-16 bg-black-lighter/15 border border-customGray-200 backdrop-blur-sm rounded-2xl'>
        <input type="text" id='name' name='name' placeholder='Name' className='w-full h-16 bg-customGray-400 border border-customGray-200 rounded-2xl mb-8 py-2.5 px-4 outline-none ' />
        <input type="text" id='email' name='email' placeholder='Email' className='w-full h-16 bg-customGray-400 border border-customGray-200 rounded-2xl mb-8 py-2.5 px-4 outline-none ' />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea name="message" id='message' placeholder='Your message' className='w-full h-60 bg-customGray-400 resize-none border border-customGray-200 rounded-2xl py-4 px-4 outline-none'></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button onClick={() => setShowToast(false)} type='submit' disabled={state.submitting} className='rounded-xl bg-primary-500 w-full hover:bg-primary-500/80 py-4 mt-8 cursor-pointer font-extrabold text-xl'>
          {
            state.submitting ? "Sending..." : "Send"
          }
        </button>
      </form>
    </section>
  )
}

export default Contact