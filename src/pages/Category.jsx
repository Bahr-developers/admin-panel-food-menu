import { ALL_DATA } from '../Query/ALL_DATA';
import Navbar from '../components/Navbar';
import MiniNav from '../components/MiniNav';



const AddCategory = () => {
    const language = ALL_DATA.useLanguage();
    const translate = ALL_DATA.useTranslete();
    console.log(translate.data);
    // if(translate.data) 
  return (
    <>
    <Navbar/>
    <div className="flex justify-between px-3">
        <p>Add Category</p>
    </div>
    <MiniNav/>
    </>
  );
}

export default AddCategory