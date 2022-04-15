import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.png";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
    {
        avatar: AVTR1,
        name: "Ho Ngoc Ha",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime beatae illum dolore, enim natus suscipit! Illum nam saepe asperiores debitis at fugiat aperiam error ullam?",
    },
    {
        avatar: AVTR2,
        name: "Tang Thanh Ha",
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi possimus hic sequi esse excepturi beatae ratione, ab accusantium? Eos omnis asperiores sapiente quasi ipsam, reiciendis magni deleniti repellat provident beatae.",
    },
    {
        avatar: AVTR3,
        name: "Lee Hyori",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est iusto, quos recusandae provident temporibus praesentium?",
    },
    {
        avatar: AVTR4,
        name: "Steve Job",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati rem alias soluta, laborum quaerat explicabo, maiores officia pariatur quidem sed. Pariatur tempore repellat voluptas, ipsa, dolorum ratione nisi ullam doloribus maxime inventore possimus dolorem beatae. Repellendus deserunt ullam, magnam eveniet ut iusto possimus sequi!",
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper
                className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {data.map(({ avatar, name, review }, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonials">
                            <div className="client__avatar">
                                <img src={avatar} />
                            </div>
                            <h5 className="client__name">{name}</h5>
                            <small className="client__review">{review}</small>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimonials;
