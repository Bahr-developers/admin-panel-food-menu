import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MdTouchApp } from "react-icons/md";
import { useState } from "react";
import { LuFolderEdit } from "react-icons/lu";

// Material UI style
const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 300,
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  px: 2,
  p: 1,
  borderRadius: 2,
};


const EditFood = ({ data }) => {
  ///////////////////////////////////// Modal open and close
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  /////////////////////////////////// Add to titile child modal
  function AddTitle() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return (
      <React.Fragment>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          onClick={handleOpen}
          tabIndex={-1}
          startIcon={<MdTouchApp />}
          sx={{ margin: "10px 0", width: "100%", fontSize: "12px" }}
        >
          Edit Title
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby={`child-modal-title${data.id}`}
          aria-describedby={`child-modal-description${data.id}`}
        >
          <Box sx={{ ...style, width: 200 }}>
            <h2 id={`child-modal-title${data.id}`}>Add title</h2>
            <form onSubmit={handleTitle}>
              {language.data?.length &&
                language.data.map((lang) => {
                  return (
                    <TextField
                      key={lang._id}
                      autoFocus
                      required
                      margin="dense"
                      id="name"
                      name={lang.code}
                      label={`Add category ${lang.code}`}
                      type="text"
                      variant="standard"
                    />
                  );
                })}
              <button
                type="submit"
                className="ml-auto mt-3 w-[90px] bg-green-600 font-medium text-white p-2 rounded px-3 block"
              >
                Saqlash
              </button>
            </form>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }
  return (
    <div className="relative z-10">
      <button
        className="absolute z-10 bottom-[-10px] bg-yellow-500 text-white p-1 md:p-2 rounded-full right-11 md:right-14"
        onClick={handleOpen}
      >
        {" "}
        <LuFolderEdit size={20} />{" "}
      </button>
      <Modal
        aria-labelledby={`child-modal-title${data.id}`}
        aria-describedby={`transition-modal-description${data.id}`}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id={`transition-modal-description${data.id}`}
              sx={{ mt: 2 }}
            >
              Add to praduct
            </Typography>
            <form>
              <div className="title-edit flex items-center gap-3">
                <h2 className="font-bold">Name:</h2>
                <p className="font-medium">{data.name}</p>
              </div>
                <AddTitle />              
              </form>
            </Box>
          </Fade>
        </Modal>
      </div>
  );
};

export default EditFood;
