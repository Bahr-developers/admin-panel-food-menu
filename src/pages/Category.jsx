import { ALL_DATA } from "../Query/ALL_DATA";
import Navbar from "../components/Navbar";
import MiniNav from "../components/MiniNav";

const AddCategory = () => {
  const language = ALL_DATA.useLanguage();
  const translate = ALL_DATA.useTranslete();

  return (
    <>
      <div className="flex justify-between">
        <p>Add Category</p>
      </div>
    </>
  );
};

export default AddCategory;
