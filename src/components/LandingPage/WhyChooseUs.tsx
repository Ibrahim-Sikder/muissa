/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  return (
    <div className="sectionMargin bg-[#1591A3] text-white py-5 md:py-12 px-3 md:px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading Section */}
        <motion.h1
          className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          Muissa Business Consulting Ltd.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-3 md:mb-8 mt-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
        >
          - Unlock Your Business's True Potential with Muissa -
        </motion.p>
        <motion.h2
          className="text-xl md:text-3xl font-semibold mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
        >
          Why Choose Us?
        </motion.h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Reason #1',
              description:
                'We provide tailored investment strategies designed to maximize growth for every client. With years of expertise, our solutions are customized to your unique business needs.',
            },
            {
              title: 'Reason #2',
              description:
                'Comprehensive end-to-end support, from funding proposal creation to business documentation preparation, ensuring every step is seamless and successful.',
            },
          ].map((reason, index) => (
            <motion.div
              key={index}
              className="bg-[#005780] p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.8,
                ease: 'easeInOut',
                delay: index * 0.3, // Stagger animation for cards
              }}
            >
              <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
              <p>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
