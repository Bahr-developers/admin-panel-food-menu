import AddCategoryFood from "../Modals/AddCategory";
import AddFood from "../Modals/AddFood";

const Food = () => {
  return (
    <div>
      <div className="drink-wrap">
        <div className="relative">
          <div className="drink-header flex justify-between relative  my-3">
            <h2 className="text-[22px] font-bold">Foods</h2>
            <AddCategoryFood />
          </div>
          <AddFood />
        </div>
      </div>
    </div>
  );
};

export default Food;
