import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { BiCloudUpload } from "react-icons/bi";
import { styled } from "@mui/material/styles";
import { Fragment, useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CategoryUtils } from "../utils/categoryutils";
import { QUERY_KEY } from "../Query/QUERY_KEY";
import { ALL_DATA } from "../Query/ALL_DATA";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { TranslateUtils } from "../utils/translate.utils";
import toast from "react-hot-toast";


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


const AddCategory = () => {
  const [open, setOpen] = useState(false);
  const praductImg = useRef();
  const queryClient = useQueryClient();
  const category = ALL_DATA.useCatefory();
  const language = ALL_DATA.useLanguage();

  const translate = ALL_DATA.useTranslete()
  console.log(translate.data?.at(translate.data.length-1));
  console.log(translate.data);
  
  // Add taranslete and Category functions
  const addTranslate = useMutation({
    mutationFn: TranslateUtils.postTranslate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.translete] });
    },
    onError: (err) => {
      console.log(err, "Add translete");
    },
  });

  const addCategory = useMutation({
    mutationFn: CategoryUtils.addCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.category] });
      toast.success("Add category success");
    },
    onError: (err) => {
      console.log(err, "add Category");
      toast.error("Xatolik");
    },
  });

  
  const handleTitleAddCategory = (e) =>{
    e.preventDefault()
    const definition = {}
    for (let el of language.data) {
      definition[el.code] = e.target[el.code].value;
    }
    addTranslate.mutate({
      code: e.target.translete_code.value,
      definition,
      type: "content"
    })
  }

  const handleAddCotegory = (e) => {
    e.preventDefault()
      addCategory.mutate({
        name: translate.data?.at(translate.data?.length-1)._id,
        image: e.target.image_category.files[0],
        category_id: e.target.category.value,
        restaurant_id: "661bd36d8e353f56d26067c5"
      })     
    console.log(addCategory.variables, "Category");
    console.log(addTranslate.variables, "Transleta");
  }
    /////////////////////////////////// Add to titile child modal
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
            Add Title
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box  sx={{ ...style, width: 200 }}>
            <form  onSubmit={handleTitleAddCategory}>
              <div className='flex items-center gap-5'>
                <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="translete_code"
                        label={`Add category name code`}
                        type="text"
                        fullWidth
                        variant="standard"
                  />
              </div>
              {language.data?.length && language.data.map(lang=>{
                return <TextField
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
        </Fragment>
        );
      }
  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
        Add Category
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
          <DialogContentText>
            To subscribe to this website
          </DialogContentText>
          <div  className="miniwrap-image flex gap-x-4 md:gap-x-10 items-center">
            <Button
                component="label"
                variant="contained"
                tabIndex={-1}
                onChange={showImage}    
                name='image_category'            
                startIcon={<BiCloudUpload />}
                sx={{margin: '25px 0 10px 0'}}
                >                
                Upload file
                <VisuallyHiddenInput name='image_category' type="file" />
            </Button>
            <img width={90} ref={praductImg} className='hidden rounded-lg' src="" alt="img" />
          </div> 
          <TextField disabled fullWidth  variant="standard" /> 
          <AddTitle/>                
            <FormControl fullWidth sx={{marginTop: "20px", width:"100%"}}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  sx={{ width: "100%" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name='category'
                  label="Category"
                  defaultValue={""}
                  >
                  {category.data?.length && category.data.map(ctg => {
                    return <MenuItem fullWidth key={ctg.id} value={ctg.id}>{ctg.name}</MenuItem>
                  })}
                </Select>
            </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
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

export default AddCategory;
