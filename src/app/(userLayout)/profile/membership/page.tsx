"use client";

import React, { useEffect, useState } from "react";
import Container from "@/components/ui/HomePage/Container/Container";

import {
  Box,
  Button,
  Grid,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BusinessOwnerForm from "@/app/(mainLayout)/membership/_components/BusinessOwnerForm";
import InvestorForm from "@/app/(mainLayout)/membership/_components/InvestorForm";


import Image from "next/image";
import "./membership.css";
import DocUploader from "@/components/Forms/DocUploader";
import MUITextArea from "@/components/Forms/TextArea";
import MUIInput from "@/components/Forms/Input";
import MUIMultiSelect from "@/components/Forms/MultiSelect";
import { supportServices } from "@/types";
import MUIForm from "@/components/Forms/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { serviceData } from "./serviceData";
import { getCookie } from "@/helpers/Cookies";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import { useGetMemberForPaymentQuery } from "@/redux/api/memeberApi";

const validationSchema = z.object({
  user: z.string().email("একটি বৈধ ইমেল ঠিকানা প্রদান করুন!").optional(),
  password: z.string().min(6, "অন্তত ৬টি অক্ষর থাকতে হবে").optional(),

  name: z.string().min(1, "নাম আবশ্যক").optional(),
  phone: z.string().min(10, "অন্তত ১০টি সংখ্যা থাকা আবশ্যক").optional(),
  email: z.string().email("একটি বৈধ ইমেল ঠিকানা প্রদান করুন!").optional(),
  address: z.string().min(1, "ঠিকানা আবশ্যক").optional(),

  businessOwner: z.string().min(1, "ব্যবসার মালিকের নাম আবশ্যক").optional(),
  businessName: z.string().min(1, "ব্যবসার নাম আবশ্যক").optional(),
  businessType: z.string().min(1, "ব্যবসার ধরন আবশ্যক").optional(),
  businessAddress: z.string().min(1, "ব্যবসার ঠিকানা আবশ্যক").optional(),
  website: z.string().optional(),
  businessDetails: z.string().optional(),
  // businessNeed: z.array(z.string()).min(1, "পরিষেবার প্রয়োজনীয়তা নির্বাচন করুন").optional(),
  description: z.string().optional(),

  investor: z.string().min(1, "বিনিয়োগকারীর নাম আবশ্যক").optional(),
  investmentType: z.string().min(1, "বিনিয়োগের ধরন আবশ্যক").optional(),
  investAmount: z.string().min(1, "বিনিয়োগের পরিমাণ আবশ্যক").optional(),
  investTime: z.string().min(1, "বিনিয়োগের সময়কাল আবশ্যক").optional(),
  investGoal: z.string().min(1, "বিনিয়োগের লক্ষ্য আবশ্যক").optional(),
  investorDescription: z.string().optional(),
});

// const defaultValues = {
//   user: "",
//   password: "",
//   name: "",
//   phone: "",
//   email: "",
//   address: "",
//   businessOwner: "",
//   businessName: "",
//   businessType: "",
//   businessAddress: "",
//   website: "",
//   businessDetails: "",
//   // businessNeed: [],
//   description: "",
//   investor: "",
//   investmentType: "",
//   investAmount: "",
//   investTime: "",
//   investGoal: "",
//   investorDescription: "",
// };

const Membership = () => {
  const [uploadedImage, setUploadedImage] = useState<string>("");
  const [userType, setUserType] = useState("business_owner");
  const token = getCookie("mui-token");
  const router = useRouter();
  const params = useSearchParams();

  const member_type = params.get("member_type");
  const id = params.get("id");

  const { data: memberShipData, isLoading } = useGetMemberForPaymentQuery({ token, member_type, id })
  console.log(memberShipData, 'this is member ship page from ')



  const defaultValues = {
    profile_pic: memberShipData?.user?.profile_pic || "",
    name: memberShipData?.user?.name || "",
    email: memberShipData?.user?.auth || "",
    additional_info: memberShipData?.additional_info || "",
    need_of_service: memberShipData?.need_of_service || "",
    business_description: memberShipData?.business_description || "",
    website: memberShipData?.website || "",
    business_address: memberShipData?.business_address || "",
    business_name: memberShipData?.business_name || "",
    business_type: memberShipData?.business_type || "",


  };


  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setUserType(newValue);
  };
  const buttonStyle = {
    width: "200px",
    height: "50px",
    backgroundColor: "#1591A3",
    borderRadius: "3px",
    color: "#fff",
    margin: "5px auto",
    justifyContent: "center",
    "&.Mui-selected": {
      backgroundColor: "#00305C",
      BorderBottom: "0px",
      color: "#fff",
    },
  };

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {
        isLoading ? (
          <p>Loading</p>
        ) : (
          <Container>
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
            <div className="grid grid-cols-1  mt-14 xl:w-[800px] mx-auto   ">
              <div className="mb-5 ">
                <h3 className="text-2xl font-semibold ">সদস্যতা নিবন্ধন</h3>
                <p className="mt-2 ">
                  আমাদের সদস্য হতে নিচের ফর্মটি পূরণ করুন এবং সদস্যতা ফি প্রদান
                  করুন। <br /> আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
                </p>
              </div>

              <MUIForm
                onSubmit={handleSubmit}
                // resolver={zodResolver(validationSchema)}
                defaultValues={defaultValues}
              >
                <Grid container spacing={1}>
                  <Box
                    sx={{
                      width: "100%",
                      typography: "body1",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <TabContext value={userType}>
                      <Box>
                        <TabList
                          onChange={handleChange}
                          aria-label="lab API tabs example"
                          orientation={isMobile ? "vertical" : "horizontal"}
                          sx={{
                            flexDirection: isMobile ? "column" : "row",
                            justifyContent: "center",
                            width: {
                              lg: "430px",
                            },
                          }}
                        >
                          <Tab
                            sx={buttonStyle}
                            label=" As a Business Owner "
                            value="business_owner"
                          />
                          <Tab
                            sx={buttonStyle}
                            label="As a Investor  "
                            value="investor"
                          />
                        </TabList>
                      </Box>
                      <TabPanel value="business_owner" sx={{ padding: "0px" }}>
                        <Stack
                          direction={isMobile ? "column" : "row"}
                          spacing={{ xs: 1, md: 3, lg: 3 }}
                        >
                          <Grid container spacing={1}>
                            {/* <Grid item xs={12} sm={6} md={6} lg={12}>
                      <MUIInput
                        name="businessOwner"
                        label="AS A BUSINESS OWNER "
                        fullWidth
                        size="medium"
                      />
                    </Grid> */}
                            <Grid item xs={12} sm={6} md={6} lg={12}>
                              <MUIInput
                                name="business_name"
                                label="ব্যবসার নাম "
                                fullWidth
                                size="medium"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={12}>
                              <MUIInput
                                name="business_type"
                                label="ব্যবসার ধরন"
                                fullWidth
                                size="medium"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={12}>
                              <MUIInput
                                name="business_address"
                                label="ব্যবসার ঠিকানা"
                                fullWidth
                                size="medium"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={12}>
                              <MUIInput
                                name="website"
                                label="ওয়েবসাইট (যদি থাকে)"
                                fullWidth
                                size="medium"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={12}>
                              <MUIInput
                                name="business_description"
                                label="ব্যবসার বিবরণ"
                                fullWidth
                                size="medium"
                              />
                            </Grid>
                            {/* <Grid item xs={12} sm={6} md={6} lg={12}>
                          <MUIMultiSelect
                            items={supportServices}
                            name="need_of_service"
                            label="পরিষেবার প্রয়োজনীয়তা"
                            fullWidth
                            size="medium"
                          />
                        </Grid> */}

                            <Grid item xs={12} sm={6} md={12} lg={12}>
                              <MUITextArea
                                name="additional_info"
                                placeholder="আপনার কোন বিশেষ চাহিদা বা অনুরোধ আছে?"
                                minRows={3}
                                sx={{
                                  border: "1px solid #ddd",
                                  padding: "10px",
                                }}
                              />
                            </Grid>
                          </Grid>
                          <Box>
                            <DocUploader
                              sx={{ fontSize: "20px" }}
                              name="upload_file"
                              setUploadedImage={setUploadedImage}
                              uploadedImage={uploadedImage}
                            />

                            <Grid
                              item
                              xs={12}
                              sm={6}
                              md={6}
                              lg={12}
                              sx={{ marginTop: "10px" }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  width: "100%",
                                }}
                              >
                                <Button
                                  type="submit"
                                  sx={{ display: "block", margin: "0 auto" }}
                                >
                                  সাবমিট করুন
                                </Button>
                              </Box>
                            </Grid>
                          </Box>
                        </Stack>
                      </TabPanel>
                      <TabPanel value="investor" sx={{ padding: "0px" }}>
                        <Stack
                          direction={isMobile ? "column" : "row"}
                          spacing={{ xs: 1, md: 3, lg: 3 }}
                        >
                          <Grid container spacing={1}>
                            <Grid item xs={12} sm={6} md={6} lg={12}>
                              {/* <Grid item xs={12} sm={6} md={6} lg={12}>
                        <MUIInput
                          name="investor"
                          label="AS A INVESTOR "
                          fullWidth
                          size="medium"
                        />
                      </Grid> */}
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={12}>
                              <MUIInput
                                name="investment_type"
                                label="বিনিয়োগের ধরন"
                                fullWidth
                                size="medium"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={12}>
                              <MUIInput
                                name="investment_amount"
                                label="বিনিয়োগের পরিমাণ"
                                fullWidth
                                size="medium"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={12}>
                              <MUIInput
                                name="investment_period"
                                label="বিনিয়োগের সময়কাল"
                                fullWidth
                                size="medium"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={12}>
                              <MUIInput
                                name="investment_goal"
                                label="বিনিয়োগের লক্ষ্য"
                                fullWidth
                                size="medium"
                              />
                            </Grid>

                            <Grid item xs={12} sm={6} md={6} lg={12}>
                              <MUITextArea
                                name="additional_info"
                                placeholder="আপনার কোন বিশেষ চাহিদা বা অনুরোধ আছে?"
                                minRows={3}
                                sx={{
                                  border: "1px solid #ddd",
                                  padding: "10px",
                                }}
                              />
                            </Grid>
                          </Grid>
                          <Box
                            sx={{
                              marginTop: "50px",
                            }}
                          >
                            <DocUploader
                              sx={{ fontSize: "20px" }}
                              name="upload_file"
                              setUploadedImage={setUploadedImage}
                              uploadedImage={uploadedImage}
                            />

                            <Grid
                              item
                              xs={12}
                              sm={6}
                              md={6}
                              lg={12}
                              sx={{ marginTop: "10px" }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  width: "100%",
                                }}
                              >
                                <Button
                                  type="submit"
                                  sx={{ display: "block", margin: "0 auto" }}
                                >
                                  সাবমিট করুন
                                </Button>
                              </Box>
                            </Grid>
                          </Box>
                        </Stack>
                      </TabPanel>
                    </TabContext>
                  </Box>
                </Grid>
              </MUIForm>
            </div>
          </Container>
        )
      }
    </>
  );
};

export default Membership;
