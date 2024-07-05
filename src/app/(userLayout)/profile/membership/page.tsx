
'use client'

import Container from "@/components/ui/HomePage/Container/Container";
import Image from "next/image";
import "./membership.css";
import { serviceData } from "./serviceData";
import ProfileMemebershipForm from "./_components/ProfileMemebershipForm";
import MembershipCard from "./_components/MembershipCard";
import { getCookie } from "@/helpers/Cookies";
import { useSearchParams } from "next/navigation";
import { useGetMemberForPaymentQuery } from "@/redux/api/memeberApi";
import { Box } from "@mui/material";

const Membership = () => {
  const token = getCookie("mui-token");
  const params = useSearchParams();

  const member_type = params.get("member_type");
  const id = params.get("id");

  const { data: memberShipData, isLoading } = useGetMemberForPaymentQuery({
    token,
    member_type,
    id,
  });

  return (
    <Container>
      {
        memberShipData ? (
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
        )


      }
    </Container>
  );
};

export default Membership;
