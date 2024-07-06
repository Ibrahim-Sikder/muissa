"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import MUIForm from "@/components/Forms/Form";
import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import MUIInput from "@/components/Forms/Input";
import MUIFileUploadButton from "@/components/Forms/FileUploadButton";
import { getCookie } from "@/helpers/Cookies";
import axios from "axios";
import { toast } from "sonner";
import { SuccessMessage } from "@/components/success-message";
import { ErrorMessage } from "@/components/error-message";
import userImg from "../../../assets/logo/profile.png";
import ProfileLoader from "@/components/ProfileLoader";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const validationSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .optional(),

  email: z
    .string()
    .trim()
    .email()
    .refine((email) => isEmailValid(email), {
      message: "Enter valid email",
    })
    .optional(),
  phone: z
    .string()
    .trim()
    .refine((phone) => isPhoneValid(phone), {
      message: "Enter a valid phone number",
    })
    .optional(),

  profile_pic: z.string({
    invalid_type_error: "Profile pic must be a string",
  }),

  street_address: z.string({
    invalid_type_error: "Street_address must be a string",
  }),

  city: z.string({
    invalid_type_error: "City must be a string",
  }),
  state: z.string({
    invalid_type_error: "State must be a string",
  }),
  postal_code: z.string({
    invalid_type_error: "Postal_code must be a string",
  }),
  country: z.string({
    invalid_type_error: "Country must be a string",
  }),
});

interface UserData {
  _id: string;
  userId: string;
  name: string;
  auth: string;
  email: string;
  phone: string;
  role: string;
  status: string;
  isVerified: boolean;
  isCompleted: boolean;
  profile_pic: string;
  street_address: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
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
  const [imageUrl, setImageUrl] = useState<string>("");

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [getLoading, setGetLoading] = useState<boolean>(false);
  const [reload, setReload] = useState<boolean>(false);
const router = useRouter()
  const [userData, setUserData] = useState<UserData>({
    _id: "",
    userId: "",
    name: "",
    auth: "",
    email: "",
    phone: "",
    role: "",
    status: "",
    street_address: " ",
    city: " ",
    state: "",
    postal_code: "",
    country: "",
    profile_pic: "",
    isVerified: false,
    isCompleted: false,
  });

  const token = getCookie("mui-token");

  useEffect(() => {
    const fetchedData = async () => {
      setSuccessMessage("");
      setErrorMessage([]);
      setGetLoading(true);

      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/single-user`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response?.status === 200) {
          setUserData(response?.data?.data);
        }
      } catch (error: any) {
        if (error?.response) {
          const { status, data } = error.response;
          if ([400, 404, 409, 500].includes(status)) {
            setErrorMessage(data.message);
          } else {
            setErrorMessage(["An unexpected error occurred."]);
          }
        } else {
          setErrorMessage(["Network error occurred."]);
        }
      } finally {
        setGetLoading(false);
      }
    };

    fetchedData();

    return () => {
      setGetLoading(false);
    };
  }, [token, reload]);

  let email;
  let phone;

  if (userData) {
    email = isEmailValid(userData.auth) ? userData.auth : userData.email;
    phone = isPhoneValid(userData.auth) ? userData.auth : userData.phone;
  }

  const defaultValues = {
    profile_pic: userData?.profile_pic || "",
    name: userData?.name || "",
    auth: email || phone || "",
    phone: phone || "",
    email: email || "",
    street_address: userData?.street_address || "",
    city: userData?.city || "",
    state: userData?.state || "",
    postal_code: userData?.postal_code || "",
    country: userData?.country || "",
  };

  console.log(userData)
  const submitHandler = async (data: any) => {
    data.profile_pic = imageUrl;

    setSuccessMessage("");
    setErrorMessage([]);
    setLoading(true);

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/profile`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        setSuccessMessage(response.data.message);
        setReload(!reload);

       window.location.href = "/membership"

      }
    } catch (error: any) {
      if (error.response) {
        const { status, data } = error.response;
        if ([400, 404, 401, 409, 500].includes(status)) {
          // setErrorMessage(data.message);
          toast.error(data.message)
        } else {
          // setErrorMessage(["An unexpected error occurred."]);
          toast.error(error.message)
        }
      }
    } finally {
      setLoading(false);
    }
  };

  // const handleChange = (_: React.SyntheticEvent, newValue: string) => {
  //   setUserType(newValue);
  // };
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (getLoading || loading) {
    return <ProfileLoader />;
  }
  return (
    <>
      {getLoading ? (
        <ProfileLoader />
      ) : (
        <MUIForm
          onSubmit={submitHandler}
          // resolver={zodResolver(validationSchema)}
          defaultValues={defaultValues}
        >
          <div className="flex flex-col md:flex-row justify-center text-center gap-5 items-center">
            <Image
              className="w-40 rounded-full "
              src={imageUrl || userData?.profile_pic || userImg}
              alt="profile"
              height={100}
              width={100}
            />
            <div>
              <h4 className="text-xl md:text-3xl font-semibold capitalize ">
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
                  disabled={isPhoneValid(userData.auth)}
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
                <MUIInput
                  name="email"
                  label="ইমেইল "
                  fullWidth
                  size="medium"
                  disabled={isEmailValid(userData.auth)}
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
                <MUIInput
                  name="street_address"
                  label="রাস্তার ঠিকানা"
                  type="text"
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
                <MUIInput
                  name="city"
                  label="শহর"
                  type="text"
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
                <MUIInput
                  name="state"
                  label="অবস্থান"
                  type="text"
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
                <MUIInput
                  name="postal_code"
                  label="পোস্ট কোড"
                  type="text"
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
                <MUIInput
                  name="country"
                  label="দেশ"
                  type="text"
                  fullWidth
                  size="medium"
                />
              </Grid>

              <Grid item xs={12} sx={{ marginRight: "0px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    type="submit"
                    sx={{ display: "", margin: "0 auto", width: "200px" }}
                  >
                    আপডেট করুন
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <div className="my-2">
              {successMessage && <SuccessMessage message={successMessage} />}
              {errorMessage && <ErrorMessage message={errorMessage} />}
            </div>
          </div>
        </MUIForm>
      )}
    </>
  );
};

export default Profile;
