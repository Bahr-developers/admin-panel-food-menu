import { NavLink, useParams } from "react-router-dom";
import { ALL_DATA } from "../Query/ALL_DATA";

const MiniNav = () => {
  const { restaurantId } = useParams();

  const getCategories = ALL_DATA.useCategory(restaurantId);

  return (
    <footer
      className={`fixed z-20 bottom-0 left-0 w-full bg-red-500 ${
        getCategories?.data?.data.length ? " block" : " hidden"
      }`}
    >
      <div className="flex justify-between items-center px-3 container mx-auto py-2">
        {getCategories?.data?.data?.map((category) => (
          <NavLink
            key={category.id}
            to={`/${restaurantId}/${category.id}`}
            className="text-white  md:text-xl footerLink py-1 px-3"
          >
            {category?.name}
          </NavLink>
        ))}
      </div>
    </footer>
  );
};

export default MiniNav;
