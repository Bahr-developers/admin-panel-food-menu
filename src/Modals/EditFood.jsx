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
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useState } from "react";
import { useRef } from "react";
import { ALL_DATA } from "../Query/ALL_DATA";
import { useReducer } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FoodUtils } from "../utils/food.utils";
import { QUERY_KEY } from "../Query/QUERY_KEY";
import toast from "react-hot-toast";
import { LuFolderEdit } from "react-icons/lu";

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

// useReducer Functions
function reduser(state, action) {
  switch (action.type) {
    case "title": {
      return {
        title: action.titleName,
        description: state.description,
      };
    }
    case "description": {
      return {
        title: state.title,
        description: action.description,
      };
    }
    default: {
      return {
        title: state.title,
        description: state.description,
      };
    }
  }
}
const initionState = { title: {}, description: {} };

const EditFood = ({data}) => {
    console.log(data, "edit");
    ///////////////////////////////////// Modal open and close
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  ///////////////////////////////////// useReducer
  const [state, dispatch] = useReducer(reduser, initionState);
  const praductImgs = useRef();

  const category = ALL_DATA.useCatefory();
  const language = ALL_DATA.useLanguage();
  const queryClient = useQueryClient();

  const addFood = useMutation({
    mutationFn: FoodUtils.addFood,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.food] });
      toast.success("Succes add food");
    },
    onError: (err) => {
      console.log(err, "Error add food");
    },
  });
  const editFood = useMutation({
    mutationFn: FoodUtils.editFood,
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: [QUERY_KEY.food]});
        toast.success("Succes edit")
    },
    onError: (err) =>{
        console.log(err, "Edit food");
        toast.error("Error")
    }
  })

  const handleAddFood = (e) => {
    e.preventDefault();
    const images = [];
    console.log(e.target.images?.files.length);
    for (let i = 0; i < e.target.images?.files.length; i++) {
      images.push(e.target.images.files[i]);
    }
    addFood.mutate({
      images: images,
      name: state.title,
      description: state.description,
      price: e.target.price?.value,
      category_id: e.target.category_id?.value,
      restourant_id: "661bd36d8e353f56d26067c5",
    });
  };

  const handleTitle = (e) => {
    e.preventDefault();
    const title = {};
    for (let lang of language.data) {
      title[lang.code] = e.target[lang.code].value;
    }
    dispatch({
      type: "title",
      titleName: title,
    });
  };

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
          sx={{ margin: "25px 0 10px 0", width: "100%", fontSize: "12px" }}
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
                      fullWidth
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
  //////////////////////////////////// Add description child modal
  function AddDecription() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const handleAddDescription = (e) => {
      e.preventDefault();
      const description = {};
      for (let des of language.data) {
        description[des.code] = e.target[des.code].value;
      }
      dispatch({
        type: "description",
        description: description,
      });
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
          Edit Description
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby={`child-modal-title${data.id}`}
          aria-describedby={`child-modal-description${data.id}`}
        >
          <Box sx={{ ...style, width: 200 }}>
            <h2 id={`child-modal-title${data.id}`}>Add Description</h2>
            <form onSubmit={handleAddDescription}>
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
                      fullWidth
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
    <div className="relative z-30">
      <button className="absolute bottom-[-10px] bg-yellow-500 text-white p-1 md:p-2 rounded-full right-11 md:right-14" onClick={handleOpen}> <LuFolderEdit size={20}/> </button>
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
            <Typography id={`transition-modal-description${data.id}`} sx={{ mt: 2 }}>
              Add to praduct
            </Typography>
            <form onSubmit={handleAddFood}>
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
                <VisuallyHiddenInput name="images" multiple type="file" />
              </Button>
              {/* Showe chald image */}
              <div
                ref={praductImgs}
                className="flex flex-wrap gap-1 w-[100%]"
              ></div>
              <div className="title-edit flex items-center gap-3">
                <h2 className="font-bold">Name:</h2> 
                <p className="font-medium">{data.name}</p>
              </div>
              <AddTitle />
              <div className="flex items-center gap-3">
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="name"
                  name="price"
                  label="Price"
                  type="number"
                  variant="standard"
                  defaultValue={data.price}
                />
                <Box sx={{ minWidth: 120, marginTop: "4px" }}>
                  <FormControl>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Category
                    </InputLabel>
                    <NativeSelect name="category_id">
                      {category.data?.length &&
                        category.data.map((ctg) => {
                          return (
                            <option key={ctg.id} value={ctg.id}>
                              {ctg.name}
                            </option>
                          );
                        })}
                    </NativeSelect>
                  </FormControl>
                </Box>
              </div>
              <div className="title-edit flex items-center gap-3 mt-1 mb-[-10px]">
                <h2 className="font-bold">Description:</h2> 
                <p className="font-medium">{data.description}</p>
              </div>
              <AddDecription />
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
  );
  // Show praduct images
  async function showImages(e) {
    const images = [];
    for (let i = 0; i < e.target.files.length; i++) {
      images.push(await getBase64Full(e.target.files[i]));
    }
    for (let image of images) {
      praductImgs.current.insertAdjacentHTML(
        "beforeend",
        `<img src=${image} width='65' alt="praduct-image" className="overflow-hidden rounded-md"/>`
      );
    }
  }
};

export default EditFood;