'use client'

import React from 'react';
import './service.css'
import icon from '../../../../assets/services/consultant.png'
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { getCookie } from '@/helpers/Cookies';
import { useGetMemberForPaymentQuery } from '@/redux/api/memeberApi';
import Loader from '@/components/Loader';
import ProfileLoader from '@/components/ProfileLoader';
import { HiMinus } from "react-icons/hi";
import { Button } from '@mui/material';
type TService = {
  _id: string,
  need_of_service: string,
}

const UserServicePage = () => {
  const token = getCookie("mui-token");
  const router = useRouter();
  const params = useSearchParams();

  const member_type = params.get("member_type");
  const id = params.get("id");

  const { data: memberShipData, isLoading } = useGetMemberForPaymentQuery({
    token,
    member_type,
    id,
  });

  if (isLoading) {
    return <ProfileLoader />
  }


  console.log(memberShipData);
  console.log(memberShipData.member_type)


  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-GB", options);
};

  return (
    <>
      {
        memberShipData.member_type === 'business_owner' ? (
          <div>
            <h3 className='text-cente mt-8'>My services </h3>
            <div className='grid grid-cols-1  lg:grid-cols-2 w-full md:w-[750px]  mt-10 gap-5 '>
              {memberShipData?.need_of_service?.map((service: string, index: number) => (
                <div key={index} className='profileServiceCard p-5 border rounded-lg shadow-md'>
                  <div className="flex items-center gap-8">
                    <Image width={50} height={50} src={icon} alt='services' />
                    <div>
                      <h4>{service}</h4>
                      <div className="flex items-center">
                        <small className='text-bold'>{formatDate(memberShipData?.createdAt)}</small> <span className="mx-2"> <HiMinus /></span>
                        <small className='text-semibold'>{formatDate(memberShipData?.membership_year)}</small>
                      </div>
                      {/* <Button sx={{ width: '30px', fontSize: '11px', height: '25px' }}> Pending</Button> */}
                    </div>
                  </div>
                  <div className="flex items-center justify-end mt-5 capitalize">
                  <b className="capitalize">
                       {memberShipData?.member_type === 'business_owner' ? 'Business Owner' : memberShipData?.member_type}
                    </b>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : memberShipData.member_type === 'investor' ? (
          <>

            <div>
              <h3 className='text-cente mt-8'>My services </h3>
              <div className='grid grid-cols-1  lg:grid-cols-2 w-full md:w-[750px]  mt-10 gap-5 '>
                <div className='profileServiceCard investmentCard p-5 border rounded-lg shadow-md '>
                  <div className="flex  gap-2 ">
                    <div className="imgWrap">
                      <Image className='w-10 object-cover h-10' src={icon} alt='services' />
                    </div>
                    <div>
                      <h4>{memberShipData?.business_name}</h4>
                      <h4>Investment Support </h4>
                      <div className="flex items-center">
                        <div className='flex flex-col mr-5 text-sm'>
                          <span>Investment Amount  </span>
                          <span>Investment Goal  </span>
                          <span>Investment Period  </span>

                        </div>
                        <div className='flex flex-col text-sm '>
                          <b>: {memberShipData?.investment_amount}</b>
                          <b className='capitalize'>: {memberShipData?.investment_goal}</b>
                          <b>: {memberShipData?.investment_period} </b>
                          {/* <b className='capitalize'> : {memberShipData?.member_type} </b> */}
                        </div>
                      </div>



                    </div>
                  </div>
                  <div className="flex items-center justify-end ">

                    <div className="flex items-center mt-5">
                      <b className='capitalize'> {memberShipData?.member_type} </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </>
        ) : <p>No service found</p>
      }
    </>
  );
};

export default UserServicePage;
