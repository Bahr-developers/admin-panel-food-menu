import { Backdrop, Box, Button, Fade, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { LuFolderEdit } from "react-icons/lu";
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

const EditImage = ({data}) => {  
     ///////////////////////////////////// Modal open and close
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className="z-10">
          <button className="absolute z-10 bottom-[-10px] bg-yellow-500 text-white p-1 md:p-2 rounded-full right-11 md:right-14" onClick={handleOpen}> <LuFolderEdit size={20}/> </button>
    
        <div className="z-30">
          <button
            className="absolute z-10 top-0 bg-indigo-400 right-0 text-white p-1 md:p-2 rounded-[0, 0, 0, 10px] md:right-14"
            onClick={handleOpen}
          >Edit image
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
                  Edit to praduct images
                </Typography>
                <form>
                  <div className="title-edit flex items-center gap-3">
                    <h2 className="font-bold">Name:</h2>
                    <p className="font-medium">{data.name}</p>
                  </div>
                  <Button
                    className="w-full"
                    type="submit"
                    variant="contained"
                    color="success"
                  >
                    Edit
                  </Button>
                </form>
              </Box>
            </Fade>
          </Modal>
        </div>
        </div>
      );
};

export default EditImage;