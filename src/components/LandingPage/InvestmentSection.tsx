'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import company from '../../../src/assets/landingpage/Final-3.jpg';

export default function InvestmentSection() {
  return (
    <div className="sectionMargin text-white py-8 md:px-4 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16">
          {/* Image Section with Zoom Animation */}
          <motion.div
            className="flex-1"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <div className="rounded-md lg:w-[80%] w-[90%] overflow-hidden">
              <Image alt="services" src={company} className="w-full h-full object-cover" />
            </div>
          </motion.div>


          <motion.div
            className="space-y-4  flex-1"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
          >
            <p className="leading-8 text-xl">

              বাংলাদেশে নানা কারনে বিনিয়োগ ঝুঁকি পূর্ণ, তার ভেতর অন্যতম কারন হচ্ছে বিনিয়োগ সম্ভবতা যাচাই বলতে আমরা বুঝি অন্যর কথায় প্রভাবিত হয়ে বিনিয়োগে যাওয়া।  আসুন সচেতন হই, বিনিয়োগ কালচারকে এগিয়ে নিয়ে যাই। দেশের অর্থনৈতিক প্রবৃদ্ধি তরান্বিত করি। বিনিয়োগ বিষয়ক যেকোনো পরামর্শের জন্য আমরা দিচ্ছি One to One Consulting. Best wishes for your investment journey.


            </p>
           
          </motion.div>


        </div>
      </div>
    </div>
  );
}
