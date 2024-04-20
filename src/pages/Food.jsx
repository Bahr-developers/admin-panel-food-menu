import AddCategoryFood from "../Modals/AddCategory";
import AddFood from "../Modals/AddFood";
import { ALL_DATA } from "../Query/ALL_DATA";
import Loader from '../components/Loading'

import FoodCard from "../components/FoodCard";
const Food = () => {
    const food = ALL_DATA.useFood();
    console.log(food.data);
    if(!food.data) return <Loader/>
  return (
    <div>
      <div className="drink-wrap">
        <div className="relative">
          <div className="drink-header flex justify-between relative  my-3">
            <h2 className="text-[22px] font-bold">Foods</h2>
            <AddCategoryFood />
          </div>
          <div className="food-body flex flex-wrap gap-2 md:gap-3 items-center justify-between">
            {food.data?.length && food.data.map(el => {
                return <FoodCard key={el.id} data ={el}/>
            })}
          </div>
          <AddFood />
        </div>
      </div>
    </div>
  );
};

export default Food;
