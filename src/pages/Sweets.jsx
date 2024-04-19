import MiniNav from "../components/MiniNav";
import Navbar from "../components/Navbar";
import AddCategory from "../Modals/AddCategory";
import AddFood from "../Modals/AddFood";

const Sweets = () => {
    return (
        <div>
            <Navbar/>
            <hr />
            <div className="drink-wrap">
                <div className="container px-3">
                    <div className="drink-header flex justify-between my-3">
                        <h2 className="text-[22px] font-bold">Sweets</h2>
                        <AddCategory/>
                    </div>
                    <div className="sweets-body">

                    </div>
                    <AddFood/>
                </div>
            </div>
            <MiniNav/>
        </div>
    );
};

export default Sweets;