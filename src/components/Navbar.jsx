import { BiSearch } from "react-icons/bi";
import logo from "../assets/image/login_logo.png";
import { useRef } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { IMG_BASE_URL } from "../constants/server.BaseUrl";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Navbar = (props) => {
  const SearchBtn = useRef();

  const restaurant = props?.restaurant;

  const showSerchInput = () => {
    SearchBtn.current.classList.toggle("translate-y-[-70px]");
  };

  return (
    <nav className="navbar py-3">
      <div className="container px-3 relative mx-auto">
        <div className="navbar-wrap w-[100%] flex justify-between items-center">
          {/* <HamburgerMenu/> */}
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
            className="focus:border left-auto absolute p-3 ease-in duration-300 border translate-y-[-70px] rounded-lg block w-[70%]"
            type="search"
            name="searchFood"
            placeholder="Search food"
          />
          <button onClick={showSerchInput} className="text-[30px]">
            <BiSearch />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
