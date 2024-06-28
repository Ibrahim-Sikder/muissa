/* eslint-disable no-unused-vars */
"use client";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { FaLink, FaUserTie } from "react-icons/fa";
import logo from "../../assets/logo/logo.png";
import Image from "next/image";
import { VscClose } from "react-icons/vsc";
import { IoClose, IoLinkOutline } from "react-icons/io5";
import { io, Socket } from "socket.io-client";
import { getCookie } from "@/helpers/Cookies";
import { Box, Input, List, ListItem, ListItemText, Paper } from "@mui/material";
import { format } from "timeago.js";
import uploadFile from "@/helpers/uploadFile";
import { toast } from "sonner";

type TProps = {
  close: () => void;
};

interface Message {
  _id: string;
  createdAt: string;
  updatedAt: string;
  text: string;
  msgByUserId: string;
  seen: boolean;
  imageUrl: string;
}
interface ReceiverUserDetails {
  _id: string;
  name: string;
  auth: string;
  online: boolean;
  profile_pic: string;
}

type OnlineUser = string;

interface Sender {
  _id: string;
  name: string;
  auth: string;
  userId: string;
  profile_pic: string;
  updatedAt: Date;
}
interface Receiver {
  _id: string;
  name: string;
  auth: string;
  userId: string;
  profile_pic: string;
  updatedAt: Date;
}

interface LastMessage {
  _id: string;
  createdAt: string;
  updatedAt: string;
  text: string;
  msgByUserId: string;
  seen: boolean;
  imageUrl: string;
}

interface MyReceiverUser {
  _id: string;
  sender: Sender;
  receiver: Receiver;
  unseenMsg: string;
  lastMsg: LastMessage;
}

