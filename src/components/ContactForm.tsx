'use client'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendEmail } from '@/services/sendEmail'
import EmailSent from './EmailSent'

const schema = z.object({
  name: z.string().min(2, 'Digite um nome válido!'),
  email: z.string().email('Digite um e-mail válido!'),
  message: z.string(),
})

type FormProps = z.infer<typeof schema>

const ContactForm = () => {
  const { handleSubmit, register, control, reset } = useForm<FormProps>({
    resolver: zodResolver(schema),
    reValidateMode: 'onSubmit'
  })
  const [showNotification, setShowNotification] = useState<boolean>(false)

  const handleForm = (data: FormProps) => {
    const { name, email, message } = data

    const emailContent = {
      from_name: name,
      message,
      email
    }

    try {
      sendEmail(emailContent)
      reset()
      setShowNotification(true)

      setTimeout(() => {
        setShowNotification(false)
      }, 4200)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div className='z-10 self-center text-md h-full w-full bg-white/10 flex flex-col px-16 pb-10'>
      <div className='text-white self-center font-bold pt-10'>
        <span>{"Let's"}</span>
        <span className='text-purple-500 ml-1'>talk</span>
        <span>?</span>
      </div>
      <div className='text-white flex gap-2 font-bold self-center text-3xl py-4'>
        <span>Send me an</span>
        <span className='text-purple-500'>e-mail</span>
      </div>
      <form onSubmit={handleSubmit(handleForm)} className='flex flex-col gap-4 w-full md:w-[70%] lg:w-[52%] self-center'>
        <Controller
          name='name'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <div className='relative font-bold w-full'>
              <input {...register('name')} id='name' type='text' className='h-14 w-full px-3 rounded-lg box-border border-2 border-gray-800 focus:outline-none bg-white/50 focus:border-purple-500 transition-colors peer' autoComplete='off' required />
              <label htmlFor="name" className={`${field.value.trim() ? 'hidden' : ''} absolute text-sm font-semibold text-gray-800 left-3 top-4 cursor-text peer-focus:text-xs peer-focus:top-1 peer-focus:text-gray-600 transition-all`}>Name</label>
            </div>
          )}
        />

        <Controller
          name='email'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <div className='relative'>
              <input {...register('email')} id='email' type='email' className='h-14 w-full px-3 rounded-lg box-border border-2 border-gray-800 focus:outline-none bg-white/50 focus:border-purple-500 transition-colors peer' autoComplete='off' required />
              <label htmlFor="email" className={`${field.value.trim() ? 'hidden' : ''} absolute text-sm font-semibold text-gray-800 left-3 top-4 cursor-text peer-focus:text-xs peer-focus:top-1 peer-focus:text-gray-600 transition-all`}>E-mail</label>
            </div>
          )}
        />

        <Controller
          name='message'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <div className='relative'>
              <textarea {...register('message')} id='message' className='h-40 py-4 w-full px-3 rounded-lg box-border border-2 border-gray-800 focus:outline-none bg-white/50 focus:border-purple-500 transition-colors peer' autoComplete='off' required />
              <label htmlFor="message" className={`${field.value.trim() ? 'text-xs text-gray-400 top-1' : ''} absolute text-8m font-semibold text-gray-800 left-3 top-4 cursor-text peer-focus:text-xs peer-focus:top-1 peer-focus:text-gray-600 transition-all`}>Write your message</label>
            </div>
          )}
        />
        <button type='submit' className='px-6 py-2 w-fit self-center bg-purple-500 hover:bg-purple-700 transition-colors text-white font-bold rounded-2xl'>Submit</button>
      </form>
      {showNotification && <EmailSent />}
    </div>
  )
}

export default ContactForm