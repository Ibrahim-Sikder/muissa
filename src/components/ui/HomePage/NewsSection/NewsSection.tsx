"use client";
import React from "react";
import "./NewsSection.css";
import Image from "next/image";
import Container from "../Container/Container";
import { Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Link from "next/link";
import { useGetAllBlogsQuery } from "@/redux/api/blogApi";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Loader from "@/components/Loader";

const NewsSection = () => {

  const { data: blogData, error, isLoading, refetch } = useGetAllBlogsQuery({
 
    
  });
  if (isLoading) {
    return <Loader/>
  }
  if (error || !blogData) {
    return <h1 className="mt-10 flex items-center justify-center text-3xl capitalize ">Oops! Blogs data not found! </h1>

  }

  const buttonStyle = {
    fontSize: {
      xs: "10px",
      md: "12px",
    },

    width: {
      xs: "75px",
      md: '100px'
    },
    height: "30px",
    padding: "0px",
  };

  return (
    <Container className="sectionMargin">
      <SectionTitle
        title="আমাদের ব্লগ"
        subtitle="আমাদের ব্লগে আপনি পাবেন ব্যবসায়িক উন্নয়ন, পরিচালনা, এবং বিপণন নিয়ে মূল্যবান লেখা। সফল উদ্যোক্তাদের অনুপ্রেরণামূলক গল্প এবং তাদের সফলতার রহস্য জানুন।"
      />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1500}
        loop={true}
        pagination={{
          clickable: true,
        }}

        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper mt-10"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {blogData && blogData?.blogs?.map((blog: any) => (
          <SwiperSlide key={blog._id}>
            <div className="newsWraps">
              <div className="newsCard flex flex-col justify-between">
                <div>
                  <Image src={blog.blog_image} alt={blog.title} width={500} height={300} />
                  <div className="date">
                    <h1>{new Date(blog.createdAt).getDate()}</h1>
                    <small>{new Date(blog.createdAt).toLocaleString('default', { month: 'short' }).toUpperCase()}</small>
                  </div>
                </div>
                <div className="newsContent">
                  <h4>{blog.title}</h4>
                  <p className="my-4">{blog.short_description.slice(0, 100)}</p>
                  <Button sx={buttonStyle} component={Link} href={`/news/${blog._id}`}>
                    <span>
                      Read More
                      <KeyboardArrowRightIcon sx={{ fontSize: "15px", marginLeft: "8px" }} />

                    </span>
                  </Button>


                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default NewsSection;
