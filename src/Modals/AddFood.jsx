import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { BiCloudUpload } from "react-icons/bi";
import { MdTouchApp } from "react-icons/md";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

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
const btnStyle = {
  position: "fixed",
  right: "5%",
  top: "76%",
  backgroundColor: "#6AD4DD",
  overflow: "hidden",
  padding: "5px 0",
  border: "1px solid silver",
  borderRadius: "50%",
  color: "#000",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const praductImgs = React.useRef();

  const showImages = async (e) => {
    const images = [];
    for (let i = 0; i < e.target.files.length; i++) {
      images.push(await getBase64Full(e.target.files[i]));
    }
    console.log(images);
    for (let image of images) {
      praductImgs.current.insertAdjacentHTML(
        "beforeend",
        `<img src=${image} width='65' alt="praduct-image" className="overflow-hidden rounded-md"/>`
      );
    }
  };
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  return (
    <div className="relative">
      <Button sx={btnStyle} onClick={handleOpen}>
        <Typography sx={{ fontSize: "35px" }}>+</Typography>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Add to praduct
            </Typography>
            <form>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<BiCloudUpload />}
                sx={{
                  margin: "25px 0 10px 0",
                  width: "100%",
                  fontSize: "12px",
                }}
                onChange={showImages}
              >
                Upload file
                <VisuallyHiddenInput multiple type="file" />
              </Button>
              {/* Showe chald image */}
              <div
                ref={praductImgs}
                className="flex flex-wrap gap-1 w-[100%]"
              ></div>
              <AddTitle />
              <div className="flex items-center gap-3">
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="uz"
                    label="Add category Uz"
                    type="number"
                    variant="standard"
                  />
                  <Box sx={{ minWidth: 120, }}>
                    <FormControl>
                      <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Category
                      </InputLabel>
                      <NativeSelect
                        defaultValue={10}
                        inputProps={{
                          name: 'age',
                          id: 'uncontrolled-native',
                        }}
                      >
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                      </NativeSelect>
                    </FormControl>
                  </Box>
              </div>
              <AddDecription/>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

// Add to titile child modal
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
        sx={{ margin: "25px 0 10px 0", width: "100%", fontSize: "12px" }}
      >
        Add Title
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Add title</h2>
          <form>
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
              name="uz"
              label="Add category Uz"
              type="text"
              fullWidth
              variant="standard"
            />
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
// Add description
function AddDecription() {
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
        sx={{ margin: "25px 0 10px 0", width: "100%", fontSize: "12px" }}
      >
        Add Description
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Add title</h2>
          <form>
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
              name="uz"
              label="Add category Uz"
              type="text"
              fullWidth
              variant="standard"
            />
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