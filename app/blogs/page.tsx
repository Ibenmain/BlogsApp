'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Add from "@/public/add.svg"
import Remove from "@/public/remove.svg"
import Show from "@/public/show.svg"
import Modal from '../../components/modal/Modal'
import { Blog, ft_slice } from '@/utils/utils'
import { getAllBlogs, removeBlog } from '@/actions/handelAction'

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [isopen, setIsopen] = useState<boolean>(false);

  useEffect(() => {
    getAllBlogs().then((data) =>
      setBlogs(data)
    ).catch((err) => {
      setBlogs([]);
    });
  }, [])

  const handelRemove = (id: string) => {
    removeBlog(id);
  }

  return (
    <main className='flex justify-center items-center w-screen h-screen bg-custom-image bg-cover bg-center relative p-4'>
      <div className='flex justify-center items-center bg-[#E4DFDF] absolute w-full h-full opacity-90 blur-[2px] '>
      </div>
      <div className='z-10 w-[600px] lg:w-1/2 lg:min-w-[900px] h-full rounded-2xl flex justify-center items-center flex-col bg-[#FBF7F7] '>
        <h1 className='font-bold text-[40px] sm:text-[50px] flex justify-center items-center p-10'>Blog App</h1>
        <div className='w-full flex justify-center items-center'> <div className='border w-[90%]'></div></div>
        <div className=' flex justify-center items-center p-10 space-x-2'>
          <button onClick={() => setIsopen(!isopen)} >
            <Image src={Add} alt='image not found' />
          </button>
          <h1 className='font-bold text-[20px] '>Add New Blog</h1>
        </div>
        <div className='container w-full h-full overflow-auto'>
          <div className='container mx-auto max-w-[1000px] p-4 '>
            {
              blogs.map((item) => (
                <div key={item.id} className=' p-2  '>
                  <div className='flex flex-row justify-between '>
                    <div className='font-bold text-lg'>
                      {item.title}
                      <p className='pl-4 font-normal text-md'> {ft_slice(item.content)}</p>
                    </div>
                    <div className='flex flex-row '>
                      <button onClick={() => handelRemove(item.id)} className='flex justify-start'>
                        <Image className='w-[90px] sm:w-[60px] h-6 ' src={Remove} alt='icon not found' />
                      </button>
                      <button className='flex justify-start'>
                        <Image className='w-[90px] sm:w-[60px] h-6 ' src={Show} alt='icon not found' />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Modal isopen={isopen} setIsopen={setIsopen} />
    </main>
  )
}

export default Blogs