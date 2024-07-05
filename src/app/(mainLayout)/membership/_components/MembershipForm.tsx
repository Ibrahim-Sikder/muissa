"use client";

import React, { useState } from "react";
import "../membership.css";
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

import DocUploader from "@/components/Forms/DocUploader";
import MUITextArea from "@/components/Forms/TextArea";
import MUIInput from "@/components/Forms/Input";
import MUIForm from "@/components/Forms/Form";
import { zodResolver } from "@hookform/resolvers/zod";

import { getCookie } from "@/helpers/Cookies";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { SuccessMessage } from "@/components/success-message";
import { ErrorMessage } from "@/components/error-message";

import { useGetDiscountForPaymentQuery } from "@/redux/api/paymentApi";
import Loader from "@/components/Loader";
import MUIMultiValue from "@/components/Forms/MultiPleValue";
import { support_items } from "@/types";

const validationSchema = z.object({
  // businessOwner: z.string().min(1, "ব্যবসার মালিকের নাম আবশ্যক").optional(),
  business_name: z.string().min(1, "ব্যবসার নাম আবশ্যক"),
  business_type: z.string().min(1, "ব্যবসার ধরন আবশ্যক"),
  business_address: z.string().min(1, "ব্যবসার ঠিকানা আবশ্যক"),
  website: z.string().optional(),
  business_description: z.string().min(1, "ব্যবসার বিস্তারিত আবশ্যক"),
  // businessNeed: z.array(z.string()).min(1, "পরিষেবার প্রয়োজনীয়তা নির্বাচন করুন").optional(),
  need_of_service: z
    .array(z.string())
    .min(1, "পরিষেবার প্রয়োজনীয়তা নির্বাচন করুন"),

  // investor: z.string().min(1, "বিনিয়োগকারীর নাম আবশ্যক"),
  investment_type: z.string().min(1, "বিনিয়োগের ধরন আবশ্যক"),
  investment_amount: z.string().min(1, "বিনিয়োগের পরিমাণ আবশ্যক"),
  investment_period: z.string().min(1, "বিনিয়োগের সময়কাল আবশ্যক"),
  investment_goal: z.string().min(1, "বিনিয়োগের লক্ষ্য আবশ্যক"),

  additional_info: z.string().optional(),
  upload_file: z.string(),
});

const defaultValues = {
  business_name: "",
  business_type: "",
  business_address: "",
  website: "",
  business_description: "",
  need_of_service: [],

  investment_type: "",
  investment_amount: "",
  investment_period: "",
  investment_goal: "",

  additional_info: "",
  upload_file: "",
};

const MembershipForm = () => {
  const [uploadedImage, setUploadedImage] = useState<string>("");
  const [userType, setUserType] = useState("business_owner");
  const { data: discountData, isLoading } = useGetDiscountForPaymentQuery({});

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const token = getCookie("mui-token");
  const router = useRouter();

  const handleSubmit = async (data: FieldValues) => {
    if (Array.isArray(data.need_of_service)) {
      data.need_of_service = data.need_of_service.map((item) => item.title);
    }
    data.upload_file = uploadedImage;
    data.member_type = userType;

    if (userType === "investor") {
      const investmentAmount = Number(data.investment_amount);
      data.investment_amount = investmentAmount;
    }

    setSuccessMessage("");
    setErrorMessage([]);
    setLoading(true);

    try {
      const endpoint =
        userType === "business_owner"
          ? `${process.env.NEXT_PUBLIC_BASE_API_URL}/members/create-business-owner`
          : userType === "investor"
          ? `${process.env.NEXT_PUBLIC_BASE_API_URL}/members/create-investor`
          : null;

      if (!endpoint) {
        throw new Error("Invalid user type");
      }

      const response = await axios.post(endpoint, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (
        response.status === 200 &&
        response.data.success === true &&
        response.data.data.success !== false
      ) {
        toast.success(response.data.message);
        setSuccessMessage(response.data.message);

        router.push(
          `/${response.data.data.redirectUrl}?member_type=${userType}&id=${response.data.data.userId}`
        );
      }
      if (response.status === 200 && response.data.data.success === false) {
        toast.error(response.data.data.message);
        setErrorMessage([response.data.data.message]);
        router.push(
          `/${response.data.data.redirectUrl}?member_type=${userType}&id=${response.data.data.userId}`
        );
      }
    } catch (error: any) {
      if (error.response) {
        const { status, data } = error.response;
        if ([400, 404, 401, 409, 500].includes(status)) {
          setErrorMessage(data.message);
        } else {
          setErrorMessage(["An unexpected error occurred."]);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setUserType(newValue);
  };
  const buttonStyle = {
    width: "200px",
    height: "50px",
    backgroundColor: "#1591A3",
    borderRadius: "3px",
    color: "#fff",
    fontSize: {
      sm: "12px",
      md: "15px",
    },
    margin: "0 auto",
    marginBottom: {
      xs: "10px",
    },
    justifyContent: "center",
    "&.Mui-selected": {
      backgroundColor: "#00305C",
      BorderBottom: "0px",
      color: "#fff",
    },
  };

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (isLoading) {
    return <Loader />;
  }
  const originalPrice = 500;
  const discountedPrice = originalPrice - discountData?.discount_amount;
  const convertedOriginalPrice = convertToBengaliNumerals(originalPrice);
  const convertedDiscountedPrice = convertToBengaliNumerals(discountedPrice);

  function convertToBengaliNumerals(num: number): string {
    const bengaliNumerals = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return num
      .toString()
      .split("")
      .map((digit) => bengaliNumerals[Number(digit)])
      .join("");
  }

  return (
    <>
      <Container>
        <div className="grid grid-cols-1  mt-14 w-full xl:w-[800px] lg:w-[500px] mx-auto   ">
          <div className="mb-5 ">
            <h3 className="text-2xl font-semibold ">সদস্যতা নিবন্ধন</h3>
            <p className="mt-2 ">
              আমাদের সদস্য হতে নিচের ফর্মটি পূরণ করুন এবং সদস্যতা ফি প্রদান
              করুন। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
            </p>
          </div>

          <MUIForm
            onSubmit={handleSubmit}
            // resolver={zodResolver(validationSchema)}
            // defaultValues={defaultValues}
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
                        label="As a Business Owner "
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
                        <Grid item xs={12} sm={6} md={6} lg={12}>
                          <MUIMultiValue
                            name="need_of_service"
                            label="পরিষেবার প্রয়োজনীয়তা"
                            options={support_items}
                          />
                        </Grid>

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

                        <div className="my-1">
                          {successMessage && (
                            <SuccessMessage message={successMessage} />
                          )}
                          {errorMessage && (
                            <ErrorMessage message={errorMessage} />
                          )}
                        </div>
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
                              disabled={loading}
                              type="submit"
                              sx={{ display: "block", margin: "0 auto" }}
                            >
                              {loading ? (
                                <span>অপেক্ষা করুন</span>
                              ) : (
                                <span>সাবমিট করুন</span>
                              )}
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
                        <Grid item xs={12} sm={6} md={6} lg={12}></Grid>
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
                            type="number"
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
                        <div className="my-1">
                          {successMessage && (
                            <SuccessMessage message={successMessage} />
                          )}
                          {errorMessage && (
                            <ErrorMessage message={errorMessage} />
                          )}
                        </div>
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
                              disabled={loading}
                              type="submit"
                              sx={{ display: "block", margin: "0 auto" }}
                            >
                              {loading ? (
                                <span>অপেক্ষা করুন</span>
                              ) : (
                                <span>সাবমিট করুন</span>
                              )}
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
    </>
  );
};

export default MembershipForm;
