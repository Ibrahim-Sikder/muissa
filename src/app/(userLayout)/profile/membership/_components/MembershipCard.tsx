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
import moment from "moment";

const MembershipCard = () => {
  const token = getCookie("mui-token");

  const { data: memberShipData, isLoading,error } = useGetMemberForPaymentQuery({
    token,
  });

  if (isLoading) {
    return <ProfileLoader />;
  }
  if (error) {
    return <p>You are no membership!</p>;
  }
  console.log(memberShipData)

  const formatDate = (dateString: string) => {
    if (!dateString) {
      return "Invalid Date";
    }

    const date = moment(dateString);
    if (!date.isValid()) {
      return "Invalid Date";
    }

    return date.format("DD-MM-YYYY");
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full md:w-[750px] mt-10 gap-5">
        {memberShipData?.map((data: any) => (
          <div
            key={data._id}
            className="profileServiceCard investmentCard p-3 md:p-5 border rounded-lg shadow-md"
          >
            <div className="flex gap-2">
              <div>
                <h4>Membership</h4>
                <div className="flex items-center justify-between w-[250px] md:w-full ">
                  <div className="flex flex-col mr-1 md:mr-5 text-[12px] md:text-sm">
                    <p>Membership Type</p>
                    <span>Validity</span>
                  </div>
                  <div className="flex flex-col mr-2 md:mr-5 text-[12px] md:text-sm">
                    <b className="capitalize ">
                      :{" "}
                      {data?.member_type === "business_owner"
                        ? "Business Owner"
                        : data?.member_type}
                    </b>
                    <b className="flex">
                      :
                      <div className="flex items-center ml-1 flex-wrap">
                        <b className="md:text-bold text-[11px] ">
                          {formatDate(data?.createdAt)}
                        </b>{" "}
                        <span className="md:mx-2">
                          {" "}
                          <HiMinus />
                        </span>
                        <b className="md:text-semibold md:text-sm text-[11px]">
                          {formatDate(data?.membership_year)}
                        </b>
                      </div>
                    </b>
                    {/* <b> : {data?.payment_status}</b> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center md:justify-end mt-5">
              <Button
                component={Link}
                href={`/profile/membership/update?id=${data?._id}&member_type=${data?.member_type}`}
                sx={{
                  width: {
                    md: '50px',
                    xs: '30px'
                  }, height: "30px", fontSize: "12px"
                }}
              >
                Update
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MembershipCard;