import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, } from "@material-tailwind/react";

const Modal = (props: { isopen: boolean, setIsopen: Function }) => {

  const handleOpen = () => props.setIsopen(!props.isopen);
  const emptyHandler = () => { }

  return (
    <Dialog open={props.isopen} placeholder={""} handler={emptyHandler} >
      <DialogHeader className="flex justify-center" placeholder={""}>Add new Blog</DialogHeader>
      <DialogBody placeholder={""}>
        <form action="" className="flex flex-col space-y-10">
          <input className=" border rounded-md  p-2" type="text" placeholder="title" />
          <textarea rows={0} className=" border rounded-md p-2 h-20" placeholder="discription" />
          <input className=" border rounded-md p-2" type="date" placeholder="" />
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