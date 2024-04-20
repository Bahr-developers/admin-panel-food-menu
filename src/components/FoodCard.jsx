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

const FoodCard = (props) => {
  const queryClient = useQueryClient();

  const deletaFood = useMutation({
    mutationFn: FoodUtils.deleteFood,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.food] });
    },
  });

  const foodInformation = props?.food;

  return (
    <div className="card-food w-[47%] md:w-[31%] mb-2">
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
      <h2 className="font-bold py-1 text-xl truncate">
        {foodInformation.name}
      </h2>
      <p className="overflow-hidden">{foodInformation.description}</p>
      <p>{foodInformation.price} so'm</p>
      <p>{foodInformation.food_status}</p>
      <p>{foodInformation.status}</p>
    </div>
  );
};

export default FoodCard;
