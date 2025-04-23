
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/HomePage/Container/Container";
import logo from "../../../assets/logo/footer.svg";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import {
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";
import NewsLetter from "./NewsLetter";
import FooterService from "./FooterService";

const FooterData = () => {


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
                                    <a href="mailto:info@muissa.com" className="text-blue-500">
                                        info@muissa.com
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
                                            <p>01337486528</p>
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
                            <h4>আমাদের প্রতিষ্ঠান</h4>
                            <ul className="space-y-5 mt-5">
                                <li>
                                    <Link href="/about">আমাদের সম্পর্কে</Link>
                                </li>
                                <li>এজেন্সি পার্টনার</li>
                                <li>কেস স্টাডি</li>
                                {/* <li>ক্যারিয়ার</li> */}
                            </ul>
                        </div>


                        <FooterService />
                        <div className="md:text-left w-full md:w-auto px-4">
                            <h4>রিসোর্স</h4>
                            <ul className="space-y-5 mt-5">
                                <li>
                                    <Link href="/contact">যোগাযোগ করুন</Link>
                                </li>
                                <li>
                                    <Link href={`/news/667a5187e2981142105e84b8`}>ব্লগ</Link>
                                </li>
                                <li>
                                    <Link href="/faq">প্রশ্নোত্তর</Link>
                                </li>
                                <li>
                                    <Link href="/privacy-policy">গোপনীয়তা নীতি</Link>
                                </li>
                                <li>
                                    <Link href="/terms-conditions">শর্তাবলী</Link>
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
                            &copy;২০২৪ মুইসা বিজনেস কনসাল্টিং লিমিটেড। সর্বস্বত্ব সংরক্ষিত।
                        </Typography>

                        <Box display='flex' gap={1}>
                            <Typography component="p" color="white">

                                <Link
                                    href="https://softypy.com/"
                                    target="_blank"
                                    className="text-white underline"
                                >
                                    SoftyPy
                                </Link>
                            </Typography>
                            <Typography component="p" color="white">

                                দ্বারা প্রযুক্তিগত সহায়তা ও রক্ষণাবেক্ষণ
                            </Typography>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </>
    );
};

export default FooterData;