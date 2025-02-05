/* eslint-disable react/no-unescaped-entities */

"use client";

import React from "react";
import "./Client.css";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Container from "../Container/Container";
import user from "../../../../assets/news/user.jpg";
import Image from "next/image";
import { AccountCircle, FormatQuote, Person } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Pagination, Autoplay } from "swiper/modules";
import { Pagination, Autoplay } from "swiper/modules";
import { useGetAllReviewsQuery } from "@/redux/api/reviewApi";
import Loader from "@/components/Loader";


type Treview = {
  name: string,
  designation: string,
  review_image: string,
  message: string,
  _id: string,

}

const Client = () => {

  const [currentPage, setCurrentPage] = React.useState(1);
  const [limit, setLimit] = React.useState('');


  const { data: reviewData, error, isLoading, refetch } = useGetAllReviewsQuery({});
  // if (isLoading) {
  //   return <Loader />
  // }


  if (error || !reviewData) {
    return <h1 className="mt-10 flex items-center justify-center text-3xl capitalize ">Oops! Reviews data not found! </h1>

  }


  console.log('this is review data ', reviewData)
  return (
    <div className="clientWraps sectionMargin pt-24">
      <Container>
        <SectionTitle
          title="আমাদের গ্রাহকদের মতামত"
          subtitle="
          আমাদের গ্রাহকদের মতামত আমাদের ব্যবসার উন্নয়নের জন্য অত্যন্ত মূল্যবান। আমরা প্রতিনিয়ত তাদের সন্তুষ্টি এবং প্রয়োজনীয়তার প্রতি অঙ্গীকারবদ্ধ।"
        />
        <Swiper
          spaceBetween={30}
          // autoplay={{
          //   delay: 1500,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 1,
            },
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper clientSlider"
        >
          {reviewData?.reviews?.map((data: Treview) => (
            <SwiperSlide key={data._id}>
              <div className="clientCard mt-20">
                <div className="quoteWrap">
                  <FormatQuote sx={{ fontSize: "50px" }} />
                </div>
                <div className="clientContent">
                  <p className="leading-7">{data.message.slice(0, 200)}</p>
                  <div className="clientWrap">
                    {/* clientImgWraps */}
                    <div className="">
                      <Person className="clientIcon" />
                      {/* <Image width={50} height={50} src={data.review_image} alt="user" /> */}
                    </div>
                    <div>
                      <h4>{data.name}</h4>
                      <small>{data.designation}</small>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Client;
