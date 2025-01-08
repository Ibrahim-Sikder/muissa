import React from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,

} from "react-icons/fa";
import "./Header.css";
import Link from 'next/link';
const TopBar = () => {
    return (
        <div className=" bg-[#1591A3] md:h-12  p-3 ">
            <div className=" topBar  flex flex-col md:flex-row items-center gap-2  justify-between ">
                <p>House-08, Road-07, Block-C, Banasree,Dhaka-1219 </p>
                <div className="flex space-x-3">
                    <Link
                        href="https://www.facebook.com/profile.php?id=61558510933789"
                        target="_blank"
                    >
                        <FaFacebookF className="topIcon" />
                    </Link>

                    <Link
                        href="https://www.instagram.com/muissaltd?igsh=Nnp4M2d1M2pvMGtr"
                        target="_blank"
                    >
                        <FaInstagram className="topIcon" />
                    </Link>

                    <Link
                        href="https://www.linkedin.com/company/muissa-business-consulting-ltd/"
                        target="_blank"
                    >
                        <FaLinkedinIn className="topIcon" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopBar;