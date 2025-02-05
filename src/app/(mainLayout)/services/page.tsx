
import { Metadata } from "next";
import ServicesData from "./_component/ServicesData";

export async function generateMetadata(): Promise<Metadata> {


  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/services/get-services`);
  const servicesData = await res.json();



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

