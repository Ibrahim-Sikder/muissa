import React from "react";
import "./TeamSection.css";
import team from "../../../../../assets/team/team5.jpg";
import Image from "next/image";
import { Divider } from "@mui/material";
import Container from "@/components/ui/HomePage/Container/Container";

const TeamSection = () => {
  const teamData = [
    {
      id: 1,
      name: "Akib Chowdhury",
      position: "CEO",
      description:
        " I asked for an extra customization in Process section and the author made special amendments in the theme live on my website. Customer support is amazing really 24/24.",
    },
    {
      id: 1,
      name: "Akib Chowdhury",
      position: "CEO",
      description:
        " I asked for an extra customization in Process section and the author made special amendments in the theme live on my website. Customer support is amazing really 24/24.",
    },
    {
      id: 1,
      name: "Akib Chowdhury",
      position: "CEO",
      description:
        " I asked for an extra customization in Process section and the author made special amendments in the theme live on my website. Customer support is amazing really 24/24.",
    },
  ];

  return (
    <Container className="sectionMargin">
      <div className="grid grid-cols-1  md:grid-cols-2 place-items-center  gap-10">

        <div className="leading-8 relative">
          <div className="divider"></div>
          <h1>It’s always a joy to hear </h1>
          <h1> that the work we do, has</h1>
          <h1>positively reviews.</h1>
        </div>
        <p className="lg:w-[400px] leading-9">
          আমাদের বিশেষজ্ঞ দল বিভিন্ন ক্ষেত্রের দক্ষ ও অভিজ্ঞ পেশাদার দ্বারা গঠিত। তাদের অভিজ্ঞতা ও দক্ষতা আমাদের ক্লায়েন্টদের সেরা সেবা প্রদানে সক্ষম করে। 
        </p>
      </div>
      {/* <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 md:mt-10 place-items-center place-content-center " >
        {
          teamData.map((data) => (
            <div key={data.id} className="teamCardWrap">
              <div className="teamCard">
                <p>
                  I asked for an extra customization in Process section and the
                  author made special amendments in the theme live on my website.
                  Customer support is amazing really 24/24.
                </p>
              </div>
              <div className="teamMembar">
                <div className="teamMembarImg  ">
                  <Image src={team} alt="team" />
                </div>
                <div>
                  <h5>Akib Chowdhury</h5>
                  <small>CEO </small>
                </div>
              </div>
            </div>
          ))
        }
      </div> */}
    </Container>
  );
};

export default TeamSection;
