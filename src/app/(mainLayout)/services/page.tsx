
import { Metadata } from "next";
import ServicesData from "./_component/ServicesData";








export async function generateMetadata(): Promise<Metadata> {


  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/services/get-services`);
  const servicesData = await res.json();

  console.log(servicesData, 'from meta ')

  if (!servicesData) {
    return {
      title: "Services not found",
      description: "The requested services was not found.",
    };
  }


  return {
     title: "Muissa Consulting | Services",
    description: servicesData?.data?.services?.[0]?.seo_description || "Read the latest insights and updates.",
    keywords: servicesData?.data?.services?.[0].seo_keyword || "Muissa Consulting, Blog, News, Consulting insights, Business updates",
  };
}





// export const metadata: Metadata = {
//   title: "Muissa Consulting | Services ",
//   description: '"Muissa Consulting এর বিভিন্ন সেবা সমূহ পরিচালনা করুন এবং আপনার ব্যবসার প্রয়োজনীয় সমাধান পেতে সম্প্রসারিত সমাধান এবং গ্রাহকের সংস্কৃতি অনুসারে কাস্টমাইজড পরামর্শ পান।"',
//   keywords: "প্রোডাক্ট সাপোর্ট, সেলস সাপোর্ট, ডেলিভারি সাপোর্ট, আইটি সাপোর্ট, মার্কেটিং সাপোর্ট, ইনভেস্টমেন্ট সাপোর্ট, ফান্ডিং সাপোর্ট, বিস্তৃত পরামর্শ, ব্যবসায়িক সহায়তা, গ্রাহক-কেন্দ্রিক সমাধান"

// }


const ServicePage = () => {


  return (
    <>
      <div className="serviceDetailsWrap aboutWraps">
        <div className="aboutContent">
          <h1>Our Services</h1>
        </div>
      </div>

      <ServicesData />
    </>
  );
};

export default ServicePage;

