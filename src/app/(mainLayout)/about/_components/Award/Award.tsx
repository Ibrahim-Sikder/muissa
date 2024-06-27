import React from "react";
import "./Award.css";

import { Button } from "@mui/material";
import Container from "@/components/ui/HomePage/Container/Container";
import Link from "next/link";
const Award = () => {
  const buttonStyle = {
    width: {
      lg: "240x",
      md: "200px",
      sm: "140px",
      xs: "120px",
    },
    height: {
      lg: "50px",
      xs: "40px",
    },
    borderRadius: "30px",
    fontSize: {
      lg: "12px",
      xs: "10px",
    },
    marginTop: "15px",

  };
  return (
    <div className="awardWraps sectionMargin ">
      <Container>
        <div className="awardContent">
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-5 lg:gap-20 place-content-between justify-between  place-items-center w-full commonContent ">
            <div>
              <h2 className="lg:leading-10 w-full ">
                আমাদের ব্যবসা পরামর্শদান
                সেবার সদস্য হতে এবং বিশেষ সুবিধাগুলি উপভোগ করতে
                আজই সাবস্ক্রিপশন নিন।

              </h2>

              <Button component={Link} href='/membership'
                sx={buttonStyle}
              >
                <span> Get Membership</span>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-10 relative ">
              <div className="awardCircle">

                <h5>বেস্ট  </h5>
                <h5>সাপোর্ট</h5>


              </div>
              <div className="awardCircle ">

                <h5>দক্ষ ও প্রশিক্ষিত  </h5>
                <h5>টিম মেম্বার</h5>
              </div>
              <div className="awardCircle">

                <h5>নিজস্ব </h5>
                <h5>ইনভেস্টমেন্ট </h5>
                <h5>ক্লাব </h5>
              </div>
              <div className="awardCircle">
                <h5>সর্বোচ্চ  </h5>
                <h5>সিকিউরিটি  </h5>
                <h5>প্রদান</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Award;
