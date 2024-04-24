import { Link, useParams } from "react-router-dom";
import { ALL_DATA } from "../Query/ALL_DATA";
import Loading from "../components/Loading";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IMG_BASE_URL } from "../constants/server.BaseUrl";

const Home = () => {
  const { restaurantId } = useParams();

  const getMainCategories = ALL_DATA.useCategory(restaurantId);

  if (getMainCategories.isLoading) return <Loading />;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-2xl">Home Page</h4>
        <button className="border p-2 rounded">Add main category</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-10">
        {getMainCategories?.data?.data.length ? (
          getMainCategories?.data?.data.map((category) => (
            <Link
              to={`${category.id}`}
              key={category?.id}
              className="border  mb-4 rounded-[10px] max-w-[500px] w-full"
            >
              <LazyLoadImage
                src={`${IMG_BASE_URL}${category.image_url}`}
                alt={category?.name}
                className="rounded-t-[10px] w-full h-full"
                height={280}
                effect="blur"
              />
              <h3 className="text-2xl py-2 pl-2">{category?.name.trim()}</h3>
            </Link>
          ))
        ) : (
          <div>No category yet:(</div>
        )}
      </div>
    </div>
  );
};

export default Home;
