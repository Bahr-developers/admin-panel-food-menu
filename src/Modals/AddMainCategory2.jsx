import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { BiCloudUpload } from "react-icons/bi";
import { styled } from "@mui/material/styles";
import React, { Fragment, useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CategoryUtils } from "../utils/category.utils";
import { QUERY_KEY } from "../Query/QUERY_KEY";
import { ALL_DATA } from "../Query/ALL_DATA";

import { Modal, Box } from "@mui/material";

import { TranslateUtils } from "../utils/translate.utils";

import toast from "react-hot-toast";
import { MdTouchApp } from "react-icons/md";
import { useParams } from "react-router-dom";
import { addModal } from "../configs/language";

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

const AddMainCategory2 = () => {
  const [open, setOpen] = useState(false);
  const [translateId, setTranslateId] = useState(0);

  const langCode = localStorage.getItem("language");
  const praductImg = useRef();
  const queryClient = useQueryClient();
  const language = ALL_DATA.useLanguage();

  const { restaurantId } = useParams();

  const translate = ALL_DATA.useTranslate();

  // Add taranslete and Category functions
  const addTranslate = useMutation({
    mutationFn: TranslateUtils.postTranslate,
    onSuccess: (data) => {
      setTranslateId(data);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.translate] });
    },
    onError: (err) => {
      console.log(err, "Add translete");
      toast.error("Something went wrong");
    },
  });

  const addMainCategory = useMutation({
    mutationFn: CategoryUtils.addCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.category] });
      toast.success("Add category success");
      setOpen(false);
    },
    onError: (err) => {
      console.log(err, "add Category");
      toast.error("Xatolik");
    },
  });

  const handleTitleAddCategory = (e) => {
    e.preventDefault();
    const definition = {};
    for (let el of language.data) {
      definition[el.code] = e.target[el.code].value;
    }
    addTranslate.mutate({
      code: e.target.translate_code.value,
      definition,
      type: "content",
    });
  };

  const handleAddCotegory = (e) => {
    e.preventDefault();

    const findTranslate = translate?.data.find(
      (item) => item._id === translateId
    );

    addMainCategory.mutate({
      name: findTranslate?._id,
      image: e.target.image_category.files[0],
      category_id: "",
      restaurant_id: restaurantId,
    });
  };

  function AddTitle() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return (
      <Fragment>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          onClick={handleOpen}
          tabIndex={-1}
          startIcon={<MdTouchApp />}
          sx={{ margin: "25px 0 10px 0", width: "100%", fontSize: "12px" }}
        >
          {addModal[1][langCode]}
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            <form onSubmit={handleTitleAddCategory}>
              <div className="flex items-center gap-5">
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="name"
                  name="translate_code"
                  label={`Add category name code`}
                  type="text"
                  fullWidth
                  variant="standard"
                />
              </div>
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
                Save
              </button>
            </form>
          </Box>
        </Modal>
      </Fragment>
    );
  }

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen} variant="contained">
        {addModal[6][langCode]}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleAddCotegory,
        }}
      >
        <DialogContent sx={{}}>
          <DialogContentText>{addModal[6][langCode]}</DialogContentText>
          <div className="miniwrap-image flex gap-x-4 md:gap-x-10 items-center">
            <Button
              component="label"
              variant="contained"
              tabIndex={-1}
              onChange={showImage}
              name="image_category"
              startIcon={<BiCloudUpload />}
              sx={{ margin: "25px 0 10px 0" }}
            >
              {addModal[2][langCode]}
              <VisuallyHiddenInput name="image_category" type="file" />
            </Button>
            <img
              width={90}
              ref={praductImg}
              className="hidden rounded-lg"
              src=""
              alt="img"
            />
          </div>
          <TextField disabled fullWidth variant="standard" />
          <AddTitle />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              width: "100%",
              backgroundColor: "green",
              color: "white",
              ":hover": { backgroundColor: "green", color: "white" },
            }}
            type="submit"
          >
            {addModal[5][langCode]}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );

  // Show category image
  async function showImage(e) {
    praductImg.current.src = await getBase64Full(e.target.files[0]);
    praductImg.current.classList.remove("hidden");
  }
  // Open and close modal
  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
};

export default AddMainCategory2;
