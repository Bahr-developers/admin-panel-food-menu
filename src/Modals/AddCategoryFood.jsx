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

const AddCategoryFood = () => {
  const [open, setOpen] = useState(false);
  const praductImg = useRef()
  const queryClient = useQueryClient()
  const category = ALL_DATA.useCatefory()
  console.log(category.data);
  const addCategory = useMutation({
    mutationFn: CategoryUtils.addCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QUERY_KEY.category]})
    },
    onError: (err) => {
      console.log(err, "add Category");
    }
  })
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddCotegory = (e) => {
    e.preventDefault()
      addCategory.mutate({
      name: e.target.uz.value
    })
  }

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
    </Fragment>
  );
}

export default AddCategoryFood;