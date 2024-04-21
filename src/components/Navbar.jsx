import { BiSearch } from "react-icons/bi";
import logo from "../assets/image/login_logo.png";
import { useRef } from "react";
import { IMG_BASE_URL } from "../constants/server.BaseUrl";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ALL_DATA } from "../Query/ALL_DATA";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import UserDropdown from "./UserDropdown";

const Navbar = (props) => {
  const queryClient = useQueryClient();

  const SearchBtn = useRef();

  const getLanguage = ALL_DATA.useLanguage();

  const restaurant = props?.restaurant;

  const showSerchInput = () => {
    SearchBtn.current.classList.toggle("translate-y-[-70px]");
  };

  // for change language
  if (!localStorage.getItem("language")) localStorage.setItem("language", "uz");

  const [languageChange, setLangaugeChange] = useState(
    localStorage.getItem("language")
  );

  const handleChangeLanguage = (e) => {
    localStorage.setItem("language", e.target.value);
    setLangaugeChange(e.target.value);
    queryClient.invalidateQueries({ type: "all" });
  };

  return (
    <nav className="navbar py-3">
      <div className="container px-3 relative mx-auto">
        <div className="navbar-wrap w-[100%] flex justify-between items-center">
          <Link to={`/${restaurant?.id}`} className="flex items-center gap-2">
            {restaurant?.image_url ? (
              <LazyLoadImage
                width={50}
                className="rounded-md"
                src={`${IMG_BASE_URL}${restaurant?.image_url}`}
                alt="restuarant Img"
                effect="blur"
                height={50}
              />
            ) : (
              <LazyLoadImage
                width={50}
                className="rounded-md"
                src={logo}
                effect="blur"
                height={50}
                alt="default restaurant img"
              />
            )}
            <h2>{restaurant?.name}</h2>
          </Link>

          <input
            ref={SearchBtn}
            className="focus:border-blue-400 left-auto absolute p-3 ease-in duration-300 border translate-y-[-70px] rounded-lg block w-[55%] md:w-[70%]"
            type="search"
            name="searchFood"
            placeholder="Search food"
          />

          <div className="flex items-center gap-3">
            <button
              onClick={showSerchInput}
              className="text-gray-500 active:text-gray-800"
            >
              <BiSearch size={30} />
            </button>
            <select
              onChange={handleChangeLanguage}
              value={languageChange}
              className="border-2 py-[2px] px-2 rounded focus:outline-none focus:border-gray-500 text-gray-800 cursor-pointer"
            >
              {getLanguage?.data?.map((language) => (
                <option value={language.code} key={language._id}>
                  {language.code}
                </option>
              ))}
            </select>

            <UserDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
