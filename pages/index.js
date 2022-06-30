import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='w-full h-screen grid place-items-center bg-slate-100'>
      <div className='bg-white flex rounded-2xl shadow-2xl w-2/3 max-w-4xl '>
        <section className='w-3/5 p-5'><p>Sing in section</p></section>
        <section className='w-2/5 bg-main  py-36 px-12 rounded-tr-2xl rounded-br-2xl text-center'>
          <h2 className='text-white text-3xl font-bold mb-3'>Hello, Friend!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className='text-white mb-10'>Fill up personal information and start journey with us.</p>
          <a href='#' className='inline-block border-2 border-white rounded-full px-12 py-2 text-white font-semibold hover:bg-white hover:text-main hover:cursor-pointer'>Sign up</a>
        </section>
      </div>
    </div>
  )
}
