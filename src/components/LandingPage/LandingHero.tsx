'use client'
import { motion } from 'framer-motion';
export default function TaxTalksLanding() {

  const textAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' }
    },
  };

  return (
    <div className="text-white h-auto lg:h-[40vh] mt-[50px] md:mt-[30px] lg:sectionMargin ">


      <div className="flex  flex-col justify-center items-center">

        <motion.h3
          className="text-xl lg:text-2xl font-bold leading-tight text-center "
          initial="initial"
          animate="animate"
          variants={textAnimation}
        >
          কেমন হয় যদি নিজেই সম্পূর্ণ ভাবে বিনিয়োগের জন্য প্রতিষ্ঠান নির্বাচন করতে পারেন?

        </motion.h3>

        <motion.h1
          className="text-4xl text-center justify-center  xl:text-left lg:text-5xl font-bold leading-tight mt-5  items-center "
          initial="initial"
          animate="animate"
          variants={textAnimation}
        >
          বিনিয়োগ করা একটি স্মার্ট আর্থিক সিদ্ধান্ত যা আপনাকে আপনার
        </motion.h1>
        <motion.h1
          className="text-4xl text-center justify-center  xl:text-left lg:text-5xl font-bold leading-tight mt-3  items-center "
          initial="initial"
          animate="animate"
          variants={textAnimation}
        >
          দীর্ঘমেয়াদী লক্ষ্যে পৌঁছাতে সাহায্য করতে পারে।
        </motion.h1>

        <motion.p
          className="max-w-5xl mx-auto mt-5 text-xl text-center"
          initial="initial"
          animate="animate"
          variants={textAnimation}
        >
          আমাদের দেশের বিনিয়োগকারি গন সঠিক এনালাইসিসের ভিত্তিতে বিনিয়োগের সিদ্ধান্ত নেননা বললেই চলে, আবার অনেকের কাছে বিনিয়োগ হলো প্রতারণা। যার ফলে বেশিরভাগ মানুষই বিনিয়োগে অনাগ্রহী। বিনিয়োগে যাবার আগে আপনাকে জানতে হবে বিনিয়োগের কৌশল, ঝুঁকি পরিমাণ করা, উক্ত প্রতিষ্ঠানের বিনিয়োগ সম্ভবতা যাচাই করা সহো নানা ধরনের আর্থিক পরিকল্পনা করতে হবে বিনিয়োগের পূর্ব।

        </motion.p>
        <motion.p
          className="max-w-5xl mx-auto mt-3 text-xl text-center"
          initial="initial"
          animate="animate"
          variants={textAnimation}
        >
          কেবল আমরাই কোন প্রতিষ্ঠানে বিনিয়োগে পূর্বে ঔ প্রতিষ্ঠানের বিনিয়োগ সম্ভবতা যাচাই করে থাকি ৭০+ গানিতিক বিশ্লেষণ ও কৌশলের মাধ্যমে এছাড়াও প্রতিষ্ঠানের বিভিন্ন ডাটা এনালাইসিসের মাধ্যমে বিনিয়োগ সিদ্ধান্ত গ্রহনে সহায়তা করে থাকি।


        </motion.p>
      </div>
    </div>
  );
}
