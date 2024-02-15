'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Add from "@/public/add.svg"
import Remove from "@/public/remove.svg"
import Show from "@/public/show.svg"
import Modal from '../../components/modal/Modal'
import { Blog, ft_slice } from '@/utils/utils'
import { getAllBlogs, removeBlog } from '@/actions/handelAction'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'

const Blogs = () => {

  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [isopen, setIsopen] = useState<boolean>(false);
  const [update, setUpdate] = useState<boolean>(false);

  useEffect(() => {
    getAllBlogs().then((data) => {
      setBlogs(data);
    }
    ).catch((err) => {
      setBlogs([]);
      toast.error("Error!");
    });
  }, [update])

  const handelRemove = (id: string) => {
    setUpdate(!update);
    removeBlog(id).then(() => {
      toast.success('Successfully removed!');
    }).catch(() => {
      toast.error("Error!");
    });
  }

  const handelDetail = (id: string) => {
    router.push(`/description/${id}`);
  }

  return (
    <main className='flex justify-center items-center w-screen h-screen bg-custom-image bg-cover bg-center relative p-4'>
      <div className='flex justify-center items-center bg-[#E4DFDF] absolute w-full h-full opacity-90 blur-[2px] '>
      </div>
      <div className='z-10 w-[600px] lg:w-1/2 lg:min-w-[900px] h-full rounded-2xl flex justify-center items-center flex-col bg-[#FBF7F7] '>
        <div className='font-bold text-[40px] sm:text-[40px] flex justify-center items-center p-4  '>
          <h1 className=' text-[#341212] h-28 flex justify-center items-center bg-[#dfdada] w-64 rounded-full'>Blog App</h1>
        </div>
        <div className='w-full flex justify-center items-center'> <div className='border w-[90%]'></div></div>
        <div className=' '>
          <button className='flex justify-center items-center p-10 space-x-2' onClick={() => setIsopen(!isopen)} >
            <Image src={Add} alt='image not found' />
            <h1 className='font-bold text-[25px] '>Add New Blog</h1>
          </button>
        </div>
        <div className='container w-full h-full overflow-auto'>
          <div className='container mx-auto max-w-[1020px] p-4 '>
            {
              blogs.map((item) => (
                <div key={item.id} className='p-4 '>
                  <div className='flex flex-row justify-between  border rounded-3xl p-4 shadow-orange-50 shadow-2xl transform transition duration-300 ease-in-out hover:scale-105 '>
                    <div className='font-bold text-xl'>
                      <h1>{item.title}</h1>
                      <p className='pl-4 font-normal text-md'> {ft_slice(item.content)}</p>
                    </div>
                    <div className='flex flex-row space-x-3'>
                      <button onClick={() => handelRemove(item.id)} className='flex justify-start w-[25px] rounded-full items-center '>
                        <Image className='w-[25px] ' src={Remove} alt='icon not found' />
                      </button>
                      <button onClick={() => handelDetail(item.id)} className='flex justify-start w-[25px]  rounded-full items-center '>
                        <Image className='w-[25px] ' src={Show} alt='icon not found' />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Modal update={update} setUpdate={setUpdate} isopen={isopen} setIsopen={setIsopen} />
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  )
}

export default Blogs