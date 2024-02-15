'use client'
import { z } from "zod";
import React, { useState } from "react";
import { addBlock } from "@/actions/handelAction";
import { ModalProps } from "@/utils/utils";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, } from "@material-tailwind/react";


const schema = z.object({
  title: z.string().min(3, { message: "dhjsjsdhjd" }).max(50, { message: "dsdssddssddsds" }),
  content: z.string(),
});

const Modal = ({ isopen, setIsopen, update, setUpdate }: ModalProps) => {

  const handleOpen = () => setIsopen(!isopen);

  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const handleAdd = () => {
    // try{
    // }catch(err){
    //   console.log(err);
    // }
    // schema.parse(data);
    // console.log("herer : ", data.title, data.content);
    addBlock(data.title, data.content);
    // console.log("111 : ", data.title, data.content);
    setIsopen(!isopen);
    setUpdate(!update);
  }

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <Dialog size="lg" open={isopen} placeholder={""} handler={() => { }} >
      <DialogHeader className="flex justify-center" placeholder={""}>Add new Blog</DialogHeader>
      <DialogBody placeholder={""}>
        <form action="" className="flex flex-col space-y-10">
          <input className=" border rounded-md  p-2 h-14" type="text" placeholder="title" name="title" onChange={handleChange} />
          <textarea rows={0} className=" border rounded-md p-2 h-72" placeholder="discription" name="content" onChange={handleChange} />
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