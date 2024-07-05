'use client'

import React from 'react';
import icon from '../../../../../assets/services/consultant.png'

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { getCookie } from '@/helpers/Cookies';
import { useGetMemberForPaymentQuery, useGetSingleMemberQuery } from '@/redux/api/memeberApi';
import ProfileLoader from '@/components/ProfileLoader';
import { Button } from '@mui/material';
import { HiMinus } from 'react-icons/hi';
import Link from 'next/link';
import { useMyPaymentQuery } from '@/redux/api/paymentApi';
import { TPaymentData } from '@/types';
type TService = {
    _id: string,
    need_of_service: string,
}


const MembershipCard = () => {
    const token = getCookie("mui-token");
    const router = useRouter();
    const params = useSearchParams();

    const member_type = params.get("member_type");
    const id = params.get("id");
    const { data: paymentData, isLoading } = useMyPaymentQuery({ token })
    const { data: memberShipData, } = useGetMemberForPaymentQuery({
        token,
        member_type,
        id,
    });


    if (isLoading) {
        return <ProfileLoader />
    }


    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        };
        return new Date(dateString).toLocaleDateString("en-GB", options);
    };

    console.log('from membership page ', memberShipData)

    return (
        <>
            <div className='grid grid-cols-1  lg:grid-cols-2 w-full md:w-[750px]  mt-10 gap-5 '>
                {
                    paymentData.map((data: TPaymentData) => (
                        <div key={data._id} className='profileServiceCard investmentCard p-5 border rounded-lg shadow-md '>
                            <div className="flex  gap-2 ">
                                <div>
                                    <h4>Membership </h4>
                                    <div className="flex items-center">
                                        <div className='flex flex-col mr-5 text-sm'>
                                            <span>Membership Type  </span>
                                            <span>Validity  </span>
                                            <span>Status  </span>
                                        </div>
                                        <div className='flex flex-col text-sm '>
                                            <b className='capitalize '>: {data?.member_type}</b>
                                            <b className='flex '>:
                                                <div className="flex items-center ml-1">

                                                    <b className='text-bold'>{formatDate(memberShipData?.createdAt)}</b> <span className="mx-2"> <HiMinus /></span>
                                                    <b className='text-semibold'>{formatDate(memberShipData?.membership_year)}</b>
                                                </div></b>
                                            <b> : {data?.payment_status}</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-end mt-5">

                                <Button component={Link} href={`/profile/membership/update?id=${memberShipData._id}`} sx={{ width: '50px', height: '30px', fontSize: '12px' }}>Update</Button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default MembershipCard;
