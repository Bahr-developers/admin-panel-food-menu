import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MdDelete } from "react-icons/md";
import { useState } from 'react';

const DeleteImgModal = ({deleteFn, id}) => {
    const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const deleteCloseBtn = () =>{
    deleteFn(id)
    handleClose()
  }

    return <React.Fragment>
            <span className='absolute cursor-pointer block top-[98px] md:top-[55px] z-10 bg-red-500 text-white p-1 md:p-2 rounded-full right-5    md:right-4' onClick={handleClickOpen}><MdDelete size={20}/></span> 
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Are you sure delete?"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                If you continue, you will permanently delete this record. Are you sure you want to continue?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <span onClick={deleteCloseBtn}>Delete</span>
                </DialogActions>
            </Dialog>
            </React.Fragment>
};

export default DeleteImgModal;