import { Metadata } from "next";
import ServicesData from "../_component/ServicesData";

export const metadata: Metadata = {
  title: "Muissa Consulting | Services ",
  description: 'Muissa consulting business services'
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

