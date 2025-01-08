
"use client";

import React from "react";
import { FaEnvelope, FaPhoneVolume } from "react-icons/fa";
import "./Header.css";
import logo from "../../../../src/assets/logo/footer.svg";
import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Container } from "@mui/material";
import Link from "next/link";
import TopBar from "./TopBar";
import MuissaButton from "../Button";

const LandingPageHeader = () => {
    return (
        <header>
            <TopBar />
            <Container className="headerWrap mt-5 ">
                <div className="flex flex-col lg:flex-row flex-wrap items-center  justify-center xl:justify-between gap-3 md:gap-5  space-y-4 md:space-y-0">

                    <Link href="https://www.muissa.com/">
                        <div className="flex items-center justify-center">
                            <Image className="w-44 md:w-56" src={logo} alt="logo" />
                        </div>
                    </Link>


                    <div className="flex flex-col md:flex-row items-center justify-center xl:justify-end space-y-4 md:space-y-0 md:space-x-6">
                        {/* Phone Section */}
                        <div className="flex items-center">
                            <FaPhoneVolume className="headerIcon -rotate-45 mr-2 text-lg" />
                            <div>
                                <b className="block text-sm md:text-base">09613-244844</b>
                                <small>(Mon-Sat)</small>
                            </div>
                        </div>

                        {/* Email Section */}
                        <div className="flex items-center">
                            <FaEnvelope className="headerIcon mr-2 text-lg" />
                            <div>
                                <b className="block text-sm md:text-base">Mail us for help</b>
                                <small>info@muissa.com</small>
                            </div>
                        </div>

                        {/* Address Section */}
                        <div className="flex items-center">
                            <HiOutlineLocationMarker className="headerIcon mr-2 text-lg" />
                            <div>
                                <b className="block text-sm md:text-base">
                                    House-08, Road-07, Block-C,
                                </b>
                                <small>Banasree, Dhaka-1219</small>
                            </div>
                        </div>
                    </div>
                    <MuissaButton />
                </div>
            </Container>
        </header>
    );
};

export default LandingPageHeader;
