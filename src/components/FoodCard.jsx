
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import './swiper.css'
import { IMG_BASE_URL } from '../constants/server.BaseUrl';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FoodUtils } from '../utils/food.utils';
import { QUERY_KEY } from '../Query/QUERY_KEY';

const FoodCard = ({data}) => {
    console.log(data);
    const queryClient = useQueryClient()
    const deletaFood = useMutation({
        mutationFn: FoodUtils.deleteFood,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: [QUERY_KEY.food]})
        }
    })
    return (
            <div className="card-food w-[47%]">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    {data.image_urls.map(img => {
                        return <SwiperSlide key={Math.random()}><img src={`${IMG_BASE_URL}${img}`} alt="" /></SwiperSlide>
                    })}
                </Swiper>
                <h2 className="font-bold">{data.name}</h2>
                <p className="h-[50px] overflow-hidden">{data.description}</p>
            </div>
    );
};

export default FoodCard;