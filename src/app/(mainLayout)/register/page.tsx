/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Box,
  Button,
  Checkbox,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MUIForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { SuccessMessage } from "@/components/success-message";
import { ErrorMessage } from "@/components/error-message";
import { toast } from "sonner";
import { setCookie } from "@/helpers/Cookies";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const validationSchema = z
  .object({
    name: z.string().min(3, "Name is required"),
    auth: z.string({ required_error: "This field is required." }).refine(
      (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{11,}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      },
      {
        message: "Please enter a valid email address or phone number!",
      }
    ),
    password: z.string().min(6, "Must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const Register = () => {
  const router = useRouter();
  const isLargeDevice = useMediaQuery("(min-width:960px)");
  const isSmallDevice = useMediaQuery("(max-width:600px)");

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#002140",
      },
      "&:hover fieldset": {
        borderColor: "green",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#002140",
      },
      color: "#002140",
    },
    "& .MuiInputLabel-root": {
      color: "#002140", // Label color
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#002140",
    },
    "& .MuiInputBase-input": {
      color: "#002140",
    },
  };

  const handleSubmit = async (data: FieldValues) => {
    setSuccessMessage("");
    setErrorMessage([]);
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/create-user`,
        data
      );

      if (response?.status === 200) {
        toast.success(response?.data?.message);
        setSuccessMessage(response?.data?.message);
        // router.push(`/verify?auth=${data.auth}`);
        setCookie("mui-token", response?.data?.data?.token, { expires: 10 });
        router.push(`/profile`);
        setLoading(false);
      }
    } catch (error: any) {
      if (error?.response) {
        const { status, data } = error.response;
        if ([400,401,409, 404, 500].includes(status)) {
          setErrorMessage(data.message);
        } else {
          setErrorMessage(["An unexpected error occurred."]);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-[#f8f8f8] "
      style={{
        background: isLargeDevice
          ? "linear-gradient(to left , #002140 50%, white 50%)"
          : "",
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "80%",
            lg: "60%",
            xl: "50%",
          },
          mx: "auto",
        }}
      >
        <Box
          sx={{
            width: isLargeDevice ? "625px" : "100%",
            height: isLargeDevice ? "700px" : "auto",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "#002140",
            justifyItems: "center",
            color: "#fff",
            padding: "0px 50px",
            display: isLargeDevice ? "flex" : "none",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Welcome To Muissa Business Consulting Ltd.
          </Typography>
          <Typography component="p" sx={{ marginTop: "10px", color: "#fff" }}>
            Elevate your business with our expert support in Product, Sales,
            Marketing, Delivery, IT, Funding, and Investment. Transform
            potential into performance with seamless, tailored solutions.
          </Typography>
        </Box>
        <Box className="bg-[#fff] shadow-md px-5 py-16  md:p-20 mx-3 md:m-aut0 lg:m-0 lg:mx-0 rounded-md md:rounded-none  w-full md:w-[600px]  flex items-center text-[#002140] ">
          <MUIForm
            onSubmit={handleSubmit}
            resolver={zodResolver(validationSchema)}
            defaultValues={{
              name: "",
              auth: "",
              password: "",
              confirmPassword: "",
            }}
          >
            <Box>
              <Typography
                fontWeight="semibold"
                variant="h4"
                sx={{ textAlign: "center", marginBottom: "10px" }}
              >
                Register Now !
              </Typography>
              <Box>
                <MUIInput
                  label="Name"
                  sx={textFieldStyles}
                  name="name"
                  fullWidth
                />
                <MUIInput
                  label="Email/Phone Number"
                  sx={textFieldStyles}
                  name="auth"
                  fullWidth
                />
                <MUIInput
                  label="Password"
                  name="password"
                  sx={textFieldStyles}
                  fullWidth
                  type="password"
                />
                <MUIInput
                  label="Confirm Password"
                  name="confirmPassword"
                  sx={textFieldStyles}
                  fullWidth
                  type="password"
                />
              </Box>
              {successMessage && <SuccessMessage message={successMessage} />}
              {errorMessage && <ErrorMessage message={errorMessage} />}
              <Button
                disabled={loading}
                type="submit"
                sx={{
                  borderRadius: "50px",
                  padding: "10px",
                  marginTop: "15px",
                  borderColor: "#fff",
                  background: "#002140",
                  color: "#fff",
                  "&:hover": {
                    borderColor: "#002140",
                    backgroundColor: "#fff",
                    color: "#002140",
                  },
                }}
                fullWidth
                variant="outlined"
                color="primary"
              >
                {loading ? (
                  <span className="text-white">Loading...</span>
                ) : (
                  "Register"
                )}
              </Button>
              <Typography
                sx={{
                  color: "#002140",
                  fontSize: "12px",
                  justifyContent: "right",
                  display: "flex",
                  marginTop: "5px",
                }}
                component="small"
              >
                Already have an account ? <Link href="/login"><b className="ml-1 font-bold text-[#1591A3] text-[13px]">Login</b></Link>
              </Typography>
            </Box>
          </MUIForm>
        </Box>
      </Stack>
    </div>
  );
};

export default Register;