const MessageModal = ({ close }: TProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [myReceiverUser, setMyReceiverUser] = useState<MyReceiverUser>();

  const [senderUser, setSenderUser] = useState({
    _id: "",
    name: "",
    auth: "",
    profile_pic: "",
  });
  const [allMessage, setAllMessage] = useState<Message[]>([]);
  const [message, setMessage] = useState({
    text: "",
    imageUrl: "",
  });
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUser, setOnlineUser] = useState<OnlineUser[]>([]);
  const [userDetails, setUserDetails] = useState<ReceiverUserDetails | null>(
    null
  );

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [allMessage]);

  const token = getCookie("mui-token");

  const userId =
    myReceiverUser?.receiver?._id || process.env.NEXT_PUBLIC_CHAT_ID;

  useEffect(() => {
    const socketConnection = io(`${process.env.NEXT_PUBLIC_SOCKET_API_URL}`, {
      auth: {
        token: token,
      },
    });
    setSocket(socketConnection);

    return () => {
      socketConnection.disconnect();
    };
  }, [token]);

  useEffect(() => {
    if (socket) {
      socket.on("onlineUser", (data) => {
        // console.log({ data });
        setOnlineUser(data);
      });

      socket.emit("message-page", userId);

      //  pasci token theke
      socket.on(
        "sender-user",
        (data: {
          _id: string;
          name: string;
          auth: string;
          profile_pic: string;
        }) => {
          // console.log(data);
          setSenderUser(data);
        }
      );

      // receiver id theke
      socket.on("message-user", (data) => {
        // console.log({data});
        setUserDetails(data);
      });

      socket.on("message", (data) => {
        // console.log("message data", data);
        setAllMessage(data);
      });

      socket.on("conversation", (data) => {
        const filteredData = data.filter(
          (con: { sender: { _id: string } }) =>
            con.sender._id === senderUser._id
        );

        if (filteredData.length > 0) {
          const lastValue = filteredData[filteredData.length - 1];
          setMyReceiverUser(lastValue);
        }
      });
      socket.on("error", (data) => {
        return toast.error(data);
      });
    }
  }, [socket, userId, senderUser]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent page reload
    if (message.text || message.imageUrl) {
      if (socket) {
        socket.emit("new-message", {
          sender: senderUser?._id,
          receiver: userId,
          text: message.text,
          imageUrl: message.imageUrl,
          msgByUserId: senderUser?._id,
        });
        setMessage({
          text: "",
          imageUrl: "",
        });

        if (textInputRef.current) {
          textInputRef.current.value = "";
        }
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    }
  };

  const handleMessageOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setMessage((prevState) => ({
      ...prevState,
      text: value,
    }));
  };

  const handleFileChange = async (file: File | null) => {
    if (!file) return;

    setLoading(true);

    try {
      const uploadPhoto = await uploadFile(file);

      setMessage((prev) => {
        return {
          ...prev,
          imageUrl: uploadPhoto?.secure_url,
        };
      });
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  const handleClearUploadImage = () => {
    setMessage((prev) => {
      return {
        ...prev,
        imageUrl: "",
      };
    });
  };

  const onlineStatus = onlineUser.includes(userDetails?._id as string);

  return (
    <div className="w-[300px] md:w-[360px] md:h-[600px] h-[400px]  bg-white fixed right-0 md:right-1 bottom-14  rounded-2xl text-black shadow-xl z-[9999999999999999] overflow-hidden shadowStyle">
      <div className="flex flex-col justify-between h-full ">
        <div className="bg-[#1591A3] w-full h-[120px] text-white flex justify-center items-center ">
          <VscClose
            className="transition ease-in-out delay-75  cursor-pointer absolute right-4 top-4"
            onClick={close}
            size={30}
          />
          <div className="flex items-center">
            <div>
              <div className="flex flex-col text-center justify-center  items-center">
                <Image
                  src={(userDetails?.profile_pic as string) || logo}
                  width={30}
                  className="rounded-full"
                  alt="logo"
                  height={100}
                />
                

                {userDetails && <span>{userDetails?.name}</span>}
                {onlineStatus ? "online" : "offline"}
              </div>
            </div>
          </div>
        </div>

        <Box
          sx={{
            flexGrow: 1,
            overflowY: "scroll",
            p: 1,
            backgroundColor: "#fafafa",
          }}
        >
          <List>
            {allMessage?.map((message: any) => (
              <ListItem
                key={message?.id}
                sx={{
                  display: "flex",
                  justifyContent:
                    senderUser?._id === message?.msgByUserId
                      ? "flex-end"
                      : "flex-start",
                }}
              >
                <Box sx={{ maxWidth: "60%" }}>
                  <Paper
                    sx={{
                      p: 1,
                      borderRadius: 2,

                      backgroundColor:
                        senderUser?._id === message?.msgByUserId
                          ? "#F0F2F5"
                          : "#1591A3",

                      boxShadow: "none",
                      textAlign:
                        senderUser?._id === message?.msgByUserId
                          ? "right"
                          : "left",
                      color:
                        senderUser?._id === message?.msgByUserId
                          ? "black"
                          : "white",
                    }}
                  >
                    {message?.imageUrl && (
                      <Image
                        src={message?.imageUrl}
                        className="w-full h-full object-scale-down"
                        alt=""
                        width={100}
                        height={100}
                      />
                    )}
                    <ListItemText
                      className="text-  text-[8px]"
                      primary={message.text}
                      secondary={format(message.updatedAt)}
                    />
                  </Paper>
                </Box>
              </ListItem>
            ))}
            <div ref={messagesEndRef} />
          </List>
          {message.imageUrl && (
            <div className="w-full h-full sticky bottom-0 bg-slate-700 bg-opacity-30 flex justify-center items-center rounded overflow-hidden">
              <div
                className="w-fit p-2 absolute top-0 right-0 cursor-pointer hover:text-red-600"
                onClick={handleClearUploadImage}
              >
                <IoClose size={30} />
              </div>
              <div className="bg-white p-3">
                <Image
                  src={message.imageUrl}
                  alt="uploadImage"
                  className="aspect-square w-full h-full max-w-sm m-2 object-scale-down"
                  height={100}
                  width={100}
                />
              </div>
            </div>
          )}

          <>
            {loading && (
              <div className="w-full h-full sticky bottom-0 bg-slate-700 bg-opacity-30 flex justify-center items-center rounded overflow-hidden">
                Loading...
              </div>
            )}
          </>
        </Box>

        <div className=" w-full h-24 bg-white flex pl-3  items-center border-t-[#ddd] border-[2px] ">
          <form onSubmit={onSubmit} className="flex flex-col items-start ">
            <input
              type="text"
              placeholder="Compose your message...."
              className="w-[100%] bg-transparent  h-10 placeholder:text-[14px] "
              onChange={handleMessageOnChange}
              ref={textInputRef}
            />
            <div className="pb-2 flex space-x-2 items-center text-[#707584] ">
              <input
                type="file"
                id="file"
                onChange={(e) => {
                  const file =
                    (e.target as HTMLInputElement).files?.[0] || null;
                  handleFileChange(file);
                }}
                style={{ display: "none" }}
                ref={fileInputRef}
              />
              <label htmlFor="file" className=" cursor-pointer">
                <IoLinkOutline className=" chatIcon" />
              </label>

              <GraphicEqIcon className=" chatIcon" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;