"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaStaylinked, FaUserLock, FaUserTie, FaUsers } from "react-icons/fa";
import { useEffect, useState } from "react";
import "./Profile.css";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { getCookie, removeCookie } from "@/helpers/Cookies";
import { Button } from "@mui/material";
import { Logout } from "@mui/icons-material";
const ProfileSidebar = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);


  const isActive = (path: string) => activeLink === path;

  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const { push } = useRouter();
  const token = getCookie("mui-token");
  const logOut = () => {
    setAuthenticated(false);
    removeCookie("mui-token");
    return push("/");
  };

  return (
    <div className=" profileSideBar ">
      <div className="lg:space-y-5 profileItems">


        <div>
          <Link href="/profile">
            <div
              className={`flex items-center space-x-2 ${isActive("/profile") ? "activeProfileLink" : ""
                }`}
            >
              <FaUserTie size={25} />
              <span>My Account</span>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/profile/membership">
            <div
              className={`flex items-center space-x-2 ${isActive("/profile/membership") ? "activeProfileLink" : ""
                }`}
            >
              <FaUsers size={25} />
              <span>Membership</span>
            </div>
          </Link>
        </div>

        <div>
          <Link href="/profile/services">
            <div
              className={`flex items-center space-x-2 ${isActive("/profile/services") ? "activeProfileLink" : ""
                }`}
            >
              <FaStaylinked size={25} />
              <span>My Services</span>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/profile/my-payment">
            <div
              className={`flex items-center space-x-2 ${isActive("/profile/my-payment") ? "activeProfileLink" : ""
                }`}
            >
              <HiCurrencyBangladeshi size={25} />
              <span>My Payment</span>
            </div>
          </Link>
        </div>

        <div>
          <Link href="/profile/change-password">
            <div
              className={`flex items-center space-x-2 ${isActive("/profile/change-password") ? "activeProfileLink" : ""
                }`}
            >
              <FaUserLock size={25} />
              <span>Change Password</span>
            </div>
          </Link>
        </div>
        <div className="hidden lg:block ">
          <Button onClick={logOut}

          >
            <Logout />
            <span>Log Out </span>
          </Button>


        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
