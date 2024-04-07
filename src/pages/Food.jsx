import MiniNav from "../components/MiniNav";
import Navbar from "../components/Navbar";
import AddFood from '../Modals/AddFood'

const Food = () => {
    return (
        <div>
            <Navbar/>
            <div className="drink-wrap">
                <div className="container px-3">
                    <div className="drink-header flex justify-between">
                        <h2 className="text-[22px] font-bold">Food</h2>
                        <AddFood/>
                    </div>
                </div>
            </div>
            <MiniNav/>
        </div>
    );
};

export default Food;