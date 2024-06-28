


import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/HomePage/Container/Container";
import logo from "../../../assets/logo/logo.png";
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

  return (
    <>
      <NewsLetter />
      <Box sx={{ background: "#002140", marginTop: "", padding: "80px 0px" }}>
        <Container>
          <div className="flex text-center flex-col md:flex-row justify-center gap-14 md:justify-between  text-white md:text-left">
            <div className="md:w-[500px] w-full px-4">
              <div className="space-y-4">

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
            {/* <div className="md:text-left w-full md:w-auto px-4">
              <h4>Services</h4>
              <ul className="space-y-5 mt-5">
                <li>Product Support</li>
                <li>Sale Support</li>
                <li>Marketing Support</li>
                <li>Delivery Supports</li>
                <li>IT Support</li>
                <li>Funding Support</li>
                <li>Investment Support</li>
              </ul>
            </div> */}
            <div className="md:text-left w-full md:w-auto px-4">
              <h4>Services</h4>

              {
                sortedServices.map((data) => (
                  <ul key={data._id} className="space-y-5 mt-5">
                    <Link href={`/services/${data._id}`}>  <li>{data?.category}</li></Link>
                  </ul>
                ))

              }

            </div>
            <div className="md:text-left w-full md:w-auto px-4">
              <h4>Resources</h4>
              <ul className="space-y-5 mt-5">
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/news/6678112da2253429001e0e11">Blog</Link>
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
