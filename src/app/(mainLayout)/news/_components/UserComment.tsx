"use client";

import { Button } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import user from "../../../../assets/logo/user.png";
import { useGetSingleBlogQuery } from "@/redux/api/blogApi";
import Loader from "@/components/Loader";
import { usePathname } from "next/navigation";
import { HiChevronRight } from "react-icons/hi";
import { getCookie } from "@/helpers/Cookies";
import ReplyComment from "./ReplyComment";
import muissa from "../../../../assets/logo/logo.png";
import { useGetMeQuery } from "@/redux/api/userApi";
import { toast } from "sonner";
import axios from "axios";
import CommentForm from "./CommentForm";

const UserComment = ({ id }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const pathname = usePathname();
  const token = getCookie("mui-token") || "";
  const {
    data: commentData,
    error,
    isLoading,
    refetch,

  } = useGetSingleBlogQuery({ id, pollingInterval: 1000 });




  const { data: verifyUser } = useGetMeQuery({ token });

  // if(userData && userData.users){
  //     const userRole = userData.users.map((user)=>user.role)
  //     console.log(userRole,'user role')
  // }

  const [visibleReply, setVisibleReply] = useState<number | null>(null);

  useEffect(() => {
    refetch();
  }, [pathname, refetch]);

  if (isLoading) {
    return <Loader />;
  }

  if (!commentData || error) {
    return (
      <h1 className="mt-10 flex items-center justify-center text-3xl capitalize">
        Oops! Comment data not found!
      </h1>
    );
  }







  const formatDate = (dateString: string) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US");
  };

  const toggleReply = (commentId: number) => {
    setVisibleReply((prev) => (prev === commentId ? null : commentId));
  };

  const handleSubmitDelete = async (commentId: string) => {
    setLoading(true);
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/comments/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            blogId: id,
          },
        }
      );

      if (response?.status === 200) {
        toast.success(response?.data?.message);
        window.location.reload();
      }
    } catch (error: any) {
      if (error?.response) {
        const { status, data } = error.response;
        if ([400, 404, 500].includes(status)) {
          toast.error(data.message);
        } else {
          toast.error(["An unexpected error occurred."]);
        }
      }
    } finally {
      setLoading(false);
    }
  };


  console.log('from reply comment', commentData)

  return (
    <div className="comment sectionMargin">
      <div className="mt-5">
        <h4 className="mb-8 text-[#1591A3]">
          {commentData?.comments?.length} Comments{" "}
        </h4>
      </div>
      <div className="grid grid-rows-1 gap-10">
        {commentData?.comments?.map((data: any) => (
          <div key={data._id} className="flex flex-col justify-between gap-10">
            <Image className="w-20 h-20 rounded-full" src={user} alt="user" />
            <div className="commentCard">
              <div>
                <h4 className="capitalize">{data?.user?.name}</h4>
                <small>{formatDate(data?.createdAt)}</small>
              </div>
              <div>
                <p className="mt-5 text-[16px] capitalize">{data?.comment}</p>
              </div>
              <div className="flex justify-end text-left mt-5">
                <div>

                  {data?.reply_comments.map((reply: any) => (
                    <div key={reply._id} className="relative reply bg-white p-5 rounded-md w-full md:w-[400px]">
                      <div className="absolute right-3 top-3 text-center flex flex-col justify-center items-center">
                        <Image
                          src={
                            muissa || reply?.user?.profile_pic
                          }
                          alt="muissa"
                          className="w-8 object-cover"
                          width={100}
                          height={100}
                        />
                        <small>{reply?.user?.name}</small>
                      </div>
                      <p className="mt-14 text-[16px] justify-left">

                      </p>
                      <p className="mt-14 text-[16px] justify-left">
                        {reply?.reply}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {visibleReply === data._id && (
                <ReplyComment blogId={id} id={data._id} />
              )}
              {verifyUser?.role === "admin" ? (
                <div className="flex items-center justify-end gap-2 mt-2">
                  <Button
                    sx={{ width: "70px", height: "35px" }}
                    onClick={() => toggleReply(data._id)}
                  >
                    Reply <HiChevronRight className="text-[#fff]" />
                  </Button>
                  <Button
                    disabled={loading}
                    sx={{ width: "70px", height: "35px", background: "red" }}
                    onClick={() => handleSubmitDelete(data._id)}
                  >
                    Delete <HiChevronRight className="text-[#fff]" />
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default UserComment;
