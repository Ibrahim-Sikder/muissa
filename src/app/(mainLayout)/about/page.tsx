import Container from "@/components/ui/HomePage/Container/Container";
import "./about.css";
import consult from "../../../assets/team/team6.png";
import Image from "next/image";
import CircleProgressBar from "./_components/CircleProgressBar";
import BrandSection from "@/components/ui/HomePage/BrandSection/BrandSection";
import Company from "@/components/ui/HomePage/Company/Company";
import WorkingProcess from "./_components/WorkingProcess";
import Award from "./_components/Award/Award";
import TeamSection from "./_components/TeamSection/TeamSectin";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Muissa Business Consultancy | About ",
  description: '"Learn about Muissa Business Consultancy , our mission, and the expert team driving success for our clients. Discover our values, approach, and how we deliver exceptional consulting services to empower your business."',
  keywords: "Muissa Consulting,Mission and vision, About Muissa, Consulting services, Business consulting, Expert team, Company values, Consulting approach, Empowering businesses, Client success ",
}






const About = () => {
  const value = 66;
  return (
    <>
      <div className="serviceDetailsWrap aboutWraps">
        <div className="aboutContent">
          <h1>About Us</h1>
        </div>
      </div>
      <Container className="sectionMargin">
        <div className="grid grid-cols-1  xl:grid-cols-2 place-items-center  gap-10">
          <div className=" order-2 xl:order-1">
            <div className="leading-8 relative">
              <div className="divider"></div>
              <h1> আমাদের লক্ষ্য ও উদ্দেশ্য</h1>
              <h1> সফলতার পথে</h1>
              <h1>  ভবিষ্যতের স্বপ্ন</h1>
            </div>

            <p className="mt-5 leading-9">
              আমাদের লক্ষ্য হলো স্থানীয় এবং আন্তর্জাতিক পর্যায়ে ব্যবসায়িক প্রতিষ্ঠানগুলিকে তাদের লক্ষ্যে পৌঁছাতে সহায়তা করা এবং তাদের সাফল্যের পথে একটি শক্তিশালী সহযোগী হিসেবে নিজেদের প্রতিষ্ঠিত করা।
            </p>

            <div className="grid gap-10 mt-8 grid-cols-1 place-content-center place-items-center lg:grid-cols-3">
              <CircleProgressBar />

            </div>
          </div>
          <div className="order-1 xl:order-2">
            <Image src={consult} alt="consult" />
          </div>
        </div>
        <WorkingProcess />

      </Container>
      <Award />
      <TeamSection />
      <Company />
    </>
  );
};

export default About;
