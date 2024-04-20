import { BiSearch } from "react-icons/bi";
import logo from "../assets/image/login_logo.png";
import { useRef } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { IMG_BASE_URL } from "../constants/server.BaseUrl";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ALL_DATA } from "../Query/ALL_DATA";
import { useState } from "react";

const Navbar = (props) => {
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
    console.log(e.target.value);
    localStorage.setItem("language", e.target.value);
    setLangaugeChange(e.target.value);
  };

  return (
    <nav className="navbar py-3">
      <div className="container px-3 relative mx-auto">
        <div className="navbar-wrap w-[100%] flex justify-between items-center">
          <div className="flex items-center gap-2">
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
          </div>

          <input
            ref={SearchBtn}
            className="focus:border-blue-400 left-auto absolute p-3 ease-in duration-300 border translate-y-[-70px] rounded-lg block w-[70%]"
            type="search"
            name="searchFood"
            placeholder="Search food"
          />

          <div className="flex items-center gap-2">
            <button onClick={showSerchInput} className="text-[30px]">
              <BiSearch />
            </button>
            <select onChange={handleChangeLanguage} value={languageChange}>
              {getLanguage?.data?.map((language) => (
                <option value={language.code} key={language._id}>
                  {language.code}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
