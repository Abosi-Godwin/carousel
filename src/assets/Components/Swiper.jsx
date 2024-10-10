import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { users } from "../Datas/userDatas.js";
import { UserCard } from "./UserCard.jsx";

export default function Swips() {
    return (
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="mySwiper"
        >
            {users.map(data => (
                <SwiperSlide key={data.name}>
                    <UserCard userDetails={data} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
