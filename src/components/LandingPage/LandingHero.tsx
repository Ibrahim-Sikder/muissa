'use client'

import { CalendarDays, Clock } from 'lucide-react'
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { useRef } from 'react'
import { Swiper as SwiperClass } from "swiper";
import { Button } from '@mui/material'
import TaxExpertBanner from './TaxExperBanner';
import RegistrationForm from './RegForm';

const slides = [
  {
    title: "আপনার ব্যবসায়িক সাফল্যের পথে বিশ্বস্ত সাথী",
    points: [
      "ব্যবসায়ের জরুরী ফান্ড তৈরিতে পরামর্শ ও সহযোগিতা করা।",
      "প্রতিষ্ঠানের কাগজাদি তৈরিতে পরামর্শ ও সহযোগিতা করা।",
      "ফান্ডিং প্রোপোজাল তৈরি করা।"
    ],
    date: "২৭ ডিসেম্বর, ২০২৪",
    time: "রাত ১১ টা",
    image: "/placeholder.svg",
    info: {
      title: "MUISSA CONSULTANCY",
      points: [
        "IRS Certified Acceptance Agent",
        "Lead Consultant, Business Globalizer"
      ]
    }
  },
  {
    title: "আপনার ব্যবসায়িক সাফল্যের পথে বিশ্বস্ত সাথী",
    points: [
      "ব্যবসায়ের জরুরী ফান্ড তৈরিতে পরামর্শ ও সহযোগিতা করা।",
      "প্রতিষ্ঠানের কাগজাদি তৈরিতে পরামর্শ ও সহযোগিতা করা।",
      "ফান্ডিং প্রোপোজাল তৈরি করা।"
    ],
    date: "২৭ ডিসেম্বর, ২০২৪",
    time: "রাত ১১ টা",
    image: "/placeholder.svg",
    info: {
      title: "MUISSA CONSULTANCY",
      points: [
        "IRS Certified Acceptance Agent",
        "Lead Consultant, Business Globalizer"
      ]
    }
  },
  {
    title: "আপনার ব্যবসায়িক সাফল্যের পথে বিশ্বস্ত সাথী",
    points: [
      "ব্যবসায়ের জরুরী ফান্ড তৈরিতে পরামর্শ ও সহযোগিতা করা।",
      "প্রতিষ্ঠানের কাগজাদি তৈরিতে পরামর্শ ও সহযোগিতা করা।",
      "ফান্ডিং প্রোপোজাল তৈরি করা।"
    ],
    date: "২৭ ডিসেম্বর, ২০২৪",
    time: "রাত ১১ টা",
    image: "/placeholder.svg",
    info: {
      title: "MUISSA CONSULTANCY",
      points: [
        "IRS Certified Acceptance Agent",
        "Lead Consultant, Business Globalizer"
      ]
    }
  },
]

export default function TaxTalksLanding() {
  const swiperRef = useRef<SwiperClass | null>(null)

  return (
    <div className=" bg-zinc-900 text-white relative overflow-hidden">
      {/* Navigation arrows - now controlling Swiper */}
      <div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
          <span className="text-2xl">&larr;</span>
        </div>
      </div>
      <div
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
          <span className="text-2xl">&rarr;</span>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
      // onSwiper={(swiper) => {
      //   swiperRef.current = swiper;
      // }}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      // speed={1500}
      // loop={true}
      // spaceBetween={30}
      // centeredSlides={true}
      // pagination={{
      //   clickable: true,
      // }}
      // modules={[Autoplay]}
      // className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 items-center min-h-screen">
              <div className="space-y-8">
                {/* Red banner */}
                <div className="relative">
                  <div className="absolute -left-4 top-0 bg-red-500 text-white py-2 px-4 transform -rotate-12">
                    <p className="text-sm font-medium">MUISSA</p>
                  </div>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mt-16">
                  {slide.title}
                </h1>

                <ul className="space-y-3 text-lg text-gray-300">
                  {slide.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#EF4444',
                    '&:hover': {
                      backgroundColor: 'darkred',
                    },
                    color: 'white',
                    padding: '12px 32px',
                    fontSize: '16px',
                    borderRadius: '8px',
                  }}
                >
                  সদস্যপদ পান
                </Button>


                {/* Event details */}
                <div className="flex flex-wrap gap-8 mt-8">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-white/10 rounded-full">
                      <CalendarDays className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">তারিখ</p>
                      <p className="font-medium">{slide.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-white/10 rounded-full">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">সময়</p>
                      <p className="font-medium">{slide.time}</p>
                    </div>
                  </div>
                </div>
              </div>

              <RegistrationForm />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <TaxExpertBanner />
    </div>
  )
}
