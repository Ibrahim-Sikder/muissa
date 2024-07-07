'use client'

import React from 'react';
import './service.css';
import icon from '../../../../assets/services/consultant.png';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { getCookie } from '@/helpers/Cookies';
import { useGetMemberForPaymentQuery, useGetSingleMemberQuery } from '@/redux/api/memeberApi';
import Loader from '@/components/Loader';
import ProfileLoader from '@/components/ProfileLoader';
import { HiMinus } from "react-icons/hi";

type TService = {
  _id: string;
  need_of_service: string[];
  additional_info: string;
  business_address: string;
  business_description: string;
  business_name: string;
  business_type: string;
  createdAt: string;
  investment_amount: number;
  investment_period: number,
  member_type: string;
  membership_year: string;
  updatedAt: string;
  investment_goal: string,
  upload_file: string;
  investment_type: string,
  user: {
    _id: string;
    userId: string;
    name: string;
    auth: string;
    role: string;
  };
  website: string;
  __v: number;
};

const UserServicePage: React.FC = () => {
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
  const { data: memberData } = useGetSingleMemberQuery({
    token,
    member_type,
    id,
  });

  if (isLoading) {
    return <ProfileLoader />;
  }

  console.log('member data ', memberShipData);
  console.log(memberData?.member_type);

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
      <div>
        <h3 className='text-center mt-8'>My services</h3>
        <div>
          {memberShipData?.map((data: TService) => (
            <div key={data._id}>
              {data?.member_type === 'business_owner' ? (
                <div className='grid grid-cols-1 lg:grid-cols-2 w-full md:w-[750px] mt-10 gap-5'>
                  {data?.need_of_service?.map((service: string, index: number) => (
                    <div key={index} className='profileServiceCard p-5 border rounded-lg shadow-md'>
                      <div className="flex items-center gap-8">
                        <Image width={50} height={50} src={icon} alt='services' />
                        <div>
                          <h4>{service}</h4>
                        </div>
                      </div>
                      <div className="flex items-center justify-end mt-5 capitalize">
                        <b>{data?.member_type === 'business_owner' ? 'Business Owner' : ''}</b>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <div className='   mt-10 '>
                    <div className='profileServiceCard investmentCard p-5 border rounded-lg shadow-md'>
                      <div className="flex gap-2">
                        <div className="imgWrap">
                          <Image className='w-10 object-cover h-10' src={icon} alt='services' />
                        </div>
                        <div>

                          <h4>Investment Support</h4>
                          <div className="   ">
                            <div className="flex items-center  ">
                              <span className='w-[150px] md:w-[230px] block'>Investment Type </span>
                              <span>: {data?.investment_type}</span>
                            </div>
                            <div className="flex items-center  ">
                              <span className='w-[150px] md:w-[230px] block'>Investment Amount</span>
                              <span>: {data?.investment_amount}</span>
                            </div>
                            <div className="flex items-center  ">
                              <span className='w-[150px] md:w-[230px] block' >Investment Period</span>
                              <span>: {data?.investment_period}Y</span>
                            </div>
                            {/* <div className="flex  ">
                              <span className='w-[230px] block'>Investment Goal</span>
                              <span className='text-'>: {data?.investment_goal}</span>
                            </div>
                            <div className="flex ">
                              <span className='w-[230px] block'>Request Message </span>
                              <span>: {data?.investment_goal}</span>
                            </div> */}

                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-end mt-5 capitalize">
                        <b>{data?.member_type}</b>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserServicePage;
