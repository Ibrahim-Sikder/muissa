"use client";

import Container from "@/components/ui/HomePage/Container/Container";
import React, { useEffect, useRef, useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneVolume,
  FaTwitter,
} from "react-icons/fa";
import "./Header.css";
import logo from "../../../assets/logo/logo.png";
import Image from "next/image";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineLocationMarker,
  HiOutlineMenu,
  HiOutlineMenuAlt1,
  HiOutlineX,
} from "react-icons/hi";
import { Box, Button, Divider } from "@mui/material";
import Link from "next/link";

import { getCookie, removeCookie } from "@/helpers/Cookies";
import { usePathname, useRouter } from "next/navigation";

import { AccountCircle, Notifications, TrendingFlat } from "@mui/icons-material";

import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";


const Header = () => {
  const [user, setUser] = useState({});
  const [stickyMenu, setStickyMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(true);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const { push } = useRouter();
  const pathname = usePathname()
  const token = getCookie("mui-token");

  const toggleMobileMenu = () => {
    setMobileMenu((mobileMenu) => !mobileMenu);
    // navRef.current.classList.toggle("active");
    console.log("menu click ");
  };

  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    if (token) {
      setAuthenticated(true);
    } else if (!token) {
      setAuthenticated(false);
    }
  }, [pathname, token]);

  const logOut = () => {
    setAuthenticated(false);
    removeCookie("mui-token");
    return push("/");
  };

  function notificationsLabel(count: number) {
    if (count === 0) {
      return "no notifications";
    }
    if (count > 99) {
      return "more than 99 notifications";
    }
    return `${count} notifications`;
  }


  return (
    <header>
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
      <Container className="headerWrap ">
        <div className=" flex items-center justify-between px-5 xl:px-0  ">
          <Link href="/">
            <div className="flex items-center ">
              <Image
                className="w-10 md:w-16 mr-2 rounded-full "
                src={logo}
                alt="logo"
              />

              <div>
                <h3 className="text-sm md:text-xl lg:text-2xl">Muissa</h3>
                {/* <small className="md:mt-0 -mt-2 ">
                  Business Consulting Ltd.
                </small> */}
              </div>
            </div>
          </Link>
          <div className="xl:flex items-center  space-x-6  hidden ">
            <div className="flex ">
              <FaPhoneVolume className="headerIcon -rotate-45 mr-2" />
              <div>
                <b className="block text-sm"> 09613-244844 </b>
                <span>(Mon-Sat)</span>
              </div>
            </div>
            <div className="flex ">
              <FaEnvelope className="headerIcon mr-2" />
              <div>
                <b className="block text-sm">Mail us for help </b>
                <small>muissaltd@gmail.com</small>
              </div>
            </div>
            <div className="flex ">
              <HiOutlineLocationMarker className="headerIcon mr-2" />
              <div>
                <b className="block text-sm">House-08, Road-07, Block-C, </b>
                <span> Banasree,Dhaka-1219</span>
              </div>
            </div>
          </div>

          <div onClick={toggleMobileMenu} className="xl:hidden block">
            {mobileMenu ? (
              <HiOutlineMenu size={30} />
            ) : (
              <HiOutlineX size={30} />
            )}
          </div>
        </div>
        <div
          className={`${stickyMenu
            ? "stickyMenu "
            : "menubarWrap flex items-center justify-between  "
            }`}
        >
          <div
            className={`${stickyMenu
              ? "stickyContainer "
              : " flex items-center justify-between w-full "
              }`}
          >
            <div className={`${stickyMenu ? "stickyLogo" : "hidden"}`}>
              <Box component={Link} href="/">
                <div className="flex items-center ">
                  <Image
                    className="w-10 md:w-16 mr-2 rounded-full "
                    src={logo}
                    alt="logo"
                  />

                  <div>
                    <h3 className="text-sm md:text-xl lg:text-2xl">Muissa</h3>
                    {/* <small>Business Consulting Ltd. </small> */}
                  </div>
                </div>
              </Box>
            </div>

            <nav className="menuItemsBarWraps">
              <div className="flex items-center justify-between pr-4 ">
                <ul className="flex navItems items-center ">
                  <li>
                    <Link href="/">Home</Link>
                  </li>

                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact </Link>
                  </li>

                  {authenticated ? (
                    <>
                      <li onClick={logOut} className="cursor-pointer text-white">
                        <p>Logout</p>
                      </li>
                      <Box component={Link} href='/profile'> <AccountCircle /></Box>
                    </>
                  ) : (
                    <li>
                      <Link href="/login">Login</Link>
                    </li>
                  )}

                  {/* <li>
                  <Link href="/login">Login</Link>
                </li> */}


                </ul>
                <IconButton aria-label={notificationsLabel(100)}>
                  <Badge badgeContent={100} color="primary">
                    <Notifications
                      className="notificationIcon"
                      sx={{ fontSize: "30px", color: "#fff" }}
                    />
                  </Badge>
                </IconButton>
              </div>
            </nav>
            <div className=" membershipBtn">
              <Button
                className="membershipBtn"
                LinkComponent={Link}
                href="/membership"
              >
                <span>
                  Membership
                  <TrendingFlat className="membershipIcon" />
                </span>
              </Button>
            </div>
            <div onClick={toggleMobileMenu} className="xl:hidden block">
              {mobileMenu ? (
                <HiOutlineMenu size={30} />
              ) : (
                <HiOutlineX size={30} />
              )}
            </div>
          </div>
        </div>

        <div className={mobileMenu ? `activeMobileMenu` : `mobileMenu`}>
          <Link href="/">
            <div className="flex items-center xl:hidden ">
              {" "}
              <Image
                className="w-12 mr-2 rounded-full "
                src={logo}
                alt="logo"
              />
              <div>
                <h5>Muissa </h5>
                {/* <small>Business Consulting Ltd </small> */}
              </div>
            </div>
          </Link>
          <nav className="mt-5">
            <ul className="stickyNavItems">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact </Link>
              </li>
              <li>
                <Link href="/profile">Profile </Link>
              </li>
              {authenticated ? (
                <li onClick={logOut} className=" cursor-pointe"><p>Logout</p></li>
              ) : (
                <li>
                  <Link href="/login">Login</Link>
                </li>
              )}
            </ul>
          </nav>
          <div>
            <Divider />
            <ul className="mt-3">
              <li>
                <Link href="/profile">Account</Link>
              </li>
              <li>
                <Link href="/profile/service">My services</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
