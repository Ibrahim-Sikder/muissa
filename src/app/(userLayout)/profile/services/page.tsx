'use client'

import React from 'react';
import './service.css'
import icon from '../../../../assets/services/consultant.png'
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { getCookie } from '@/helpers/Cookies';
import { useGetMemberForPaymentQuery } from '@/redux/api/memeberApi';
import Loader from '@/components/Loader';

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
    return <Loader />
  }

  console.log(memberShipData);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  return (
    <div>
      <h3 className='text-cente mt-8'>My services </h3>
      <div className='grid grid-cols-1  lg:grid-cols-2 gap-10 mt-10 '>
        {memberShipData?.need_of_service?.map((service: string, index: number) => (
          <div key={index} className='profileServiceCard p-5 border rounded-lg shadow-md'>
            <div className="flex items-center gap-8">
              <Image width={50} height={50} src={icon} alt='services' />
              <div>
                <h4>{service}</h4>
                <small className='text-semibold'>{formatDate(memberShipData?.createdAt)}</small>
              </div>
            </div>
            <div className="flex items-center justify-end mt-10">
              <b className=''>{memberShipData?.member_type} </b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserServicePage;
