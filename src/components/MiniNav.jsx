// import { BottomNavigation, BottomNavigationAction } from "@mui/material";
// import { useState } from "react";
import { BiDrink } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaBowlFood } from "react-icons/fa6";
import { LuDessert, LuSalad } from "react-icons/lu";
import { Link, NavLink, useParams } from "react-router-dom";

const MiniNav = () => {
  // const [value, setValue] = useState('recents');

  // const handleChange = (event, newValue) => {
  //     setValue(newValue);
  // };

  const { restaurantId } = useParams();

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[rgba(153,107,58,0.99)]">
      <div className="flex justify-between items-center px-3 container mx-auto py-2">
        <Link to={`/${restaurantId}`} className="text-white text-[35px]">
          <FaBowlFood />
        </Link>
        <NavLink to={"drink"} className="text-white text-[35px]">
          <BiDrink />
        </NavLink>
        <NavLink to="sweets" className="text-white text-[35px]">
          <LuDessert />
        </NavLink>
        <NavLink to="salads" className="text-white text-[35px]">
          <LuSalad />
        </NavLink>
        <NavLink to="profil" className="text-white text-[35px]">
          <CgProfile />
        </NavLink>
      </div>
    </footer>
  );
};

export default MiniNav;
