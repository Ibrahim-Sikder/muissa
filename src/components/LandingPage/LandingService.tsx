'use client';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import { motion } from 'framer-motion';
import company from '../../../src/assets/landingpage/Final-5.jpg';
import CTAButton from './CTAButton';

const fadeInVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeInOut',
    },
  }),
};

export default function BusinessSection() {
  return (
    <div className="sectionMargin text-white py-8 md:px-4 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center justify-center place-items-center">
          {/* Text Section */}
          <motion.div
            className="space-y-6 text-center lg:text-left order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.h1
              className="text-2xl md:text-5xl font-bold mb-5"
              variants={fadeInVariant}
              custom={0}
            >
              About Our Business
            </motion.h1>
            <motion.h1
              className="text-2xl md:text-3xl font-bold mb-3"
              variants={fadeInVariant}
              custom={1}
            >
              আমরা বিনিয়োগকারীর একজন উপদেষ্টা হয়ে কাজ করি।
            </motion.h1>
            <List sx={{ color: 'white' }}>
              {[
                'আপনাকে একজন দক্ষ বিনিয়োগ কারি হিসেবে গড়ে তুলতে সকল ধরনের রিসোর্স সাপোর্ট দিয়ে থাকি।',
                'আমরা বিনিয়োগকারীর জন্য নিরাপদ বিনিয়োগের বাজার খুঁজে বেড় করি এবং কার্যকরী সিধান্ত গ্রহনে পরামর্শ দিয়ে থাকি।',
                'আমরা বিনিয়োগকারীর বিনিয়োগের প্রতিষ্ঠান নির্বাচনের জন্য একটি প্রতিষ্ঠানের Fundamental ও Technical বিষয়ে Analysis করে থাকি।',
                'বিনিয়োগকারীকে বিনিয়োগ পরামর্শ দেওয়ার পাশাপাশি তার বিনিয়োগকৃত প্রতিষ্ঠানকে সর্বদা মনিটরিং এবং ঐ প্রতিষ্ঠানের Market Analysis, Financial Report ও Sales Report পর্যবেক্ষনে রাখি। যার মাধ্যমে বিনিয়োগকারীর বিনিয়োগ নিরাপদ থাকে।',
                'আমরা বিনিয়োগকারীকে বিনিয়োগের কন্ডিশন নির্ধারণ করতে সহায়তা করে থাকি।',
                'বিনিয়োগ করার পূর্বেই বিনিয়োগকারীর জন্য উক্ত প্রতিষ্ঠানের বাজার সম্ভাবতা যাচাই ও প্রতিষ্ঠানের সমস্যা সমাধানের সক্ষমতা, প্রতিষ্ঠানের সচ্ছতা, প্রতিষ্ঠানের Risk Management, Business Marketing Strategy, Business Targeting Client ও ভোক্তার শ্রেণিবিন্যাস সহ আরো ৭০ টি বিশেষ কৌশলে উক্ত প্রতিষ্ঠানে বিনিয়োগ সম্ভাবতা যাচাই করে বিনিয়োগকারীকে রিপোর্ট দিয়ে থাকি। যাতে আমাদের বিনিয়োগকারীর বিনিয়োগ নিরাপদ থাকে ও লাভজনক হয়।',
                'আমরা বিনিয়োগকারীর বর্তমান অবস্থার মূল্যায়ন করে থাকি এবং আর্থিক উন্নতির জন্য বিনিয়োগ এর ক্ষেত্র গুলি চিহ্নিত করি ও বিনিয়োগকারীর জন্য আর্থিক পরিকল্পনা গ্রহন করে থাকি। এ সকল বিষয়ে কার্যকরি পরামর্শ প্রদান করে থাকি।'
              ].map((text, index) => (
                <motion.div
                  key={index}
                  variants={fadeInVariant}
                  custom={index + 2}
                >
                  <ListItem>
                    <ListItemIcon sx={{ color: 'white' }}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        style: { color: 'white' },
                      }}
                      primary={text}
                    />
                  </ListItem>
                </motion.div>
              ))}
            </List>
            <motion.p
              className="leading-7"
              variants={fadeInVariant}
              custom={7}
            >
              আমরা Investment Support এর মাধ্যমে বিনিয়োগে আগ্রহী Client দের বিনিয়োগ বিষয়ক পরামর্শ ও রিসোর্স প্রদান করে থাকি। বিনিয়োগকারীর হয়ে বিভিন্ন প্রতিষ্ঠানের Financial Data Analysis করে রিপোর্ট প্রদান করে থাকি এবং বিনিয়োগের সিদ্বান্ত নিতে সহায়তা করে থাকি। ইনভেস্টরের প্রয়োজন অনুসারে সেবা প্রদান করে থাকি এবং তার Requirements Fulfill করে থাকি।
            </motion.p>
            <CTAButton />
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="md:w-[500px] h-[300px] md:h-[500px] rounded-md overflow-hidden flex justify-center items-center  order-1 lg:order-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Image
              alt="services"
              src={company}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

