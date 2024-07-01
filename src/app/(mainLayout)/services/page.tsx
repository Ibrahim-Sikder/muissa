
import { Metadata } from "next";
import ServicesData from "./_component/ServicesData";
import ServicesData2 from "./_component/ServiceData2";


export const metadata: Metadata = {
  title: "Muissa Consulting | Services ",
  description: '"Muissa Consulting এর বিভিন্ন সেবা সমূহ পরিচালনা করুন এবং আপনার ব্যবসার প্রয়োজনীয় সমাধান পেতে সম্প্রসারিত সমাধান এবং গ্রাহকের সংস্কৃতি অনুসারে কাস্টমাইজড পরামর্শ পান।"',
  keywords: "প্রোডাক্ট সাপোর্ট, সেলস সাপোর্ট, ডেলিভারি সাপোর্ট, আইটি সাপোর্ট, মার্কেটিং সাপোর্ট, ইনভেস্টমেন্ট সাপোর্ট, ফান্ডিং সাপোর্ট, বিস্তৃত পরামর্শ, ব্যবসায়িক সহায়তা, গ্রাহক-কেন্দ্রিক সমাধান"

}


const ServicePage = () => {


  return (
    <>
      <div className="serviceDetailsWrap aboutWraps">
        <div className="aboutContent">
          <h1>Our Services</h1>
        </div>
      </div>

      <ServicesData2 />
    </>
  );
};

export default ServicePage;

