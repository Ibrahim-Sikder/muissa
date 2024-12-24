'use client'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
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

]

export default function TaxTalksLanding() {

  return (
    <div className="  text-white relative overflow-hidden">


      {slides.map((slide, index) => (
        <div key={index} className="container mx-auto md:px-4  grid lg:grid-cols-2 gap-8 items-center py-16">
          <div className="space-y-8">
            {/* Red banner */}
            <div className="relative">
              <div className="absolute -left-4 top-0 bg-[#1591A3] text-white py-2 px-4 transform -rotate-12">
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
                backgroundColor: '#1591A3',
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


          </div>

          <RegistrationForm />
        </div>
      ))}

      {/* <TaxExpertBanner /> */}
    </div>
  )
}
