import { BiDrink } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaBowlFood } from "react-icons/fa6";
import { LuDessert, LuSalad } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const MiniNav = () => {
    return (
        <div className="">
            <div className="mni-nav-wrap p-3 py-7 pb-10 flex justify-between items-center fixed bottom-0 bg-[rgba(153,107,58,0.99)] left-0 h-10 w-screen">
                <NavLink to='/food' className="text-white text-[35px]"><FaBowlFood /></NavLink>
                <NavLink to='/drink' className="text-white text-[35px]"><BiDrink/></NavLink>
                <NavLink to='/sweets' className="text-white text-[35px]"><LuDessert/></NavLink>
                <NavLink to='/salads' className="text-white text-[35px]"><LuSalad/></NavLink>
                <NavLink to='/profil' className="text-white text-[35px] p-2"><CgProfile/></NavLink>
            </div>
        </div>
    );
};

export default MiniNav;