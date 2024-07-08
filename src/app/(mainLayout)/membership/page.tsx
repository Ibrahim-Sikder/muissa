"use client";

import "../membership/membership.css";
import Container from "@/components/ui/HomePage/Container/Container";
import icon from "../../../assets/services/icon.png";
import icon2 from "../../../assets/services/icon2.png";
import icon3 from "../../../assets/services/icon3.png";
import icon4 from "../../../assets/services/icon4.png";
import icon5 from "../../../assets/services/icon5.png";
import icon6 from "../../../assets/services/icon6.png";
import icon7 from "../../../assets/services/icon7.png";
import Image from "next/image";
import consult from "../../../assets/news/sub.png";
import MembershipForm from "./_components/MembershipForm";
import MembershipDiscountData from "./_components/MembershipDiscountData";
import { usePathname } from "next/navigation";
import { getCookie } from "@/helpers/Cookies";
import { useSearchParams } from "next/navigation";
import { useGetMemberForPaymentQuery } from "@/redux/api/memeberApi";
import MembershipCard from "@/app/(userLayout)/profile/membership/_components/MembershipCard";
import Loader from "@/components/Loader";
import { useEffect } from "react";

// export const metadata: Metadata = {
//   title: "Muissa Consulting | Membership ",
//   description: '"Explore membership opportunities at Muissa Consulting. Learn about our exclusive benefits, resources, and how membership can enhance your business strategies. Join our community to access premium consulting services and industry insights."',
//   keywords: "Muissa Consulting, Membership benefits, Join Muissa, Business membership, Consulting services, Exclusive benefits, Industry insights, Premium services, Business strategies, Community membership ",
// };

