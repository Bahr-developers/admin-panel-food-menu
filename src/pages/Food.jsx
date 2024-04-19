import AddCategoryFood from "../Modals/AddCategory";
import AddFood from "../Modals/AddFood";
import { ALL_DATA } from "../Query/ALL_DATA";

import FoodCard from "../components/FoodCard";
const Food = () => {
    const food = ALL_DATA.useFood();
    console.log(food.data);
  return (
    <div>
      <div className="drink-wrap">
        <div className="relative">
          <div className="drink-header flex justify-between relative  my-3">
            <h2 className="text-[22px] font-bold">Foods</h2>
            <AddCategoryFood />
          </div>
          <div className="food-body flex flex-wrap gap-3 items-center justify-between">
          <FoodCard/>
          <FoodCard/>
            <FoodCard/>
            <FoodCard/>
            <FoodCard/>

          </div>
          <AddFood />
        </div>
      </div>
    </div>
  );
};

export default Food;
