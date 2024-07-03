"use client";
import React, { useState, useEffect } from "react";
import { FaRegComment } from "react-icons/fa";
import { VscClose } from "react-icons/vsc";
import MessageModal from "./MessageModal";
import { getCookie } from "@/helpers/Cookies";
import { useRouter } from "next/navigation";

const MessageIcon = () => {
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const token = getCookie("mui-token");

  useEffect(() => {
    setIsClient(true);
    if (!token) {
      router.push('/login');
    }
  }, [token, router]);

  const handleOpen = () => {
    if (token) {
      setOpen(true);
    } else {
      router.push('/login');
    }
  };

  const handleClose = () => setOpen(false);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <div className="message rounded-full p-2 z-[9999999999999] fixed bg-[#1591A3] text-white bottom-5 right-1 cursor-pointer transition-all duration-75 shadowStyle">
        {open ? (
          <VscClose
            className="transition ease-in-out delay-75"
            onClick={handleClose}
            size={45}
          />
        ) : (
          <FaRegComment
            onClick={handleOpen}
            size={35}
            className="transition ease-in-out delay-75"
          />
        )}
      </div>
      {open && <MessageModal close={handleClose} />}
    </div>
  );
};

export default MessageIcon;
