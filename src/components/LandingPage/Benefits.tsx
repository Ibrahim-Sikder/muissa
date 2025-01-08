'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import company from '../../../src/assets/landingpage/Final-1.jpg';
import { Button } from '@mui/material';
import Link from 'next/link';

export default function BusinessSection() {
  // Animation Variants
  const imageVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const textVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: i * 0.3 },
    }),
  };

  return (
    <div className="sectionMargin text-white py-8 md:px-4 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16">
          {/* Image with Animation */}
          <motion.div
            className="rounded-md lg:w-full w-[90%] flex-1"
            variants={imageVariant}
            initial="hidden"
            animate="visible"
          >
            <Image alt="services" src={company} className="w-full h-full object-cover" />
          </motion.div>

          {/* Text Content with Sequential Animation */}
          <motion.div
            className="space-y-4 text-center flex-1"
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-2xl md:text-5xl font-bold mb-5 w-full"
              custom={0}
              variants={textVariant}
            >
              ব্যবসায় বিনিয়োগ হবে এখন নিজের ডিসিশনে।
            </motion.h1>

            <motion.h1
              className="text-2xl md:text-3xl font-bold mb-5"
              custom={1}
              variants={textVariant}
            >
              আসন সংখ্যা সিমিত ।
            </motion.h1>

            <motion.p
              className="text-base"
              custom={2}
              variants={textVariant}
            >
              আপনাকে একজন দক্ষ বিনিয়োগ কারি হিসেবে গড়ে তুলতে ও আপনার আর্থিক সচ্ছলতা বৃদ্ধি লক্ষ্য আমরা দিচ্ছি কমপ্লিট Investment Solutions. আমাদের পরামর্শ ও সহযোগিতায় আপনি নিজেই গ্রহণ করতে পারবেন নিজ বিনিয়োগ সিদ্ধান্ত।
            </motion.p>
            <motion.p
              className="text-base"
              custom={2}
              variants={textVariant}
            >
              নিজের আয় থেকে সঞ্চয় করা যেমন বুদ্ধিমানের কাজ, ঠিক তেমম সঞ্চয়ের একটি অংশ বিনিয়োগ করা স্মার্ট ও যুগোপযোগী ডিসিশন।  উন্নত দেশ গুলোর দিকে তাকালে দেখা যায় ঔ সকল দেশের নাগরিকদের মধ্যে সঞ্চয়ের পাশাপাশি বিনিয়োগের ও অভ্যাস রয়েছে।
            </motion.p>

            <motion.div
              custom={3}
              variants={textVariant}
            >
              <Button
                component={Link}
                href="https://www.muissa.com/membership"
                variant="contained"
                sx={{
                  backgroundColor: '#fff',
                  color: '#1591A3',
                  padding: {
                    xs: '8px 16px',
                    sm: '10px 24px',
                    md: '12px 32px',
                  },
                  fontWeight: 'bold',
                  fontSize: {
                    xs: '18px',
                    sm: '18px',
                    md: '20px',
                  },
                  borderRadius: '8px',
                  borderBottom: '6px solid #1591A3',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out',
                  zIndex: 1,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#1591A3',
                    transition: 'left 0.5s ease-in-out',
                    zIndex: -1,
                  },
                  '&:hover': {
                    color: '#fff',
                    transform: 'translateY(-2px)',
                    borderBottom: '5px solid #fff',
                    '&::before': {
                      left: 0,
                    },
                  },
                  '&:active': {
                    transform: 'scale(0.98) translateY(0)',
                    boxShadow: `
                      0 1px 2px rgba(255, 255, 255, 0.1),
                      0 2px 4px rgba(255, 255, 255, 0.1),
                      0 4px 8px rgba(255, 255, 255, 0.1),
                      0 8px 16px rgba(255, 255, 255, 0.1),
                      0 16px 32px rgba(255, 255, 255, 0.1)
                    `,
                    transition: 'all 0.1s',
                  },
                }}
              >
                Apply Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
