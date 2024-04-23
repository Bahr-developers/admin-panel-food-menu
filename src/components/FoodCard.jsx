import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import "./swiper.css";
import { IMG_BASE_URL } from "../constants/server.BaseUrl";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FoodUtils } from "../utils/food.utils";
import { QUERY_KEY } from "../Query/QUERY_KEY";
import { LazyLoadImage } from "react-lazy-load-image-component";
import EditFood from "../Modals/EditFood";
import DeleteFood from "./DeleteFood";
import toast from "react-hot-toast";

const FoodCard = (props) => {
  const queryClient = useQueryClient();
  const deletaFood = useMutation({
    mutationFn: FoodUtils.deleteFood,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.food] });
      toast.success("Delete success");
    },
    onError: (err) => {
      console.log(err, "Delete food");
      toast.error("Error");
    },
  });

  const foodInformation = props?.food;

  return (
    <div className="card-food relative w-[47%] md:w-[31%] mb-2">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {foodInformation.image_urls.length ? (
          foodInformation.image_urls.map((img, index) => {
            return (
              <SwiperSlide
                key={Math.random()}
                className="h-[150px] sm:h-[200px] md:h-[300px] w-full"
              >
                <LazyLoadImage
                  src={`${IMG_BASE_URL}${img}`}
                  alt={`slider img ${index + 1}`}
                  className="h-full w-full rounded-t-[10px]"
                  height={300}
                  effect="blur"
                />
              </SwiperSlide>
            );
          })
        ) : (
          <div className="h-[100px] text-center">no image</div>
        )}
      </Swiper>
      <EditFood data={foodInformation} />
      <DeleteFood deleteFn={deletaFood.mutate} id={foodInformation.id} />
      <h2 className="font-bold py-1 text-xl truncate">
        {foodInformation.name}
      </h2>
      <p className="overflow-hidden">{foodInformation.description}</p>
      <p className="mb-1">{foodInformation.price} so'm</p>
      <span
        className={`p-[2px] rounded inline-block ${
          foodInformation?.food_status === "available"
            ? "text-white bg-green-500"
            : foodInformation?.food_status === "preparing"
            ? "bg-yellow-500 text-white"
            : "bg-red-500 text-white"
        }`}
      >
        {foodInformation.food_status}
      </span>
      <p
        className={`my-1 text-center rounded py-1 text-white md:text-lg ${
          foodInformation.status === "active" ? "bg-green-400" : "bg-red-400"
        }`}
      >
        {foodInformation.status}
      </p>
      <p>{foodInformation.price} so`m</p>
      <p>{foodInformation.food_status}</p>
      <p>{foodInformation.status}</p>
    </div>
  );
};

export default FoodCard;
