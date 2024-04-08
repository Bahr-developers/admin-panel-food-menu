import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { BiCloudUpload } from "react-icons/bi";
import { styled } from '@mui/material/styles'


const AddCategorySalad = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddCategorySalad = (e) => {
    e.preventDefault();
  };
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
          <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<BiCloudUpload />}
                sx={{margin: '25px 0 -10px 0'}}
                >                
                Upload file
                <VisuallyHiddenInput type="file" />
            </Button>
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
