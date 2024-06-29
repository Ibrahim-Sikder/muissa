import React from 'react';
import {
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPhoneVolume,
  } from "react-icons/fa";
  import "./Header.css";
const TopBar = () => {
    return (
        <div className=" bg-[#152644] h-10 hidden xl:block">
        <div className=" topBar flex items-center justify-between ">
          <small>House-08, Road-07, Block-C, Banasree,Dhaka-1219 </small>
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/profile.php?id=61558510933789"
              target="_blank"
            >
              <FaFacebookF className="topIcon" />
            </a>

            <a
              href="https://www.instagram.com/muissaltd?igsh=Nnp4M2d1M2pvMGtr"
              target="_blank"
            >
              <FaInstagram className="topIcon" />
            </a>

            <a
              href="https://www.linkedin.com/company/muissa-business-consulting-ltd/"
              target="_blank"
            >
              <FaLinkedinIn className="topIcon" />
            </a>
          </div>
        </div>
      </div>
    );
};

export default TopBar;