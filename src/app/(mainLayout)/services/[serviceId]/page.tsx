import { Metadata } from "next";
import ServicesData from "../_component/ServicesData";
import ServicesData2 from "../_component/ServiceData2";


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

      <ServicesData2 />
    </>
  );
};

export default ServicePage;

