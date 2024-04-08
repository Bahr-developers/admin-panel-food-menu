import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { BiCloudUpload } from "react-icons/bi";
import { styled } from '@mui/material/styles'



// Images transform getbase64Full
async function getBase64Full(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
    });
  }


const AddCategorySalad = () => {
  const [open, setOpen] = React.useState(false);
  const praductImg = React.useRef()

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddCategorySalad = (e) => {
    e.preventDefault();
  };

  const showImage = async (e) => {
    praductImg.current.src = await getBase64Full(e.target.files[0])
    praductImg.current.classList.remove('hidden')
    console.log(e.target.files[0]);
  }
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>Add Category</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleAddCategorySalad,
        }}
      >
        <DialogContent>
          <DialogContentText>To subscribe to this website</DialogContentText>
          <div className="miniwrap-image flex gap-x-4 md:gap-x-10 items-center">
          <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                onChange={showImage}
                startIcon={<BiCloudUpload />}
                sx={{margin: '25px 0 10px 0'}}
                >                
                Upload file
                <VisuallyHiddenInput type="file" />
            </Button>
            <img width={90} ref={praductImg} className='hidden rounded-lg' src="" alt="img" />
          </div>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="uz"
            label="Add category Uz"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="ru"
            label="Add category Ru"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="en"
            label="Add category En"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default AddCategorySalad;
