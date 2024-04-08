import MiniNav from "../components/MiniNav";
import Navbar from "../components/Navbar";
import AddCategoryDrink from "../Modals/AddCategoryDrinck";
import DrinckAdd from '../Modals/AddDrinck'


const Drink = () => {
    return (
        <div>
            <Navbar/>
            <div className="drink-wrap">
                <div className="container px-3">
                    <div className="drink-header flex justify-between">
                        <h2 className="text-[22px] font-bold">Drinck</h2>
                        <AddCategoryDrink/>
                    </div>
                    <DrinckAdd/>
                </div>
            </div>
            <MiniNav/>
        </div>
    );
};

export default Drink;