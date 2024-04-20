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

const FoodCard = ({ data }) => {
  const queryClient = useQueryClient();
  console.log(data);
  const deletaFood = useMutation({
    mutationFn: FoodUtils.deleteFood,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.food] });
      toast.success("Delete success")
    },
    onError: (err)=>{
      console.log(err, "Delete food");
      toast.error("Error")
    }
  });

  return (
    <div className="card-food w-[47%] md:w-[31%]">
      <div className="image-food-wrap relative">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {data.image_urls.length ? (
            data.image_urls.map((img, index) => {
                return (
                <SwiperSlide
                    key={Math.random()}
                    className="h-[150px] sm:h-[200px] md:h-[300px] w-full"
                >
                    <LazyLoadImage
                    src={`${IMG_BASE_URL}${img}`}
                    alt={`slider img ${index + 1}`}
                    className="h-full w-full object-contain"
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
        <EditFood data={data}/>
        <DeleteFood deleteFn={deletaFood.mutate} id={data.id}/>
      </div>
      <h2 className="font-bold">{data.name}</h2>
      <p className="h-[50px] overflow-hidden">{data.description}</p>
    </div>
  );
};

export default FoodCard;
