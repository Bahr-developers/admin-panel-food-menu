import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { MdDelete } from "react-icons/md";
import { deleteModal } from "../configs/language";

const DeleteSubcategory = ({ deleteFn, id }) => {
  const [open, setOpen] = React.useState(false);

  const language = localStorage.getItem("language");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const deleteCloseBtn = () => {
    deleteFn(id);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button
        className="bg-red-500 text-white p-1 md:p-1 rounded"
        onClick={handleClickOpen}
      >
        <MdDelete size={23} />
      </button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{deleteModal[0][language]}</DialogTitle>
        <DialogContent>
          <DialogContentText id={`alert-dialog-slide-description ${id}`}>
            {deleteModal[1][language]}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button
            sx={{
              backgroundColor: "red",
              padding: "3px",
              color: "white",
              ":hover": { backgroundColor: "red", color: "white" },
            }}
            onClick={deleteCloseBtn}
          >
            {deleteModal[3][language]}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DeleteSubcategory;
