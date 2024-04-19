import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { MdGTranslate } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { RiAddCircleLine } from "react-icons/ri";

const HamburgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <button className="" onClick={() => setOpenMenu(true)}>
        <LuMenu size={40} />
      </button>
      <div
        className={`fixed top-0 z-30 left-0 p-4 bg-white min-h-screen transition-w  ease-in-out  duration-500  ${
          openMenu
            ? "w-[70%] h-[100vh]"
            : "w-[50%] opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-md mx-auto py-10 relative">
          <div className="flex justify-between items-center ">
            <p className="mt-[-20px] text-[20px] font-bold">Menu</p>
            <button
              className="top-5 right-1 absolute bg-gray-100 rounded p-1"
              onClick={() => setOpenMenu(false)}
            >
              <CgClose size={25} />
            </button>
          </div>
          <div className="menu-bady mt-5">
            <Link
              onClick={() => setOpenMenu(false)}
              className="flex items-center gap-3 font-bold py-2 p-1 w-[85%] border rounded-sm"
              to="/add-language"
            >
              <GrLanguage /> Til qo`shish
            </Link>
            <Link
              onClick={() => setOpenMenu(false)}
              className="flex items-center gap-3 font-bold py-2 p-1 w-[85%] border rounded-sm mt-2"
              to="/add-translate"
            >
              <MdGTranslate /> Translete qo`shishish
            </Link>
            <Link
              onClick={() => setOpenMenu(false)}
              className="flex items-center gap-3 font-bold py-2 p-1 w-[85%] border rounded-sm mt-2"
              to="/add-category"
            >
              <TbCategoryPlus /> Categoriya qo`shish
            </Link>
            <Link
              onClick={() => setOpenMenu(false)}
              className="flex items-center gap-3 font-bold py-2 p-1 w-[85%] border rounded-sm mt-2"
              to="/add-praduct"
            >
              <RiAddCircleLine /> Mahsulot qo`shishish
            </Link>
            <Link
              onClick={() => setOpenMenu(false)}
              to="/"
              className="flex items-center gap-3 mt-48 bg-red-600 w-[50%] text-[18px] font-bold p-2 text-white rounded"
            >
              Log out <MdOutlineLogout size={25} />{" "}
            </Link>
          </div>
        </div>
      </div>
      {/* <span className="block top-0 left-0 absolute w-[100%] h-[100%] bg-slate-400"></span> */}
    </>
  );
};

export default HamburgerMenu;
