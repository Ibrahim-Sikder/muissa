import React from "react";
import "./Experience.css";
import Container from "../Container/Container";
import { EmojiEvents, InsertEmoticon } from "@mui/icons-material";
import { FaReact } from "react-icons/fa";
import { VscCoffee } from "react-icons/vsc";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
const Experience = () => {
  return (
    <>
      <div className="experienceWraps sectionMargin ">
        <Container>
          <div className="experienceContent">
            <SectionTitle
              title="আমাদের অভিজ্ঞতা"
              subtitle="Muissa এ, আমরা আমাদের দীর্ঘ বছরের অভিজ্ঞতা এবং পেশাদারিত্ব নিয়ে গর্বিত। আমাদের প্রতিটি সদস্যই ব্যবসায়িক পরামর্শ ও সমর্থন প্রদানের ক্ষেত্রে বিশেষজ্ঞ এবং প্রতিটি ক্ষেত্রে শ্রেষ্ঠত্বের দিকে অগ্রসর হওয়ার জন্য প্রতিশ্রুতিবদ্ধ।"
            />


            <div>
              <div className="grid grid-cols-2 md:grid-cols-2   lg:grid-cols-4 mt-16 place-content-between gap-10 justify-between lg:w-[1000px]  xl:w-[1280px] ">
                <div className="iconWraps ">
                  <FaReact className="experienceIcon" />
                  <h1 className="text-4xl md:text-6xl font-bold mt-5 mb-3 text-[#fff]">
                    150+
                  </h1>
                  <p className="tracking-[3px]">Successful Project</p>
                </div>
                <div className="iconWraps ">
                  <InsertEmoticon className="experienceIcon" />
                  <h1 className="text-4xl md:text-6xl font-bold mt-5 mb-3 text-[#fff]">
                    150+
                  </h1>
                  <p className="tracking-[3px]">Happy Client </p>
                </div>
                <div className="iconWraps ">
                  <EmojiEvents className="experienceIcon" />
                  <h1 className="text-4xl md:text-6xl font-bold mt-5 mb-3 text-[#fff]">
                    ++
                  </h1>
                  <p className="tracking-[3px]">Business Awards </p>
                </div>
                <div className="iconWraps ">
                  <VscCoffee className="experienceIcon" />
                  <h1 className="text-4xl md:text-6xl font-bold mt-5 mb-3 text-[#fff]">
                    950+
                  </h1>
                  <p className="tracking-[3px]"> Cup Coffee </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Experience;
