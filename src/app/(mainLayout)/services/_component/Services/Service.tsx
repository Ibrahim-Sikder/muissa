import { Button } from "@mui/material";
import {
  Inventory,
  ProductionQuantityLimits,
  Storefront,
  TrendingDown,
} from "@mui/icons-material";
import "./services.css";
import Link from "next/link";
import Container from "@/components/ui/HomePage/Container/Container";
import { TServices } from "@/types";

const Service = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/services/get-services`, {
  //   cache: "no-store",
  // });
  // const servicesData = await res.json();


  const servicesData = [
    {
      id: 1,
      title: "ফান্ডিং সাপোর্ট",
      description: 'একটি ব্যবসায়ের মূল চালিকা শক্তি হচ্ছে মূলধন। আমরা বাংলাদেশী ছোট, মাঝারী, বড় ও নতুন ব্যবসা প্রতিষ্ঠান',
    },
    {
      id: 1,
      title: "ইনভেস্টমেন্ট সাপোর্ট",
      description: 'আমরা Investment Support এর মাধ্যমে বিনিয়োগে আগ্রহী Client দের বিনিয়োগ বিষয়ক পরামর্শ ও রিসোর্স প্রদা',
    },
    {
      id: 1,
      title: "মার্কেটিং সাপোর্ট",
      description: 'আপনি আমাদের সাথে যুক্ত হলে পাচ্ছেন 360° Marketing Support অর্থাৎ মার্কেটিং এর সকল ক্যাটাগরির সার্ভিস',
    },
    {
      id: 1,
      title: "আইটি সাপোর্ট",
      description: 'আমাদের সাথে যুক্ত হলে একজন ব্যবসায়ী তার ব্যবসায়ের টেকনিক্যাল সাপোর্ট ও তথ্য প্রযুক্তি নির্ভর যে কোন',
    },
  ]


  // const sortedServices: TServices[] = servicesData?.data?.services?.sort((a: TServices, b: TServices) => a.priority - b.priority);

  const iconStyle = {
    fontSize: {
      lg: "75px",
      md: "60px",
      sm: "40px",
      xs: "20px",
    },
  };
  const buttonStyle = {
    fontSize: {
      xs: "10px",
      md: "12px",
    },

    width: {
      xs: "75px",
      md: '100px'
    },
    height: "30px",
    padding: "0px",
  };
  // if (!sortedServices || !servicesData) {
  //   return <h1 className="mt-10 flex items-center justify-center text-3xl capitalize ">Oops! Services data not found! </h1>

  // }

  return (
    <Container>
      <div className="serviceCardWraps">
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2">

          <div className="serviceCard">
            <div className="serviceIconWraps">
              <ProductionQuantityLimits sx={iconStyle} />
            </div>
            <div className="serviceContent">
              <h4>ফান্ডিং সাপোর্ট</h4>
              <p className="my-2 md:my-5">
                একটি ব্যবসায়ের মূল চালিকা শক্তি হচ্ছে মূলধন। আমরা বাংলাদেশী ছোট, মাঝারী, বড় ও নতুন ব্যবসা প্রতিষ্ঠান
              </p>
              <Button sx={buttonStyle} component={Link} href={`/services?tab=ফান্ডিং%20সাপোর্ট`}>
                আরো দেখুন
              </Button>
            </div>
          </div>
          <div className="serviceCard">
            <div className="serviceIconWraps">
            <Inventory sx={iconStyle} />
            </div>
            <div className="serviceContent">
              <h4>ইনভেস্টমেন্ট সাপোর্ট</h4>
              <p className="my-2 md:my-5">
              আমরা Investment Support এর মাধ্যমে বিনিয়োগে আগ্রহী Client দের বিনিয়োগ বিষয়ক পরামর্শ ও রিসোর্স প্রদা
              </p>
              <Button sx={buttonStyle} component={Link} href={`/services?tab=ইনভেস্টমেন্ট%20সাপোর্ট`}>
                আরো দেখুন
              </Button>
            </div>
          </div>
          <div className="serviceCard">
            <div className="serviceIconWraps">
            <TrendingDown className="rotate-[275deg]" sx={iconStyle} />
            </div>
            <div className="serviceContent">
              <h4>মার্কেটিং সাপোর্ট</h4>
              <p className="my-2 md:my-5">
              আপনি আমাদের সাথে যুক্ত হলে পাচ্ছেন 360° Marketing Support অর্থাৎ মার্কেটিং এর সকল ক্যাটাগরির সার্ভিস
              </p>
              <Button sx={buttonStyle} component={Link} href={`/services?tab=মার্কেটিং%20সাপোর্ট`}>
                আরো দেখুন
              </Button>
            </div>
          </div>
          <div className="serviceCard">
            <div className="serviceIconWraps">
            <Storefront sx={iconStyle} />
            </div>
            <div className="serviceContent">
              <h4>আইটি সাপোর্ট</h4>
              <p className="my-2 md:my-5">
              আমাদের সাথে যুক্ত হলে একজন ব্যবসায়ী তার ব্যবসায়ের টেকনিক্যাল সাপোর্ট ও তথ্য প্রযুক্তি নির্ভর যে কোন
              </p>
              <Button sx={buttonStyle} component={Link} href={`/services?tab=আইটি%20সাপোর্ট`}>
                আরো দেখুন
              </Button>
            </div>
          </div>

        </div>
      </div>
    </Container>
  );
};

export default Service;
