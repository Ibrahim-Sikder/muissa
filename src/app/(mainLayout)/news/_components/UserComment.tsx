'use client'

import { Button } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import user from "../../../../assets/logo/user.png";
import { useGetSingleBlogQuery } from '@/redux/api/blogApi';
import Loader from '@/components/Loader';
import { usePathname } from 'next/navigation';
import { HiChevronRight } from 'react-icons/hi';
import { getCookie } from '@/helpers/Cookies';
import jwtDecode from "jwt-decode";
import ReplyComment from './ReplyComment';
import muissa from '../../../../assets/logo/logo.png'
const UserComment = ({ id }: any) => {
    const pathname = usePathname();
    const token = getCookie("mui-token") || "";

    const { data: commentData, error, isLoading, refetch } = useGetSingleBlogQuery({ id });

    useEffect(() => {
        refetch();
    }, [pathname, refetch]);

    if (isLoading) {
        return <Loader />;
    }

    if (!commentData || error) {
        return <h1 className="mt-10 flex items-center justify-center text-3xl capitalize ">Oops! Comment data not found! </h1>;
    }

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
                <h4 className="mb-8 text-[#1591A3]">{commentData?.comments?.length} Comments </h4>
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
                            <div>
                                <h4 className='capitalize'>{data?.user?.name}</h4>
                                <small>{formatDate(data?.createdAt)}</small>
                            </div>
                            <div>
                                <p className="mt-5 text-[16px] capitalize">{data?.comment} </p>
                            </div>
                            <div className="flex justify-end text-left mt-5">
                                <div>

                                    <div className="relative reply bg-white p-5 rounded-md w-full md:w-[400px] ">
                                        <div className='absolute right-3 top-3 text-center flex  flex-col justify-cetner items-center '>
                                            <Image src={muissa} alt='muissa' className='w-8 object-cover' />
                                            <small>Muissa Team</small>
                                        </div>
                                        <p className="mt-14 text-[16px] justify-left">Admin reply here  consectetur adipisicing elit. Ab obcaecati dolorum consequuntur autem fuga dolore ut aspernatur et! Rerum, optio! </p>
                                    </div>
                                </div>
                            </div>
                            <ReplyComment />
                            <div className=" flex items-cener justify-end gap-2 mt-2 ">
                                <Button sx={{ width: "70px", height: "35px" }}>
                                    Reply <HiChevronRight className="text-[#fff]" />
                                </Button>
                                <Button sx={{ width: "70px", height: "35px", background: 'red' }}>
                                    Delete <HiChevronRight className="text-[#fff]" />
                                </Button>
                            </div>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default UserComment;
