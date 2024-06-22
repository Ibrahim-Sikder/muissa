"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "@mui/material/Grid";
import Container from "../Container/Container";
import investment from "../../../../assets/invest/investment.jpg";
import investment2 from "../../../../assets/invest/investment2.jpg";
import investment3 from "../../../../assets/invest/investment3.jpg";
import investment4 from "../../../../assets/invest/ivestment4.jpg";
import investment5 from "../../../../assets/invest/investment5.jpg";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Investment.css";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { Forward } from "@mui/icons-material";
import Link from "next/link";

export default function Investment() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const tabStyles = {
    border: "none",
    textAlign: "left",
    pl: 2,
    "& .MuiTab-wrapper": {
      justifyContent: "flex-start",
    },

    "&.Mui-selected": {
      borderLeft: "2px solid #1591A3",
      borderRight: "none",
      borderTop: "none",
      borderBottom: "none",
      color: "#1591A3",
      background: "#E9FDFF",
      opacity: "0.5",
    },
  };
  const buttonStyle = {
    marginTop: "15px",
    background: "#fff",
    border: "1px solid #000",
    borderRadius: "20px",
    width: "130px",
    height: "40px",
    color: "black",
    fontSize: "12px",
  };

  const tabData = [
    {
      value: "1",
      label: "প্রোডাক্ট সাপোর্ট  ",
      image: investment.src,
      content: (
        <div className="investmentContent">
          <ul className="space-y-3">
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                আমাদের মাধ্যমে আপনি পাবেন সকল প্রকার পন্যের সঠিক যোগান।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                আপনার ব্যবসার জন্য মার্কেট বিশ্লেষণ করে গুনগত পন্যের খোঁজ দিয়ে
                সহায়তা করি।{" "}
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                আপনার চাহিদা ও পরিমাণ অনুযায়ী পন্যের যোগান পেয়ে যাবেন এখানেই।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                আমাদের নিজস্ব কারখানা এবং বাইং হাউস থাকায় অধিকতর কম মূল্যে আমরা
                পন্য সাপ্লাই দিয়ে থাকি।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                বিদেশি পন্যের যোগানে আমাদের রয়েছে নিজস্ব আমদানিকারক প্রতিষ্ঠান।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                আপনার ব্যবসার ধরন বুঝে পন্য নির্বাচনে পরামর্শ দিয়ে থাকি।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                সনামধন্য ছোট,বড় ও মাঝারি পাইকারি বাজারের তথ্য দিয়ে সহায়তা করি।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                সুরক্ষিত ও অনুমদিত পন্যের যোগানে সাহায্য করে থাকি।
              </span>
            </li>
          </ul>

          <Button component={Link} href='/services'  sx={buttonStyle}>Know More</Button>
        </div>
      ),
    },

    {
      value: "2",
      label: "সেলস সাপোর্ট  ",
      image: investment2.src,
      content: (
        <div className="investmentContent">
          <ul className="space-y-3">
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">আমাদের রয়েছে দক্ষ Sales Team।</span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                আমাদের কাছে পাচ্ছেন কাস্টমার সাপোর্ট।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                আপনার প্রতিযোগীদের বিশ্লেষণ করে পন্যের মূল্য নির্ধারণে পরামর্শ
                দেই।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                ক্রেতাদের চাহিদা ও আচরন বিশ্লেষণ করে বিক্রয় প্রবনতা বাড়াতে
                পরামর্শ ও সাহায্য করে থাকি।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                নতুন পন্যের বিক্রয় কৌশল ও নতুন নতুন পন্য উদ্ভাবনের পরামর্শ
                প্রদান করে থাকি।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                আমরা মার্কেট বিশ্লেষণ করে পন্য বিক্রির সঠিক কৌশল সম্পর্কে
                ব্যবসায়ীদের অবগত করতে সক্ষম।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                আমাদের Sales Support এর সহায়তায় কোন প্রকার বিজ্ঞাপন বাজেট ছাড়াই
                আপনার প্রতিষ্ঠানের পণ্য বিক্রয় করতে পারবেন।
              </span>
            </li>
          </ul>

          <Button component={Link} href='/services'  sx={buttonStyle}>Know More</Button>
        </div>
      ),
    },
    {
      value: "3",
      label: "ডেলিভারি সাপোর্ট  ",
      image: investment3.src,
      content: (
        <div className="investmentContent">
          <ul className="space-y-3">
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">আমাদের রয়েছে দক্ষ ডেলিভারি ম্যান। </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                দক্ষ ও অভিজ্ঞ ডেলিভারি বয় দ্বারা দ্রুততম সময়ে আপনার পন্য পৌঁছে
                যাবে ভোক্তার কাছে।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                পন্যের মান ঠিক রাখতে সঠিক প্যাকেজিং এ সর্বোচ্চ গুরুত্ব দিয়ে
                থাকি।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                দূর্ঘটনাবশত পন্যের কোন ক্ষতি হলে পাচ্ছেন ইনসুরেন্সে ফেসিলিটি।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                গ্রাহকের প্রয়োজনে আমরা সেম ডে ডেলিভারি প্রধান করে থাকি।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                আমরা পন্য রিটার্ন পলিসি নির্ধারণ ও সার্বিক পরামর্শ দিয়ে সহায়তা
                করি।
              </span>
            </li>
          </ul>

          <Button component={Link} href='/services'  sx={buttonStyle}>Know More</Button>
        </div>
      ),
    },

    {
      value: "4",
      label: "আইটি সাপোর্ট ",
      image: investment4.src,
      content: (
        <div className="investmentContent">
          <h3>ETIAM CURSUS PURUS VEL QUAM SOLLICITUDIN, SIT AMET SUSCIPIT</h3>
          <p className="my-3 leading-7">
            Ut nunc leo, sodales nec ullamcorper sit amet, pulvinar nec purus.
            Aliquam sit amet accumsan felis. Duis sollicitudin consectetur quam.
            In at lacus et tellus blandit tincidunt. Suspendisse id risus
            efficitur.
          </p>
          <Button component={Link} href='/services'  sx={buttonStyle}>Know More</Button>
        </div>
      ),
    },
    {
      value: "5",
      label: "ফান্ডিং সাপোর্ট ",
      image: investment5.src,
      content: (
        <div className="investmentContent">
          <ul className="space-y-3">
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                ব্যবসায়ের জরুরী ফান্ড তৈরিতে পরামর্শ ও সহযোগিতা করা।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                প্রতিষ্ঠানের কাগজাদি তৈরিতে পরামর্শ ও সহযোগিতা করা।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">ফান্ডিং প্রোপোজাল তৈরি করা।</span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                ইনভেস্টরের জন্য একটি শক্তিশালী বক্তব্য তৈরী ও পরামর্শ প্রদান।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                ব্যবসায়ের মার্কেট Analysis এর মাধ্যমে বাজার তৈরি করা ও পরামর্শ
                প্রদান
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                প্রতিষ্ঠানের Analysis Report তৈরিতে সহযোগিতা করা।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                প্রতিষ্ঠানের Monitoring Report File তৈরি করা।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                প্রতিষ্ঠানের কার্যপদ্ধতি নির্ধারণে পরামর্শ প্রদান।
              </span>
            </li>
          </ul>
          {/* <h3>ETIAM CURSUS PURUS VEL QUAM SOLLICITUDIN, SIT AMET SUSCIPIT</h3>
          <p className="my-3 leading-7">
            Ut nunc leo, sodales nec ullamcorper sit amet, pulvinar nec purus.
            Aliquam sit amet accumsan felis. Duis sollicitudin consectetur quam.
            In at lacus et tellus blandit tincidunt. Suspendisse id risus
            efficitur.
          </p> */}
         <Button component={Link} href='/services'  sx={buttonStyle}>Know More</Button>
        </div>
      ),
    },
    {
      value: "6",
      label: "ইনভেস্টমেন্ট সাপোর্ট",
      image: investment5.src,
      content: (
        <div className="investmentContent">
          <ul className="space-y-3">
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                আমরা বিনিয়োগকারীর একজন উপদেষ্টা হয়ে কাজ করি।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                আমরা বিনিয়োগকারীর বিনিয়োগের প্রতিষ্ঠান নির্বাচনের জন্য
                প্রতিষ্ঠানের Fundamental ও Technical বিষয়ে Analysis করে থাকি।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                আমরা বিনিয়োগকারীকে বিনিয়োগের কন্ডিশন নির্ধারণ করতে সহায়তা করে
                থাকি।{" "}
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                নিয়োগের পূর্বে প্রতিষ্ঠানের বাজার সম্ভাব্যতা যাচাই করে স্বচ্ছ
                রিপোর্ট দিয়ে থাকি।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                আমরা বিনিয়োগকারীর জন্য নিরাপদ বিনিয়োগের বাজার খুঁজে বেড় করি এবং
                কার্যকরী সিধান্ত গ্রহনে পরামর্শ দিয়ে থাকি।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                আমাদের সঠিক পরামর্শ ও নীতি নিশ্চিতভাবে বিনিয়োগকারীর মূলধন বাড়াতে
                সাহায্য করবে। বিনিয়োগকৃত প্রতিষ্ঠানকে সর্বদা মনিটরিং এবং ঐ
                প্রতিষ্ঠানের Market Analysis, Financial Report ও Sales Report
                পর্যবেক্ষনে রাখি।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                আমরা বিনিয়োগকারীর চাহিদা ও বর্তমান অবস্থা বুঝে সঠিক পরামর্শ দেই।
              </span>
            </li>
          </ul>
          {/* <h3>ETIAM CURSUS PURUS VEL QUAM SOLLICITUDIN, SIT AMET SUSCIPIT</h3>
          <p className="my-3 leading-7">
            Ut nunc leo, sodales nec ullamcorper sit amet, pulvinar nec purus.
            Aliquam sit amet accumsan felis. Duis sollicitudin consectetur quam.
            In at lacus et tellus blandit tincidunt. Suspendisse id risus
            efficitur.
          </p> */}
         <Button component={Link} href='/services'  sx={buttonStyle}>Know More</Button>
        </div>
      ),
    },
    {
      value: "7",
      label: "মার্কেটিং সাপোর্ট ",
      image: investment5.src,
      content: (
        <div className="investmentContent">
          <ul className="space-y-3">
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                আমাদের নিজস্ব অভিজ্ঞ ও দক্ষ মার্কেটিং টিম রয়েছে।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">আমাদের রয়েছে ৩৬০° বিজ্ঞাপন সেবা</span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                আমাদের রয়েছে স্টুডিও ও গ্রাফিক্স ডিজাইন এর দক্ষ টিম।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                বিজ্ঞাপন সেবা (All type of social media marketing, google ads
                marketing and many more) পাচ্ছেন আমাদের প্লাটফর্মে।
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                আমাদের সহযোগিতায় আপনি অধিক সেল জেনারেট করতে সক্ষম হবেন
              </span>
            </li>
            <li className="flex items">
              {" "}
              <Forward />{" "}
              <span className="ml-2">
                আপনার প্রতিষ্ঠানকে একটি ব্রান্ড হিসেবে গড়ে তুলতে আমাদের
                মার্কেটিং টিম প্রস্তুত।
              </span>
            </li>
          </ul>

          <Button sx={buttonStyle}>Know More</Button>
        </div>
      ),
    },
  ];

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container className="sectionMargin">
      <SectionTitle
        title="আমাদের সেবা"
        subtitle="আমাদের ব্যবসা পরামর্শক প্রতিষ্ঠানটি আপনাকে সঠিক পরিকল্পনা এবং কৌশল প্রদান করতে প্রতিশ্রুতিবদ্ধ। আমরা ব্যবসা উন্নয়ন, বাজার গবেষণা, আর্থিক বিশ্লেষণ, এবং পরিচালনায় দক্ষতা বৃদ্ধি করতে সহায়তা করি"
      />
      <Box sx={{ width: "100%", typography: "body1", marginTop: "50px" }}>
        <TabContext value={value}>
          <Grid container>
            <Grid item xs={12} md={3}>
              <Box sx={{ height: "100%" }}>
                <TabList
                  orientation={isSmallScreen ? "horizontal" : "vertical"}
                  scrollButtons="auto"
                  variant="scrollable"
                  onChange={handleChange}
                  
                  aria-label="scrollable auto tabs example"
                  sx={{
                    borderRight: "none",
                    border: "none",
                    "& .MuiTabs-indicator": {
                      display: "none",
                    },
                  }}
                >
                  {tabData.map((tab) => (
                    <Tab
                      key={tab.value}
                      label={tab.label}
                      value={tab.value}
                      sx={tabStyles}
                    />
                  ))}
                </TabList>
              </Box>
            </Grid>

            <Grid item xs={12} md={9}>
              <TransitionGroup>
                {tabData.map(
                  (tab) =>
                    value === tab.value && (
                      <CSSTransition
                        key={tab.value}
                        timeout={500}
                        classNames="fade"
                      >
                        <TabPanel value={tab.value} sx={{ border: "none" }}>
                          <div
                            className="investmentCardWrap"
                            style={{ backgroundImage: `url(${tab.image})` }}
                          >
                            {tab.content}
                          </div>
                        </TabPanel>
                      </CSSTransition>
                    )
                )}
              </TransitionGroup>
            </Grid>
          </Grid>
        </TabContext>
      </Box>
    </Container>
  );
}
