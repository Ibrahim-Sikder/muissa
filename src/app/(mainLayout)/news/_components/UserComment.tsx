'use client'

import { Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { HiChevronRight } from 'react-icons/hi';
import user from "../../../../assets/logo/user.png";
import { useGetSingleBlogQuery } from '@/redux/api/blogApi';
import Loader from '@/components/Loader';

const UserComment = ({ id }: any) => {

    const { data: commentData, error, isLoading, } = useGetSingleBlogQuery({ id })

    if (isLoading) {
        return <Loader />
    }

    if (!commentData || error) {
        return <h1 className="mt-10 flex items-center justify-center text-3xl capitalize ">Oops! Comment data not found! </h1>

    }
    console.log('comment data', commentData)

    const formatDate = (dateString: string) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        return new Date(dateString).toLocaleDateString("en-US");
    };
    return (
        <div className="comment sectionMargin ">
            <div className="mt-5">
                <h4 className="mb-8 text-[#1591A3]">5 Comments </h4>
            </div>
            <div className="grid grid-rows-1 gap-10">
                {commentData?.comments?.map((data: any) => (
                    <div
                        key={data.id}
                        className="flex flex-col  justify-between gap-10 "
                    >
                        <Image
                            className="w-20 h-20 rounded-full "
                            src={user}
                            alt="user"
                        />
                        <div className="commentCard">
                            <div className="absolute top-3 right-3">
                                <Button sx={{ width: "70px", height: "35px" }}>
                                    Reply <HiChevronRight className="text-[#fff]" />
                                </Button>
                            </div>
                            <div>
                                <h4>{data?.user?.name}</h4>
                                <small>{formatDate(data?.createdAt)}</small>
                            </div>
                            <p className="mt-5 ">{data?.comment}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default UserComment;