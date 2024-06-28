"use client";

import React from "react";
import "./HeroSection.css";
import hero from "../../../../assets/banner/slider3.png";
import hero2 from "../../../../assets/banner/slider2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {

  const buttonStyle = {
    width: { xs: "100px", md: "200px", sm: "140px", xl: "230px" },
    height: { md: "50px", xs: "35px", xl: "50px" },
    fontSize: { md: "16px", xs: "9px", xl: "16px" },
    borderRadius: "30px",
    background: "#1591A3",
  };


  
  return (
    <div className="heroSectionWrap">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1500}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="heroContentWraps ">
            <div className="bannerImgWrap">
              <Image src={hero} alt="banner" />
            </div>
            <div className=" commonContent heroContent2">
              <div className="space-y- md:space-y-5">
                <h1 className="animate-fadeInRight">ব্যবসার সাফল্যের জন্য</h1>
                <h2 className="md:mt-5 text-[#1591A3] animate-fadeInLeft">
                  বিশ্বস্ত পরামর্শ সেবা
                </h2>
                <p className="mb-2 md:mb-0 md:mt- animate-fadeInRight">
                  আপনার ব্যবসায়িক সাফল্যের পথে বিশ্বস্ত সাথী
                </p>
                <Button component={Link} href="/membership" sx={buttonStyle}>
                  <span>Get Membership</span>
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="heroContentWraps ">
            <div className="bannerImgWrap">
              <Image src={hero2} alt="banner" />
            </div>
            <div className=" commonContent heroContent">
              <div className="space-y- md:space-y-5">
                <h1 className="animate-fadeInRight">ব্যবসার সাফল্যের জন্য</h1>
                <h2 className="md:mt-5 text-[#1591A3] animate-fadeInLeft">
                  বিশ্বস্ত পরামর্শ সেবা
                </h2>
                <p className="mb-2 md:mb-0 md:mt- animate-fadeInRight">
                  আপনার ব্যবসায়িক সাফল্যের পথে বিশ্বস্ত সাথী
                </p>
                <Button component={Link} href="/membership" sx={buttonStyle}>
                  <span>Get Membership</span>
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
