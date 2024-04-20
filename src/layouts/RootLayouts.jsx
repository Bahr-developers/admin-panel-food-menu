import { Outlet, useParams } from "react-router-dom";
import MiniNav from "../components/MiniNav";
import Navbar from "../components/Navbar";
import { useRestaurant } from "../utils/RestaurantUtils";

const RootLayouts = () => {
  // get Restaurant id
  const { restaurantId } = useParams();

  // get all restaurant
  const getRestaurant = useRestaurant();

  // get restaurant by id
  const getRestaurantById = getRestaurant?.data?.data.find(
    (restourant) => restaurantId === restourant.id
  );

  return (
    <main>
      <Navbar restaurant={getRestaurantById} />
      <hr className="mb-3" />
      <div className="container mx-auto px-3">
        <Outlet />
      </div>
      <MiniNav />
    </main>
  );
};

export default RootLayouts;
