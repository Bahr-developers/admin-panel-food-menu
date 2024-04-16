import AddCategory from "../Modals/AddCategory";
import MiniNav from "../components/MiniNav";
import Navbar from "../components/Navbar";


const Drink = () => {
    return (
        <div>
            <Navbar/>
            <div className="drink-wrap">
                <div className="container px-3">
                    <div className="drink-header flex justify-between">
                        <h2 className="text-[22px] font-bold">Drinck</h2>
                    </div>
                    <AddCategory/>
                </div>
            </div>
            <MiniNav/>
        </div>
    );
};

export default Drink;