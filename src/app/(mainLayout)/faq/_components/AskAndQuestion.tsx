"use client";

import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Container from "@/components/ui/HomePage/Container/Container";
import { useState } from "react";
import './AskAndQuestion.css';
import { useGetAllFaqsQuery } from "@/redux/api/faqApi";
import Loader from "@/components/Loader";

type Tfaq = {
  question: string,
  answer: string
}
export default function AskAndQuestion() {
  const [isOpen, setIsOpen] = useState(null);
  const { data: faqData, isLoading, error } = useGetAllFaqsQuery({});

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error loading FAQs</div>;
  }

  const toggle = (idx: any) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  return (
    <Container>
      <div className="sectionMargin">
        <div className="">
          <div className="leading-8 relative">
            <div className="divider faqDevider"></div>
            <h1>You can learn more</h1>
            <h1>from our asked questions</h1>
          </div>
        </div>
      </div>
      <div className="mx-4 mt-10 rounded-lg border font-sans my-10">
        {faqData.map((faq: Tfaq, idx: number) => (
          <div key={idx} className="border-b p-4">
            <button
              onClick={() => toggle(idx)}
              className="flex h-full w-full items-center justify-between py text-black font-medium"
            >
              <span className="text-xl">{faq.question}</span>
              <span className="rounded-full bg-blue-100 p-2">
                <svg
                  className="ml-8 mr-7 shrink-0 fill-[#00A2FF]"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && "!rotate-180"
                      }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && "!rotate-180"
                      }`}
                  />
                </svg>
              </span>
            </button>
            <div
              className={`grid overflow-hidden text-gray-900 transition-all duration-300 ease-in-out ${isOpen === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
            >
              <div className="overflow-hidden">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
