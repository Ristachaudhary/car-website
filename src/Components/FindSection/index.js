import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import Card from "../Card/card";

const FindSection = () => {
  return (
    <>
      <div className="findSection-container">
        <h1 className="findSection-container-h1">Find your drive</h1>
        <p className="findSection-container-p">
          Explore the world's largest car sharing marketplace
        </p>
        <div className="findSection-container-slider-div"></div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={5}
        navigation={true}
        breakpoints={{
          340:{
            width:200,
            slidesPerView:1,
          },
          768:{
            width:768,
            slidesPerView:2,
          },
          1040:{
            width:1040,
            slidesPerView:4,
          },
        }}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Card
            img={
              "https://images.unsplash.com/photo-1551817280-6d59c77ce1b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2151&q=80"
            }
            make={"Nissan"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            img={
              "https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qk13fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            }
            make={"BMW"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            img={
              "https://images.unsplash.com/photo-1608994751987-e647252b1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lcmNlZGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            }
            make={"Mercedez"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            img={
              "https://images.unsplash.com/photo-1573074617613-fc8ef27eaa2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hldnJvbGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            }
            make={"Chevrolet"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            img={
              "https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF1ZGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            }
            make={"Audi"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            img={
              "https://images.unsplash.com/photo-1551817280-6d59c77ce1b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2151&q=80"
            }
            make={"Nissan"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            img={
              "https://images.unsplash.com/photo-1551817280-6d59c77ce1b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2151&q=80"
            }
            make={"Nissan"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default FindSection;
