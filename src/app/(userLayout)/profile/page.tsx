"use client";

import React, { useEffect, useState } from "react";
import profile from "../../../assets/team/team3.jpg";
import Image from "next/image";
import MUIForm from "@/components/Forms/Form";
import {
  Box,
  Button,
  Grid,
  Stack,
  Tab,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MUIInput from "@/components/Forms/Input";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import MUITextArea from "@/components/Forms/TextArea";
import MUIFileUploader from "@/components/Forms/FileUpload";
import DocUploader from "@/components/Forms/DocUploader";
import INTSelect from "@/components/Forms/Select";
import MUIAutoComplete from "@/components/Forms/AutoComplete";
import MUIFileUploadButton from "@/components/Forms/FileUploadButton";
import { theme } from "@/lib/Theme/Theme";
import { getCookie } from "@/helpers/Cookies";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import { SuccessMessage } from "@/components/success-message";
import { ErrorMessage } from "@/components/error-message";
import {
  useGetAllMembersQuery,
  useGetMemberForPaymentQuery,
} from "@/redux/api/memeberApi";
import Loader from "@/components/Loader";
import userImg from '../../../assets/logo/profile.png'
import MUIMultiValue from "@/components/Forms/MultiPleValue";
import { support_items } from "@/types";

// const validationSchema = z.object({
//   user: z.string().email("একটি বৈধ ইমেল ঠিকানা প্রদান করুন!").optional(),
//   password: z.string().min(6, "অন্তত ৬টি অক্ষর থাকতে হবে").optional(),

//   name: z.string().min(1, "নাম আবশ্যক").optional(),
//   phone: z.string().min(10, "অন্তত ১০টি সংখ্যা থাকা আবশ্যক").optional(),
//   email: z.string().email("একটি বৈধ ইমেল ঠিকানা প্রদান করুন!").optional(),
//   address: z.string().min(1, "ঠিকানা আবশ্যক").optional(),

//   businessOwner: z.string().min(1, "ব্যবসার মালিকের নাম আবশ্যক").optional(),
//   businessName: z.string().min(1, "ব্যবসার নাম আবশ্যক").optional(),
//   businessType: z.string().min(1, "ব্যবসার ধরন আবশ্যক").optional(),
//   businessAddress: z.string().min(1, "ব্যবসার ঠিকানা আবশ্যক").optional(),
//   website: z.string().optional(),
//   businessDetails: z.string().optional(),
//   // businessNeed: z.array(z.string()).min(1, "পরিষেবার প্রয়োজনীয়তা নির্বাচন করুন").optional(),
//   description: z.string().optional(),

//   investor: z.string().min(1, "বিনিয়োগকারীর নাম আবশ্যক").optional(),
//   investmentType: z.string().min(1, "বিনিয়োগের ধরন আবশ্যক").optional(),
//   investAmount: z.string().min(1, "বিনিয়োগের পরিমাণ আবশ্যক").optional(),
//   investTime: z.string().min(1, "বিনিয়োগের সময়কাল আবশ্যক").optional(),
//   investGoal: z.string().min(1, "বিনিয়োগের লক্ষ্য আবশ্যক").optional(),
//   investorDescription: z.string().optional(),
// });

interface UserData {
  _id: string;
  userId: string;
  name: string;
  auth: string;
  role: string;
  status: string;
  isVerified: boolean;
  isCompleted: boolean;
  profile_pic: string;
}

interface MemberShip {
  profile_pic?: string;
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  business_name?: string;
  business_type?: string;
  business_address?: string;
  website?: string;
  business_description?: string;
  need_of_service?: string[];
  additional_info?: string;
  investment_type?: string;
  investment_amount?: string;
  investment_period?: string;
  investment_goal?: string;
  memberShip?: string;
}
const isEmailValid = (auth: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(auth);
};

const isPhoneValid = (auth: string): boolean => {
  const phoneRegex = /^\d{10,11}$/;
  return phoneRegex.test(auth);
};
const Profile = () => {
  const [uploadedImage, setUploadedImage] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [userType, setUserType] = useState("business_owner");

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [memberShip, setMembership] = useState<MemberShip>({});

  const [userData, setUserData] = useState<UserData>({
    _id: "",
    userId: "",
    name: "",
    auth: "",
    role: "",
    status: "",
    profile_pic: "",
    isVerified: false,
    isCompleted: false,
  });

  const token = getCookie("mui-token");
  console.log(token)
  const router = useRouter();
  const params = useSearchParams();

  const member_type = params.get("member_type");
  const id = params.get("id");

  const { data: memberShipData, isLoading } = useGetMemberForPaymentQuery({
    token,
    member_type,
    id,
  });

  // useEffect(() => {
  //   const fetchedData = async () => {
  //     setSuccessMessage("");
  //     setErrorMessage([]);
  //     setLoading(true);

  //     try {
  //       const response = await axios.get(
  //         `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/single-user`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       if (response?.status === 200) {
  //         setUserData(response?.data?.data);
  //         toast.success(response?.data?.message);
  //       }
  //     } catch (error: any) {
  //       console.error("Error fetching data:", error);
  //       if (error?.response) {
  //         const { status, data } = error.response;
  //         if ([400, 404, 409, 500].includes(status)) {
  //           setErrorMessage(data.message);
  //         } else {
  //           setErrorMessage(["An unexpected error occurred."]);
  //         }
  //       } else {
  //         setErrorMessage(["Network error occurred."]);
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchedData();

  //   return () => {
  //     setLoading(false);
  //   };
  // }, [token]);

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

  let email;
  let phone;

  if (userData) {
    if (isEmailValid(userData.auth)) {
      email = userData.auth;
    } else if (isPhoneValid(userData.auth)) {
      phone = userData.auth;
    }
  }

  const submitHandler = async (data: FieldValues) => {
    data.profile_pic = imageUrl;
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
        },
      });
      console.log(response);
      if (
        response.status === 200 &&
        response.data.success === true &&
        response.data.data.success !== false
      ) {
        toast.success(response.data.message);
        setSuccessMessage(response.data.message);
        setLoading(false);
        console.log(response);

        if (response?.data?.data?.redirectUrl === "payment") {
          router.push(
            `/${response.data.data.redirectUrl}?member_type=${userType}&id=${response.data.data.userId}`
          );
        }
      }
      if (response.status === 200 && response.data.data.success === false) {
        toast.error(response.data.data.message);
        setErrorMessage([response.data.data.message]);
        setLoading(false);
        console.log(response);
        if (response?.data?.data?.redirectUrl === "payment") {
          router.push(
            `/${response.data.data.redirectUrl}?member_type=${userType}&id=${response.data.data.userId}`
          );
        }
      }
    } catch (error: any) {
      if (error.response) {
        console.log(error);
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

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setUserType(newValue);
  };
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const buttonStyle = {
    width: isMobile ? "200px" : "200px",
    height: "50px",
    backgroundColor: isMobile ? "#00305C" : "#1591A3",
    borderRadius: "3px",
    color: "#fff",
    margin: "0 auto",
    marginBottom: {
      xs: "10px",
    },
    padding: "0px",
    display: "flex",
    fontSize: {
      lg: "15px",
      xs: "11px",
    },
    justifyContent: "center",
    "&.Mui-selected": {
      backgroundColor: "#00305C",
      BorderBottom: "0px",
      color: "#fff",
    },
  };

  if (isLoading) {
    return <Loader />;
  }
  console.log(memberShipData);

  return (
    <>
      {loading ? (
        <p>Loading.......</p>
      ) : (
        <MUIForm
          onSubmit={submitHandler}
          defaultValues={memberShip && defaultValues}
        >
          <div className="flex flex-col md:flex-row justify-center text-center gap-5 items-center">
            <Image
              className="w-40 rounded-full "
              src={imageUrl ? imageUrl : userImg}
              alt="profile"
              height={100}
              width={100}
            />
            <div>
              <h4 className="text-xl md:text-3xl font-semibold ">
                {userData?.name}
              </h4>
              <p className="text-sm md:text-normal ">
                <b>USER ID:</b>
                {userData?.userId}
              </p>
              <MUIFileUploadButton
                name="profile_pic"
                setImageUrl={setImageUrl}
                imageUrl={imageUrl}
              />
            </div>
          </div>
          <div>
            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                sx={{ marginRight: "0px" }}
              >
                <MUIInput name="name" label="নাম " fullWidth size="medium" />
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                sx={{ marginRight: "0px" }}
              >
                <MUIInput
                  name="phone"
                  label="ফোন নাম্বার"
                  fullWidth
                  size="medium"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                sx={{ marginRight: "0px" }}
              >
                <MUIInput name="email" label="ইমেইল " fullWidth size="medium" />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                sx={{ marginRight: "0px" }}
              >
                <MUIInput
                  name="address"
                  label="ঠিকানা"
                  fullWidth
                  size="medium"
                />
              </Grid>


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

                          <MUIMultiValue name="need_of_service"
                            label="পরিষেবার প্রয়োজনীয়তা"
                            options={support_items} />

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
          </div>
        </MUIForm>
      )}
    </>
  );
};

export default Profile;
