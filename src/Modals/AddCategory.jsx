import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { BiCloudUpload } from 'react-icons/bi';
import { styled } from '@mui/material/styles'
import { Fragment, useRef, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CategoryUtils } from '../utils/categoryutils';
import { QUERY_KEY } from '../Query/QUERY_KEY';
import { ALL_DATA } from '../Query/ALL_DATA';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { TranslateUtils } from '../utils/translate.utils';
import toast from 'react-hot-toast';



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

const AddCategory = () => {
  const [open, setOpen] = useState(false);
  const praductImg = useRef()
  const queryClient = useQueryClient()
  const category = ALL_DATA.useCatefory()
  const language = ALL_DATA.useLanguage()
  const addTranslate = useMutation({
    mutationFn: TranslateUtils.postTranslate,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QUERY_KEY.translete]})
    },
    onError: (err) => {
      console.log(err, "Add translete");
    }
  })
  const addCategory = useMutation({
    mutationFn: CategoryUtils.addCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QUERY_KEY.category]})
      toast.success("Add category success")
    },
    onError: (err) => {
      console.log(err, "add Category");

      toast.error("Xatolik")
    }
  })

  const handleAddCotegory = (e) => {
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
      addCategory.mutate({
      name: addTranslate.data,
      image: e.target.image.files[0],
      category_id: e.target.category.value,
      restaurant_id: "661bd36d8e353f56d26067c5"
    })
    console.log(addCategory.variables);
    console.log(addTranslate.data);
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
    <Fragment>
      <Button onClick={handleClickOpen}>
        Add Category
      </Button>      
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleAddCotegory
        }}       
      >
        <DialogContent>
          <DialogContentText>
            To subscribe to this website
          </DialogContentText>
          <div className="miniwrap-image flex gap-x-4 md:gap-x-10 items-center">
          <Button
                component="label"
                variant="contained"
                tabIndex={-1}
                onChange={showImage}                
                startIcon={<BiCloudUpload />}
                sx={{margin: '25px 0 10px 0'}}
                >                
                Upload file
                <VisuallyHiddenInput name='image' type="file" />
            </Button>
            <img width={90} ref={praductImg} className='hidden rounded-lg' src="" alt="img" />
          </div>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="translete_code"
            label="Category translete code"
            type="text"
            fullWidth
            variant="standard"
          />
          {language.data?.length && language.data.map(lang => {
            return <TextField
                      key={lang._id}
                      autoFocus
                      required
                      margin="dense"
                      id="name"
                      name={lang.code}
                      label={`Category name ${lang.code}`}
                      type="text"
                      fullWidth
                      variant="standard"
                    />
          })}
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
                      return <MenuItem key={ctg.id} value={ctg.id}>{ctg.name}</MenuItem>
                    })}
                  </Select>
              </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );

  // Show category image
  async function showImage (e)  {
    praductImg.current.src = await getBase64Full(e.target.files[0])
    praductImg.current.classList.remove('hidden')
  }
  // Open and close modal
  function handleClickOpen(){
    setOpen(true);
  }
  function handleClose(){
    setOpen(false);
  }
}

export default AddCategory;