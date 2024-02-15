'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Back from "@/public/back.svg"
import { getBlog } from '@/actions/handelAction'
import { Blog, formatDate } from '@/utils/utils'
import { useRouter } from 'next/navigation'

const Description = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    getBlog(params.id).then((data) =>
      setBlog(data)
    ).catch((err) => {
      setBlog(null);
    });
  }, [params.id])

  const handelChange = () => {
    router.push("/blogs");
  }

  return (
    <main className='flex justify-center items-center w-screen h-screen bg-custom-image bg-cover bg-center  relative p-4 '>
      <div className='flex justify-center items-center bg-[#E4DFDF] absolute w-full h-full opacity-90 blur-[2px] '>
      </div>
      <div className='z-10 w-[600px] lg:w-1/2 lg:min-w-[900px] h-full rounded-2xl flex justify-center items-center flex-col bg-[#FBF7F7] '>
      <div className='font-bold text-[40px] sm:text-[40px] flex justify-center items-center p-4  '>
          <h1 className=' text-[#341212] h-28 flex justify-center items-center bg-[#dfdada] w-64 rounded-full'>Blog App</h1>
        </div>
        <div className='w-full flex justify-center items-center'> <div className='border w-[90%]'></div></div>
        <div className=' flex justify-center items-center p-10 space-x-2 w-full'>
          <button onClick={handelChange} >
            <Image src={Back} alt='image not found' />
          </button>
          <div className=' flex flex-row w-full justify-between'>
            <h1 className='font-bold text-[20px] '>{blog?.title}</h1>
            <h1 className='font-bold text-[20px] '>Data: {formatDate(blog?.createdAt)} </h1>
          </div>
        </div>
        <div className='container w-full h-full overflow-auto'>
          <div className='container mx-auto max-w-[1000px] p-4 '>
            {blog?.content}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Description