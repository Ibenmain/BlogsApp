'use client'
import React from "react";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, } from "@material-tailwind/react";

export type ModalProps = {
  isopen: boolean;
  setIsopen: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ isopen, setIsopen }: ModalProps) => {

  const handleOpen = () => setIsopen(!isopen);
  const emptyHandler = () => { }

  return (
    <Dialog size="lg" open={isopen} placeholder={""} handler={emptyHandler} >
      <DialogHeader className="flex justify-center" placeholder={""}>Add new Blog</DialogHeader>
      <DialogBody placeholder={""}>
        <form action="" className="flex flex-col space-y-10">
          <input className=" border rounded-md  p-2 h-14" type="text" placeholder="title" />
          <textarea rows={0} className=" border rounded-md p-2 h-72" placeholder="discription" />
          <input className=" border rounded-md p-2 h-14" type="date" placeholder="" />
        </form>
      </DialogBody>
      <DialogFooter placeholder={""}>
        <Button placeholder={""} variant="text" color="red" onClick={handleOpen} className="mr-1" >
          <span>Cancel</span>
        </Button>
        <Button placeholder={""} variant="gradient" color="green" onClick={handleOpen}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default Modal;