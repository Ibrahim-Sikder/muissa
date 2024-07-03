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
  if (isLoading) {
    return <Loader />
  }


  if (error || !reviewData) {
    return <h1 className="mt-10 flex items-center justify-center text-3xl capitalize ">Oops! Reviews data not found! </h1>

  }


  const clientData = [
    {
      id: 1,
      name: "জাহিদুল ইসলাম",
      position: "CEO, ABC ট্রেডিং",
      review:
        '"Muissa এর সাথে কাজ করে আমরা অত্যন্ত সন্তুষ্ট। তাদের প্রোডাক্ট সাপোর্ট এবং মার্কেটিং সাপোর্ট আমাদের ব্যবসায় উল্লেখযোগ্য প্রবৃদ্ধি এনে দিয়েছে। তাদের টিম খুবই পেশাদার এবং প্রতিটি সমস্যা দ্রুত সমাধান করতে সক্ষম।"',
      img: user,
    },
    {
      id: 2,
      name: "মাসুদা রহমান",
      position: "পরিচালক, ডেল্টা কর্পোরেশন",
      review:
        '"Muissa আমাদের বিক্রয় কৌশল উন্নয়নে অপরিসীম ভূমিকা রেখেছে। তাদের সেলস সাপোর্ট এবং আইটি সাপোর্ট আমাদের ব্যবসায়িক কার্যক্রমে নতুন গতিশীলতা এনে দিয়েছে। আমরা তাদের সেবা গ্রহণ করে খুবই সন্তুষ্ট।"',
      img: user,
    },
    {
      id: 3,
      name: "তাহমিনা খান",
      position: "মালিক, ক্রিয়েটিভ সলিউশনস",
      review:
        '"Muissa এর ফান্ডিং সাপোর্ট এবং ইনভেস্টমেন্ট সাপোর্ট আমাদের স্টার্টআপকে দাঁড়াতে সাহায্য করেছে। তাদের পরামর্শ এবং সমর্থন ছাড়া আমরা এই সফলতা অর্জন করতে পারতাম না। আমি তাদের সেবার প্রতি কৃতজ্ঞ।"',
      img: user,
    },
    {
      id: 4,
      name: "আরিফ হোসেন",
      position: "ম্যানেজিং ডিরেক্টর, সানরাইজ ইন্টারন্যাশনাল",
      review:
        '"Muissa এর ডেলিভারি সাপোর্ট আমাদের সরবরাহ চেইনকে দ্রুত এবং নির্ভরযোগ্য করেছে। তাদের সহযোগিতায় আমরা ক্রেতাদের কাছে পণ্য পৌঁছাতে সময়মতো সক্ষম হয়েছি। তাদের সেবার মান সত্যিই অসাধারণ।"',
      img: user,
    },
    {
      id: 4,
      name: "নাহিদা পারভীন",
      position: "ফিন্যান্স ম্যানেজার, টেক সলিউশনস লিমিটেড ",
      review:
        '"Muissa এর সেবার মান এবং পেশাদারিত্ব সম্পর্কে বলার অপেক্ষা রাখে না। তাদের আইটি সাপোর্ট এবং প্রোডাক্ট সাপোর্ট আমাদের ব্যবসায় অগ্রগতি এনেছে। তাদের সাথে কাজ করা আমাদের জন্য খুবই ফলপ্রসূ হয়েছে।"',
      img: user,
    },
    {
      id: 4,
      name: "মাহমুদুল হাসান",
      position: "সেলস ম্যানেজার, প্রিমিয়াম প্রোডাক্টস ",
      review:
        '"Muissa এর সেলস এবং মার্কেটিং সাপোর্ট আমাদের বিক্রয় বৃদ্ধি এবং মার্কেট শেয়ার অর্জনে সহায়ক হয়েছে। তাদের কার্যকরী কৌশল এবং সঠিক পরামর্শ আমাদের ব্যবসায়িক সফলতার জন্য অপরিহার্য ছিল।"',
      img: user,
    },
  ];

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
