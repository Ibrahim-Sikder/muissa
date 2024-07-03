


import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/HomePage/Container/Container";
import logo from "../../../assets/logo/footer.svg";
import { MapIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import NewsLetter from "./NewsLetter";
import { TServices } from "@/types";

const Footer = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/services/get-services`, {
    cache: "no-store",
  });
  const servicesData = await res.json();
  const sortedServices: TServices[] = servicesData?.data.services?.sort((a: TServices, b: TServices) => a.priority - b.priority);

  if (!sortedServices || !servicesData) {
    return <h1 className="mt-10 flex items-center justify-center text-3xl capitalize ">Oops! Services data not found! </h1>

  }

  return (
    <>
      <NewsLetter />
      <Box sx={{ background: "#002140", marginTop: "", padding: "80px 0px" }}>
        <Container>
          <div className="flex text-center flex-col md:flex-row justify-center gap-14 md:justify-between  text-white md:text-left">
            <div className="md:w-[500px] w-full px-4">
              <div className="space-y-4">
                <Image
                  className="w-32 mx-auto md:mx-0 md:w-56 "
                  src={logo}
                  alt="logo"
                />
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <EnvelopeIcon className="h-6 w-6" />
                  <a href="mailto:muissaltd@gmail.com" className="text-blue-500">
                    muissaltd@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <PhoneIcon className="h-6 w-6" />
                  <a href="tel:09613244844" className="text-blue-500">
                    09613244844
                  </a>
                </div>


                <div>
                  <Link
                    href="https://wa.me/8801403852850?text=Hi! how can we help you ?"
                    target="_blank"
                  >
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <FaWhatsapp size={24} />
                      <p>01403-852850</p>
                    </div>
                  </Link>
                </div>

                <div className="flex items-center gap-2 mt-4 justify-center md:justify-start">
                  <a
                    href="https://www.facebook.com/profile.php?id=61558510933789"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/muissaltd?igsh=Nnp4M2d1M2pvMGtr"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/muissa-business-consulting-ltd/"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="md:text-left w-full md:w-auto px-4">
              <h4>Our Company</h4>
              <ul className="space-y-5 mt-5">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>Agency partner</li>
                <li>Case studies</li>
                <li>Careers</li>
              </ul>
            </div>

            <div className="md:text-left w-full md:w-auto px-4">
              <h4>Services</h4>
              <ul className="space-y-5 mt-5">
                <li><Link href={`/services?tab=${encodeURIComponent('ফান্ডিং সাপোর্ট')}`}>Funding Support</Link></li>
                <li><Link href={`/services?tab=${encodeURIComponent('ইনভেস্টমেন্ট সাপোর্ট')}`}>Investment Support</Link></li>
                <li><Link href={`/services?tab=${encodeURIComponent('মার্কেটিং সাপোর্ট')}`}>Marketing Support</Link></li>
                <li><Link href={`/services?tab=${encodeURIComponent('আইটি সাপোর্ট')}`}>IT Support</Link></li>
                <li><Link href={`/services?tab=${encodeURIComponent('প্রোডাক্ট সাপোর্ট')}`}>Product Support</Link></li>
                <li><Link href={`/services?tab=${encodeURIComponent('সেলস সাপোর্ট')}`}>Sale Support</Link></li>
                <li><Link href={`/services?tab=${encodeURIComponent('ডেলিভারি সাপোর্ট')}`}>Delivery Supports</Link></li>
              </ul>

            </div>
            {/* <div className="md:text-left w-full md:w-auto px-4">
              <h4>Services</h4>

              {
                sortedServices.map((data) => (
                  <ul key={data._id} className="space-y-5 mt-5">
                    <Link href={`/services/${data._id}`}>  <li>{data?.category}</li></Link>
                  </ul>
                ))

              }

            </div> */}
            <div className="md:text-left w-full md:w-auto px-4">
              <h4>Resources</h4>
              <ul className="space-y-5 mt-5">
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href={`/news/667a5187e2981142105e84b8`}>Blog</Link>
                </li>
                <li>
                  <Link href="/faq">FAQs</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-conditions">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
          <Box
            sx={{
              border: "1px dashed lightgray",
              marginBottom: "20px",
              marginTop: "100px",
            }}
          ></Box>

          <Stack
            direction={{ xs: "column", md: "row" }}
            gap={2}
            justifyContent="space-between"
            alignItems="center"
            className="px-4"
            textAlign="center"
          >
            <Typography component="p" color="white">
              &copy;2024 Muissa Business Consulting Ltd. All Rights Reserved.
            </Typography>

            <Typography component="p" color="white">
              Technical Support & Maintenance by{" "}
              <Link href="https://softypy.com/" target="_blank" className="text-white underline">
                SoftyPy
              </Link>
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
