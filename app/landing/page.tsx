import { useRouter } from 'next/navigation'
import React from 'react'

const LandingPage = () => {

  const router = useRouter();

  const handelClick = () => {
    router.push("/blogs");
  }

  return (
    <main className='flex justify-center items-center w-screen h-screen bg-slate-200  relative'>
      <div className='flex justify-center  items-center w-[95%] h-[90%]   bg-gradient-to-r from-indigo-200 via-purple-400 to-red-200  opacity-50 rounded-full absolute blur-[90px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
      </div>
      <div className=' z-10 flex justify-center items-center flex-col space-y-10 '>
        <h1 className='font-bold text-[200px] text-[#38248C]'>Blogs</h1>
        <p className='font-bold text-[50px] text-[#6B81BE]'>Welcome to Blog-List web site</p>
        <button className='font-bold text-[20px] text-white hover:text-gray-200 hover:bg-opacity-80 hover:border-none hover:bg-[#38248C] border rounded-full w-60 h-14' onClick={handelClick}>
          Get-Started
        </button>
      </div>
    </main>
  )
}

export default LandingPage;