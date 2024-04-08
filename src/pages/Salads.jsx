import MiniNav from "../components/MiniNav";
import Navbar from "../components/Navbar";
import AddCategorySalad from "../Modals/AddCategorySalad";
import AddSalad from '../Modals/AddSalad'

const Salads = () => {
    return (
        <div>
            <Navbar/>
            <div className="drink-wrap">
                <div className="container px-3">
                    <div className="drink-header flex justify-between">
                        <h2 className="text-[22px] font-bold">Salad</h2>
                        <AddCategorySalad/>
                    </div>
                        <AddSalad/>
                </div>
            </div>
            <MiniNav/>
        </div>
    );
};

export default Salads;