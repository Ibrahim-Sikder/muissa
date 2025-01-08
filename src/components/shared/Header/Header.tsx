"use client";

import Container from "@/components/ui/HomePage/Container/Container";
import React, { useEffect, useRef, useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneVolume,
} from "react-icons/fa";
import "./Header.css";
import logo from "../../../assets/logo/navber logo .svg";
import Image from "next/image";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineLocationMarker,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";
import { Box, Button, Divider } from "@mui/material";
import Link from "next/link";
import { getCookie, removeCookie } from "@/helpers/Cookies";
import { usePathname, useRouter } from "next/navigation";
import { AccountCircle, Notifications, TrendingFlat } from "@mui/icons-material";

import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import TopBar from "./TopBar";


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

  const buttonStyle = {
    width: "80px",
    fontSize: '12px'
  }


  return (
    <header className={
      pathname === '/investment' ||
        pathname === '/investment/one-to-one-consultancy-book-metting' ||
        pathname === '/thank-you-consultant'
        ? 'hidden'
        : 'block'
    }>
      <TopBar />
      <Container className="headerWrap ">
        <div className=" flex items-center justify-between px-5 xl:px-0  ">
          <Link href="/">
            <div className="flex items-center ">
              <Image
                className="w-28 md:w-40"
                src={logo}
                alt="logo"
              />


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
                <small>info@muissa.com </small>
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
                    className="w-28 md:w-40"
                    src={logo}
                    alt="logo"
                  />


                </div>
              </Box>
            </div>

            <nav className="menuItemsBarWraps">
              <div className="flex items-center justify-between pr-4 ">
                <ul className="flex navItems items-center ">
                  <li>
                    <Link href="/" onClick={toggleMobileMenu}>Home</Link>
                  </li>

                  <li>
                    <Link href="/services" onClick={toggleMobileMenu}>Services</Link>
                  </li>

                  <li>
                    <Link href="/about" onClick={toggleMobileMenu}>About</Link>
                  </li>
                  <li>
                    <Link href="/contact" onClick={toggleMobileMenu}>Contact </Link>
                  </li>

                  {authenticated ? (
                    <>
                      <li onClick={logOut} className="cursor-pointer text-white">
                        <p>Logout</p>
                      </li>
                      <Box sx={{ margin: '0px 10px ' }} component={Link} href='/profile'> <AccountCircle /></Box>
                    </>
                  ) : (
                    <li>
                      <Link href="/login" onClick={toggleMobileMenu}>Login</Link>
                    </li>
                  )}

                  {/* <li>
                  <Link href="/login">Login</Link>
                </li> */}


                </ul>
                <div className="hidden xl:block ml-2">
                  <IconButton aria-label={notificationsLabel(100)}>
                    <Badge badgeContent={100} color="primary">
                      <Notifications
                        className="notificationIcon"
                        sx={{ fontSize: "30px", color: "#fff" }}
                      />
                    </Badge>
                  </IconButton>
                </div>
              </div>
            </nav>
            <div className="membershipBtn">
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
          <Link href="/" onClick={toggleMobileMenu}>
            <div className="flex items-center xl:hidden ">
              {" "}
              <Image
                className="w-28 "
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
                <Link href="/" onClick={toggleMobileMenu}>Home</Link>
              </li>

              <li>
                <Link href="/services" onClick={toggleMobileMenu}>Services</Link>
              </li>
              <li>
                <Link href="/membership" onClick={toggleMobileMenu}>Membership</Link>
              </li>
              <li>
                <Link href="/about" onClick={toggleMobileMenu}>About</Link>
              </li>
              <li>
                <Link href="/contact" onClick={toggleMobileMenu}>Contact </Link>
              </li>


            </ul>
          </nav>
          <div>
            <Divider />
            <ul className="mt-3">
              {authenticated ? (
                <>
                  <li>
                    <Link href="/profile" onClick={toggleMobileMenu}>My Profile </Link>
                  </li>
                  <li>
                    <Link href="/profile" onClick={toggleMobileMenu}>My Account</Link>
                  </li>
                  <li>
                    <Link href="/profile/service" onClick={toggleMobileMenu}>My services</Link>
                  </li>
                  <li onClick={logOut}
                    className="cursor-pointer"><Button sx={buttonStyle}>Logout</Button>

                  </li>
                </>
              ) : (
                <li>
                  <div className="flex gap-2 items-center">
                    <Link href="/login" onClick={toggleMobileMenu}><Button sx={buttonStyle}>Login</Button></Link>
                    <Link href="/register" onClick={toggleMobileMenu}><Button sx={buttonStyle}>Register</Button></Link>
                  </div>
                </li>
              )}

            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
