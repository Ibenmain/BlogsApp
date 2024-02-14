'use client'
import React, { useState } from "react";
import { z } from "zod";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, } from "@material-tailwind/react";
import { title } from "process";
import { Content } from "next/font/google";
import { addBlock } from "@/actions/handelAction";
import { ModalProps } from "@/utils/utils";


const schema = z.object({
  title: z.string().min(3).max(50),
  content: z.string(),
});

const Modal = ({ isopen, setIsopen }: ModalProps) => {

  const handleOpen = () => setIsopen(!isopen);

  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const handleAdd = () => {
    schema.parse(data);
    addBlock(data.title, data.content);
    setIsopen(!isopen);
  }

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  console.log("data : ", data);

  const emptyHandler = () => { }

  return (
    <Dialog size="lg" open={isopen} placeholder={""} handler={emptyHandler} >
      <DialogHeader className="flex justify-center" placeholder={""}>Add new Blog</DialogHeader>
      <DialogBody placeholder={""}>
        <form action="" className="flex flex-col space-y-10">
          <input className=" border rounded-md  p-2 h-14" type="text" placeholder="title" name="title" onChange={handleChange} />
          <textarea rows={0} className=" border rounded-md p-2 h-72" placeholder="discription" name="content" onChange={handleChange} />
          {/* <input className=" border rounded-md p-2 h-14" type="date" placeholder=""  onChange={() => handleChange}/> */}
        </form>
      </DialogBody>
      <DialogFooter placeholder={""}>
        <Button placeholder={""} variant="text" color="red" onClick={handleOpen} className="mr-1" >
          <span>Cancel</span>
        </Button>
        <Button placeholder={""} variant="gradient" color="green" onClick={handleAdd}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default Modal;