'use client'
import React from 'react'
import Image from 'next/image'
import Add from "@/public/add.svg"
import Remove from "@/public/remove.svg"
import Show from "@/public/show.svg"
import {ft_slice, list} from '@/utils/utils'
import { removeBlog } from '@/actions/handelAction'




const Discription = () => {

  const str = "The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants";

  return (
    <main className='flex justify-center items-center w-screen h-screen bg-custom-image bg-cover bg-center  relative p-4 '>
      <div className='flex justify-center items-center bg-[#E4DFDF] absolute w-full h-full opacity-90 blur-[2px] '>
      </div>
      <div className='z-10 w-[600px] lg:w-1/2 lg:min-w-[900px] h-full rounded-2xl flex justify-center items-center flex-col bg-[#FBF7F7] '>
        <h1 className='font-bold text-[40px] sm:text-[50px] flex justify-center items-center p-10'>Blog App</h1>
        <div className='w-full flex justify-center items-center'> <div className='border w-[90%]'></div></div>
        <div className=' flex justify-center items-center p-10 space-x-2'>
          <button >
            <Image src={Add} alt='image not found' />
          </button>
          <h1 className='font-bold text-[20px] '>Add New Blog</h1>
        </div>
        <div className='container w-full h-full overflow-auto'>
          <div className='container mx-auto max-w-[1000px] p-4 '>
            discription
          </div>
        </div>
      </div>
    </main>
  )
}

export default Discription