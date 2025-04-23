import Image from "next/image";
import "../../news/news.css";
import Container from "@/components/ui/HomePage/Container/Container";
import { Button, Divider, Grid } from "@mui/material";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";

import React from "react";
import CommentForm from "../_components/CommentForm";
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";
import UserComment from "../_components/UserComment";
import { Metadata } from "next";
import { Share } from "@mui/icons-material";
import ShareLink from "../_components/ShareLink";
import ReplyComment from "../_components/ReplyComment";



export async function generateMetadata({ params }: BlogId): Promise<Metadata> {
  const { newsId } = params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/blogs/${newsId}`);
  const blog = await res.json();

  if (!blog) {
    return {
      title: "Blog not found",
      description: "The requested blog was not found.",
    };
  }

  return {
    title: `${blog?.data?.seo_title} | Muissa Consulting`,
    description: blog?.data?.seo_description || "Read the latest insights and updates.",
    keywords: blog?.data?.seo_keyword || "Muissa Consulting, Blog, News, Consulting insights, Business updates",
  };
}


const renderContent = (content: string) => {
  const parsedContent = ReactHtmlParser(content);

  return parsedContent.map((element, index) => {
    if (element.type === "h1") {
      return (
        <h1 key={index} className="text-2xl font-bold mb-2 ">
          {element.props.children}
        </h1>
      );
    } else if (element.type === "h2") {
      return (
        <h2 key={index} className="text-xl font-bold mb-2 ">
          {element.props.children}
        </h2>
      );
    } else if (element.type === "h3") {
      return (
        <h3 key={index} className="text-xl font-bold mb-2 ">
          {element.props.children}
        </h3>
      );
    } else if (element.type === "p") {
      return (
        <p key={index} className="mb-2">
          {element.props.children}
        </p>
      );
    }

    // else if (element.type === "img") {
    //   return (
    //     <img
    //       key={index}
    //       className="w-full h-auto object-cover mb-4 hidden "
    //       src={element.props.src}
    //       alt="Blog Image"
    //     />
    //   );
    // }
    else if (
      element.type === "div" &&
      element.props.className === "ql-align-center"
    ) {
      return (
        <div key={index} className="text-center mb-2">
          {element.props.children}
        </div>
      );
    } else if (
      element.type === "div" &&
      element.props.className === "ql-align-right"
    ) {
      return (
        <div key={index} className="text-right mb-2">
          {element.props.children}
        </div>
      );
    } else if (
      element.type === "div" &&
      element.props.className === "ql-align-left"
    ) {
      return (
        <div key={index} className="text-left mb-2">
          {element.props.children}
        </div>
      );
    } else {
      return null;
    }
  });
};

type TBlog = {
  title: string,
  blog_image: string,
  description: string,
  short_description: string,
  author: string,
  _id: string,
  createdAt: string,

}

interface BlogId {
  params: {
    newsId: string;
  };
}




const News = async ({ params }: BlogId) => {
  const { newsId } = params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/blogs/${newsId}`, {
    cache: "no-store",
  });
  const blog = await res.json();


  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/blogs/get-blogs`, {
    cache: "no-store",
  });
  const blogDetails = await response.json()


  if (!blog || !blogDetails) {
    return <h1 className="mt-10 flex items-center justify-center text-3xl capitalize ">Oops! Blog data not found! </h1>

  }

  console.log(blogDetails)


  const formatDate = (dateString: string) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US");
  };

  return (
    <div className="min-h-screen">
      <div className="serviceDetailsWrap aboutWraps">
        <div className="aboutContent">
          <h1>BLOG</h1>
        </div>
      </div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 mt-10  gap-10  ">
          <div className=' lg:col-span-4 '>
            <div className="sticky top-32">
              <div className="px-10 ">
                <h3 className="mb-5 capitalize">পপুলার সার্ভিস </h3>
                <div className="space-y-5">
                  <div>
                    <div className="flex items-center justify-between w-full ">
                      <div className="flex items-center ">
                        <HiChevronRight />
                        <Link href={`/services?tab=ফান্ডিং%20সাপোর্ট`}> <p>ফান্ডিং সাপোর্ট </p></Link>
                      </div>
                      <div className="rounded-sm bg-[#ddd] border w-6 p-2  h-6  text-center flex justify-center items-center text-sm ">
                        30
                      </div>
                    </div>
                    <Divider sx={{ marginTop: "10px" }} />
                  </div>



                  <div>
                    <div className="flex items-center justify-between w-full ">
                      <div className="flex items-center ">
                        <HiChevronRight />

                        <Link href={`/services?tab=ইনভেস্টমেন্ট%20সাপোর্ট`}><p>ইনভেস্টমেন্ট সাপোর্ট</p></Link>
                      </div>
                      <div className="rounded-sm bg-[#ddd] border w-6 p-2  h-6  text-center flex justify-center items-center text-sm ">
                        40
                      </div>
                    </div>
                    <Divider sx={{ marginTop: "10px" }} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between w-full ">
                      <div className="flex items-center ">
                        <HiChevronRight />

                        <Link href={`/services?tab=মার্কেটিং%20সাপোর্ট`}> <p>মার্কেটিং সাপোর্ট</p></Link>
                      </div>
                      <div className="rounded-sm bg-[#ddd] border w-6 p-2  h-6  text-center flex justify-center items-center text-sm ">
                        45
                      </div>
                    </div>
                    <Divider sx={{ marginTop: "10px" }} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between w-full ">
                      <div className="flex items-center ">
                        <HiChevronRight />

                        <Link href={`/services?tab=আইটি%20সাপোর্ট`}> <p>আইটি সাপোর্ট</p></Link>
                      </div>
                      <div className="rounded-sm bg-[#ddd] border w-6 p-2  h-6  text-center flex justify-center items-center text-sm ">
                        50
                      </div>
                    </div>
                    <Divider sx={{ marginTop: "10px" }} />
                  </div>
                </div>
              </div>
              <div className="mt-10 px-10 ">
                <div>
                  <h4 className="mb-5">Recent News </h4>
                  <div className="space-y-5">
                    <div className="space-y-8">


                      {
                        blogDetails?.data?.blogs?.slice(0, 3)?.map((blogInfo: TBlog) => (
                          <div key={blogInfo._id}>
                            <Link href={`/news/${blogInfo._id}`}>
                              <div className="flex flex-col md:flex-row items-center justify-between gap-10 ">
                                <Image
                                  className="w-full object-fill h-auto sm:w-20 sm:h-20 md:w-30 md:h-30 lg:w-28 lg:h-28 rounded-full"
                                  src={blogInfo?.blog_image}
                                  alt="news"
                                  width={500}
                                  height={500}
                                />
                                <div>
                                  <h5 className="font-semibold">
                                    {blogInfo?.title}
                                  </h5>
                                  <small>{formatDate(blogInfo.createdAt)}</small>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))
                      }

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="lg:col-span-8 ">
            <div >
              <div className="newsDetailsRightSideWrap text-[15px]">

                <Image src={blog?.data?.blog_image} width={1000} height={300} className="rightSideImg" alt="news" />
                <div className="my-5 px-5 ">
                  <div className="flex items-center space-x-3 ">
                    <FaCalendarAlt />
                    <span>{formatDate(blog?.data?.createdAt)}</span>
                    <FaUser />
                    <span> {blog?.data?.author}</span>
                  </div>
                  <Divider sx={{ marginTop: "2px" }} />
                </div>

                <div className="blogContent px-5 space-y- py-5 rounded-md ">
                  <h2 className="mb-5 text-center">{blog?.data?.title}</h2>
                  {renderContent(blog?.data?.description)}
                </div>
              </div>
              <ShareLink />


              <Divider sx={{ marginTop: "20px" }} />
              <UserComment id={newsId} />
              <CommentForm id={newsId} />

            </div>
          </div>
        </div>
      </Container>
    </div>

  );
};

export default News;
