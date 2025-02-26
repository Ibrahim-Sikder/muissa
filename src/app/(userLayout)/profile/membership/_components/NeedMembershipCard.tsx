"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getCookie } from "@/helpers/Cookies";
import { useGetMemberForPaymentQuery } from "@/redux/api/memeberApi";
import ProfileLoader from "@/components/ProfileLoader";
import { Button } from "@mui/material";
import { HiMinus } from "react-icons/hi";
import Link from "next/link";
import { useMyPaymentQuery } from "@/redux/api/paymentApi";
import { TPaymentData } from "@/types";
import moment from 'moment';



const MembershipCard = () => {
  const token = getCookie("mui-token");
  const router = useRouter();
  const params = useSearchParams();

  const member_type = params.get("member_type");
  const id = params.get("id");
  const { data: paymentData, isLoading } = useMyPaymentQuery({ token });
  const { data: memberShipData } = useGetMemberForPaymentQuery({
    token,
  });

  if (isLoading) {
    return <ProfileLoader />;
  }
  console.log(paymentData)

  const formatDate = (dateString: string) => {
    if (!dateString) {
      return "Invalid Date";
    }
  
    const date = moment(dateString);
    if (!date.isValid()) {
      return "Invalid Date";
    }
  
    return date.format('DD-MM-YYYY');
  };

  console.log('from member card',memberShipData)
  
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full md:w-[750px] mt-10 gap-5">
     
          <div
         
            className="profileServiceCard investmentCard p-5 border rounded-lg shadow-md"
          >
            <div className="flex gap-2">
              <div>
                <h4>Membership</h4>
                <div className="flex items-center">
                  <div className="flex flex-col mr-5 text-sm">
                    <span>Membership Type</span>
                    <span>Validity</span>
                  </div>
                  <div className="flex flex-col text-sm">
                    <b className="capitalize">
                      : {memberShipData?.member_type === 'business_owner' ? 'Business Owner' : memberShipData?.member_type}
                    </b>
                    <b className="flex">
                      :
                      <div className="flex items-center ml-1">
                        <b className="text-bold">
                          {formatDate(memberShipData?.createdAt)}
                        </b>{" "}
                        <span className="mx-2">
                          {" "}
                          <HiMinus />
                        </span>
                        <b className="text-semibold">
                          {formatDate(memberShipData?.membership_year)}
                        </b>
                      </div>
                    </b>
                    {/* <b> : {data?.payment_status}</b> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end mt-5">
              <Button
                component={Link}
                href={`/profile/membership/update?id=${memberShipData?._id}&member_type=${memberShipData?.member_type}`}
                sx={{ width: "50px", height: "30px", fontSize: "12px" }}
              >
                Update
              </Button>
            </div>
          </div>
  
      </div>
    </>
  );
};

export default MembershipCard;
