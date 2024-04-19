
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import './swiper.css'

const FoodCard = () => {
    return (
        <div className="card-food w-[47%]">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide><img src="https://picsum.photos/id/132/180/130" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://picsum.photos/id/112/180/130" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://picsum.photos/id/157/180/130" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://picsum.photos/id/159/180/130" alt="" /></SwiperSlide>
                </Swiper>
                <h2 className="font-bold">Magal</h2>
                <p className="h-[50px] overflow-hidden">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
            </div>
    );
};

export default FoodCard;