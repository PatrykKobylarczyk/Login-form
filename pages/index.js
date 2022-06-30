import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

//Icons 
import { FaFacebookF, FaLinkedinIn, FaGoogle } from 'react-icons/fa'
import { MdOutlineMailOutline, MdLockOutline } from 'react-icons/md'

export default function Home() {
  return (

    <div className='w-full h-screen grid place-items-center bg-slate-100'>
      <Head>
        <title>Log in form</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='bg-white flex rounded-2xl shadow-2xl w-2/3 max-w-4xl text-center'>
        <section className='w-3/5 p-5 flex flex-col '>
          <div className='text-left text-gray-900 font-bold text-lg ml-2'>
            <span className='font-bold text-main'>Company</span>name
          </div>
          <div className="pt-8 ">
            <h2 className='text-3xl font-bold text-main mb-3'>Sing in to Account</h2>
            <div className="border-2 w-10 border-main inline-block mb-2"></div>
          </div>
          {/* Social icons section  */}
          <div className="flex my-2 justify-center">
            <a className='transition ease-in-out duration-300 hover:scale-105 border-2 border-gray-200 p-4 rounded-full mx-1' href="#"><FaFacebookF className='text-xs text-gray-500' /></a>
            <a className='transition ease-in-out duration-300 hover:scale-105 border-2 border-gray-200 p-4 rounded-full mx-1' href="#"><FaLinkedinIn className='text-sm text-gray-500' /></a>
            <a className='transition ease-in-out duration-300 hover:scale-105 border-2 border-gray-200 p-4 rounded-full mx-1' href="#"><FaGoogle className='text-xs text-gray-500' /></a>
          </div>
          <p className='text-gray-300 font-semibold mb-3'>or use an email account</p>
          <form action="" className='flex flex-col items-center' >
            <div className="bg-gray-100 w-80 py-1 px-4 flex items-center mb-2 rounded-md">
              <MdOutlineMailOutline className='text-lg text-gray-400' />
              <input type="email" name='email' placeholder='Email' className='bg-gray-100 border-none outline-none placeholder:text-gray-400 text-sm flex-1  ' />
            </div>
            <div className='bg-gray-100 w-80 py-1 px-4 flex items-center mb-2 rounded-md'>
              <MdLockOutline className='text-lg text-gray-400'/>
              <input type="password" name='password' placeholder='Password' className='bg-gray-100 border-none outline-none placeholder:text-gray-400 text-sm flex-1' />
            </div>
            <div className="w-80 flex justify-between mb-8">
              <label className='text-gray-400 flex items-center text-xs '>
                <input type='checkbox' name='remember' className='border-gray-300 mr-1'></input>Remember me
              </label>
              <a href='#' className='text-gray-400 text-xs'>Forget the password</a>
            </div>
            <button type='submit' className='inline-block border-2  border-main bg-main rounded-full px-12 py-2 text-white font-semibold hover:bg-white hover:text-main'>Sign in</button>
          </form>
        </section>

        {/* Sign up section */}
        <section className='w-2/5 bg-main  py-36 px-12 rounded-tr-2xl rounded-br-2xl text-center'>
          <h2 className='text-white text-3xl font-bold mb-3'>Hello, Friend!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className='text-white mb-10'>Fill up personal information and start journey with us.</p>
          <a href='#' className='inline-block border-2 rounded-full px-12 py-2 text-white font-semibold hover:bg-white hover:text-main'>Sign up</a>
        </section>
      </div>
    </div>
  )
}
