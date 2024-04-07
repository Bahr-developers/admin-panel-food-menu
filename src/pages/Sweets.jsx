import MiniNav from "../components/MiniNav";
import Navbar from "../components/Navbar";
import AddSweet from '../Modals/AddSweets'

const Sweets = () => {
    return (
        <div>
            <Navbar/>
            <div className="drink-wrap">
                <div className="container px-3">
                    <div className="drink-header flex justify-between">
                        <h2 className="text-[22px] font-bold">Sweets</h2>
                        <AddSweet/>
                    </div>
                </div>
            </div>
            <MiniNav/>
        </div>
    );
};

export default Sweets;