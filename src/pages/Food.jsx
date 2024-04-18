import MiniNav from "../components/MiniNav";
import Navbar from "../components/Navbar";
import AddCategoryFood from "../Modals/AddCategory";
import AddFood from '../Modals/AddFood'
import { ALL_DATA } from "../Query/ALL_DATA";

const Food = () => {
    const food = ALL_DATA.useFood()
    const category = ALL_DATA.useCatefory()
    console.log(category.data);
    console.log(food.data);
    return (
        <div>
            <Navbar/>
            <hr />
            <div className="drink-wrap">
                <div className="sm:container px-3 relative">
                    <div className="drink-header flex justify-between relative  my-3">
                        <h2 className="text-[22px] font-bold">Foods</h2>
                        <AddCategoryFood/>
                    </div>
                    <div className="body-foods">

                    </div>
                    <AddFood/>
                </div>
            </div>
            <MiniNav/>
        </div>
    );
};

export default Food;