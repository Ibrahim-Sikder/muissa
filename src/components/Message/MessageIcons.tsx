"use client";
import React, { useState, useEffect } from "react";
import { FaRegComment } from "react-icons/fa";
import { VscClose } from "react-icons/vsc";
import MessageIconGroupModal from "./MessageIconGroupModal";
import { usePathname } from "next/navigation";

const MessageIcons = () => {
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Always call usePathname at the top
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!isClient) {
    return null;
  }

  const hiddenPaths = [
    "/dashboard",
    "/dashboard/support",
    "/dashboard/invoice",
    "/dashboard/services",
    "/dashboard/reviews",
    "/dashboard/customers",
    "/dashboard/coupons",
    "/dashboard/payments",
    "/dashboard/invoices",
    "/dashboard/faqs",
    "/dashboard/policies",
    "/dashboard/users",
  ];

  const shouldHideChatbox = hiddenPaths.some((path) => pathname.startsWith(path));

  return (
    <div className={shouldHideChatbox ? "hidden" : ""}>
      <div className="message rounded-full p-2 z-[9999999999999] fixed bg-[#1591A3] text-white bottom-5 right-3 cursor-pointer transition-all duration-75 shadowStyle">
        {open ? (
          <VscClose
            className="transition ease-in-out delay-75"
            onClick={handleClose}
            size={35}
          />
        ) : (
          <FaRegComment
            onClick={handleOpen}
            size={30}
            className="transition ease-in-out delay-75"
          />
        )}
      </div>
      <MessageIconGroupModal open={open} />
    </div>
  );
};

export default MessageIcons;