const Membership = () => {
  const token = getCookie("mui-token");
  const params = useSearchParams();

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
    return <Loader />;
  }

  const serviceData = [
    {
      id: 1,
      title: "প্রোডাক্ট সাপোর্ট",
      description:
        "প্রোডাক্ট সাপোর্টের জন্য আমাদের টিম সবসময় প্রস্তুত। কোনো সমস্যা বা প্রশ্ন থাকলে, আমাদের সাথে যোগাযোগ করুন। আমরা দ্রুত এবং কার্যকর সমাধান প্রদান করব। আপনার সন্তুষ্টি আমাদের প্রধান লক্ষ্য, তাই যে কোনো সময় আমাদের সহযোগিতা পেতে পারেন।",
      img: icon,
    },
    {
      id: 1,
      title: "বিক্রয় সাপোর্ট",
      description:
        "বিক্রয় সাপোর্টের জন্য Muissa Business Consulting Ltd.   সবসময় প্রস্তুত। আপনার যেকোনো বিক্রয় সম্পর্কিত সমস্যা বা প্রশ্নের সমাধান পেতে আমাদের সাথে যোগাযোগ করুন। আমরা দ্রুত এবং কার্যকর সমাধান প্রদান করে আপনার ব্যবসার উন্নতিতে সহায়তা করব।",
      img: icon3,
    },
    {
      id: 1,
      title: "মার্কেটিং সাপোর্ট",
      description:
        "মার্কেটিং সাপোর্টের জন্য  Muissa Business Consulting Ltd.  সবসময় প্রস্তুত। আপনার যেকোনো মার্কেটিং সমস্যা বা প্রশ্নের সমাধান পেতে আমাদের সাথে যোগাযোগ করুন। আমরা দ্রুত এবং কার্যকর সমাধান প্রদান করে আপনার ব্যবসার উন্নতিতে সহায়তা করব।",
      img: icon2,
    },
    {
      id: 1,
      title: "ডেলিভারি সাপোর্ট",
      description:
        "ডেলিভারি সাপোর্টের জন্য Muissa Business Consulting Ltd.   সবসময় প্রস্তুত। আপনার যেকোনো ডেলিভারি সমস্যা বা প্রশ্নের সমাধান পেতে আমাদের সাথে যোগাযোগ করুন। আমরা দ্রুত এবং কার্যকর সমাধান প্রদান করে আপনার ব্যবসার উন্নতিতে সহায়তা করব।",
      img: icon6,
    },
    {
      id: 1,
      title: "আইটি সাপোর্ট",
      description:
        "আইটি সাপোর্টের জন্য Muissa Business Consulting Ltd.   সবসময় প্রস্তুত। আপনার যেকোনো আইটি সমস্যা বা প্রশ্নের সমাধান পেতে আমাদের সাথে যোগাযোগ করুন। আমরা দ্রুত এবং কার্যকর সমাধান প্রদান করে আপনার ব্যবসার উন্নতিতে সহায়তা করব।",
      img: icon4,
    },
    {
      id: 1,
      title: "ফান্ডিং সাপোর্ট",
      description:
        "ফান্ডিং সাপোর্টের জন্য Muissa Business Consulting Ltd.   সবসময় প্রস্তুত। আপনার যেকোনো ফান্ডিং সমস্যা বা প্রশ্নের সমাধান পেতে আমাদের সাথে যোগাযোগ করুন। আমরা দ্রুত এবং কার্যকর সমাধান প্রদান করে আপনার ব্যবসার উন্নতিতে সহায়তা করব।",
      img: icon5,
    },
    {
      id: 1,
      title: "ইনভেস্টমেন্ট সাপোর্ট",
      description:
        "ফান্ডিং সাপোর্টের জন্য Muissa Business Consulting Ltd.   সবসময় প্রস্তুত। আপনার যেকোনো ফান্ডিং সমস্যা বা প্রশ্নের সমাধান পেতে আমাদের সাথে যোগাযোগ করুন। আমরা দ্রুত এবং কার্যকর সমাধান প্রদান করে আপনার ব্যবসার উন্নতিতে সহায়তা করব।",
      img: icon7,
    },
  ];

  return (
    <>
      {memberShipData?.length > 0 ? (
        <Container>
          <div className=" mt-14 items-center mx-auto w-[500px]">
            <h3 className="text-[#002140] font-bold">
              Already you have membership!
            </h3>
            <MembershipCard />
          </div>
        </Container>
      ) : (
        <div>
          <div className="serviceDetailsWrap aboutWraps">
            <div className="aboutContent memberShipContent">
              <h1>Membership</h1>
            </div>
          </div>
          <Container>
            <div className="grid grid-cols-1  xl:grid-cols-2 place-items-center  gap-10 sectionMargin ">
              <div className=" order-2 xl:order-1">
                <h1 className="mb-5">সদস্যতা সাবস্ক্রিপশন </h1>
                <div className="leading-8 relative">
                  <div className="divider"></div>
                  <div className="space-y-3">
                    <h2> আমাদের ব্যবসা পরামর্শদান </h2>
                    <h2>সেবার সদস্য হতে এবং বিশেষ সুবিধাগুলি উপভোগ করতে </h2>
                    <h2> আজই সাবস্ক্রিপশন নিন। </h2>
                    <h2> আমাদের সদস্যতা সাবস্ক্রিপশনের </h2>
                  </div>
                </div>
                <MembershipDiscountData />
                <p className="mt-10">
                  আমাদের ব্যবসা পরামর্শদান সেবার সদস্য হয়ে বিশেষ সুবিধাগুলি
                  উপভোগ করুন। আজই সদস্যতা সাবস্ক্রিপশন নিন এবং আমাদের বিশেষজ্ঞ
                  পরামর্শদাতাদের সহায়তায় আপনার ব্যবসার উন্নয়ন করুন। সদস্য হিসেবে
                  আপনি পাবেন বিশেষজ্ঞের নিকট থেকে ব্যক্তিগত পরামর্শ, ব্যবসার
                  কৌশলগত দিকনির্দেশনা, এবং বিভিন্ন ব্যবসায়িক চ্যালেঞ্জ মোকাবেলায়
                  সহায়তা। আমাদের সেবার অংশ হয়ে আপনার ব্যবসাকে এক নতুন উচ্চতায়
                  নিয়ে যান। এখনই সাবস্ক্রিপশন নিন এবং আমাদের এক্সক্লুসিভ সদস্যপদ
                  সুবিধাগুলি উপভোগ করুন।
                </p>
              </div>
              <div className="order-1 xl:order-2 subcriptionImgWrap">
                <Image src={consult} alt="consult" />
              </div>
            </div>

            <div className="membarshipWraps mt-14">
              <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center justify-center gap-10">
                {serviceData.map((data, index) => (
                  <div
                    key={data.id}
                    className={`membarshipCard ${
                      index === serviceData.length - 1 ? "lg:col-span-2" : ""
                    }`}
                  >
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

            <MembershipForm />
          </Container>
        </div>
      )}
    </>
  );
};

export default Membership;
