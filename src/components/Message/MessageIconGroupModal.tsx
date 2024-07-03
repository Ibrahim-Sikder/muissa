import React, { useState } from "react";
import Image from "next/image";
import icon from "../../assets/icon/chat.png";
import icon2 from "../../assets/icon/chat2.png";
import icon3 from "../../assets/icon/chat3.png";
import MessageModal from "./MessageModal";
import Link from "next/link";
import { getCookie } from "@/helpers/Cookies";
import { useRouter } from "next/navigation";

interface MessageIconGroupModalProps {
  open: boolean;
}

const MessageIconGroupModal: React.FC<MessageIconGroupModalProps> = ({
  open,
}) => {
  const [messageOpen, setMessageOpen] = useState(false);
  const router = useRouter()
  const token = getCookie("mui-token");

  const handleOpen = () => {
    if (token) {
      setMessageOpen(true)
    } else {
      router.push('/login')
    }
  };
  const handleClose = () => setMessageOpen(false);

  return (

    <div
      className={`fixed right-3 bottom-[80px] transition-all message duration-300 cursor-pointer z-[9999999999999] ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        } space-y-2 z-[99]`}
    >
      {/* <Image width={50} src={icon2} alt="message" /> */}
      <div>
        <Link
          href="https://wa.me/8801403852850?text=Hi! how can we help you ?"
          target="_blank"
        >
          <Image width={50} src={icon3} alt="message" />
        </Link>
      </div>

      <Image
        onClick={handleOpen}
        width={50}
        className="messageIcon "
        src={icon}
        alt="message"
      />
      {messageOpen && <MessageModal close={handleClose} />}
    </div>
  );
};

export default MessageIconGroupModal;
