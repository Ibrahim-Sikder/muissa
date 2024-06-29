
import "./Contact.css";
import Iframe from "react-iframe";
import ContactForm from "./_components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muissa Consulting | Contact ",
  description: '"Get in touch with Muissa Consulting for expert guidance and personalized solutions. Reach out to discuss your business needs and explore how we can collaborate to achieve your goals."',
  keywords: "Muissa Consulting, Contact us, Business inquiries, Consulting services, Expert guidance, Personalized solutions, Collaborate with us, Client communication, Business collaboration, Contact information ",
};



const Contact = () => {


  return (
    <>
      <div className="serviceDetailsWrap">
        <div className="aboutContent">
          <h1>যোগাযোগ করুন</h1>
        </div>
      </div>
      <ContactForm />

      <div className="sectionMargin">
        <section className="flex flex-row items-center justify-center w-full mx-auto">
          <Iframe
            className="lg:h-[400px] h-[300px]"
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.6004046481885!2d90.4282006!3d23.761625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3453c872c87237%3A0x8e37e15d15090297!2sMuissa%20Business%20Consulting%20Ltd.!5e0!3m2!1sen!2sbd!4v1718278412461!5m2!1sen!2sbd"
            width="100%"
            styles={{ border: 0 }}
            loading="lazy"
            position="relative"
          ></Iframe>
        </section>
      </div>
    </>
  );
};

export default Contact;
