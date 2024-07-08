"use client";

import Container from "@/components/ui/HomePage/Container/Container";
import Image from "next/image";
import "./membership.css";
import { serviceData } from "./serviceData";
import ProfileMemebershipForm from "./_components/ProfileMemebershipForm";
import MembershipCard from "./_components/MembershipCard";
import { getCookie } from "@/helpers/Cookies";
import { useGetMemberForPaymentQuery } from "@/redux/api/memeberApi";
import { Box } from "@mui/material";
import ProfileLoader from "@/components/ProfileLoader";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Membership = () => {
  const token = getCookie("mui-token");

  const pathName = usePathname();

  const {
    data: memberShipData,
    isLoading,
    refetch,
  } = useGetMemberForPaymentQuery({
    token,
  });

  useEffect(() => {
    refetch();
  }, [refetch, pathName]);

  if (isLoading) {
    return <ProfileLoader />;
  }

  return (
    <Container>
      {memberShipData?.length > 0 ? (
        <MembershipCard />
      ) : (
        <Box>
          <div className="membarshipWraps mt-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {serviceData?.map((data) => (
                <div key={data.id} className="membarshipCard userMembershipt">
                  <Image
                    className="w-[65px] mx-auto "
                    src={data.img}
                    alt="icon"
                  />
                  <div className="mt-3">
                    <h4>{data.title}</h4>
                    <p className="leading-7">{data.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ProfileMemebershipForm />
        </Box>
      )}
    </Container>
  );
};

export default Membership;
