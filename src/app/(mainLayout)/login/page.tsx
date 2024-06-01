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
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const validationSchema = z.object({
  user: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

const Login = () => {
  const router = useRouter();
  const isLargeDevice = useMediaQuery("(min-width:960px)");
  const isSmallDevice = useMediaQuery("(max-width:600px)");

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

  const handleSubmit = async (data: FieldValues) => {};

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f8f8f8]">
      <Stack
        direction="row"
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "80%",
            lg: "70%",
            xl: "50%",
          },
          mx: "auto",
          py: {
            xs: "20px",
            sm: "40px",
            md: "50px",
            lg: "60px",
          },
        }}
      >
        <Box
          sx={{
            width: isLargeDevice ? "600px" : "100%",
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
        <Box className="bg-[#fff]  px-5 py-16  md:p-20 mx-3 md:m-aut0 lg:m-0 lg:mx-0 rounded-md md:rounded-none  w-full md:w-[600px]  flex items-center text-[#002140] ">
          <MUIForm
            onSubmit={handleSubmit}
            resolver={zodResolver(validationSchema)}
            defaultValues={{
              user: "",
              password: "",
            }}
          >
            <Box>
              <Typography
                fontWeight="semibold"
                variant="h4"
                sx={{ textAlign: "center", marginBottom: "10px" }}
              >
                Login to Muissa !
              </Typography>
              <Box>
                <MUIInput
                  label="Phone Number"
                  sx={textFieldStyles}
                  name="user"
                  fullWidth={true}
                />
                <MUIInput
                  label="Password"
                  name="password"
                  sx={textFieldStyles}
                  fullWidth={true}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "right",
                }}
              >
                {/* <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#059669",
                  }}
                >
                  <Checkbox
                    sx={{
                      "& .MuiIconButton-root": {
                        color: "#fff",
                        borderColor: "#002140",
                      },
                      "& .MuiSvgIcon-root": {
                        color: "#002140",
                      },
                      "& .MuiCheckbox-indeterminate": {
                        color: "#002140",
                      },
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#002140",
                      fontSize: isSmallDevice ? "12px" : "inherit",
                    }}
                    component="small"
                  >
                    Remember me
                  </Typography>
                </Box> */}
                <Typography
                  sx={{
                    color: "#002140",
                    fontSize: isSmallDevice ? "12px" : "inherit",
                    justifyContent: "right",
                  }}
                  component="small"
                >
                  Forgot password
                </Typography>
              </Box>

              <Button
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
                Login
              </Button>
              <Typography
                sx={{
                  color: "#002140",
                  fontSize: "12px",
                  justifyContent: "center",
                  display: "flex",
                  marginTop: "10px",
                }}
                component="small"
              >
                Don't have an account?&nbsp;
                <Link href="/register">
                  <span className="text-[#002140] hover:text-[#059669] transition-all">
                    Sign Up
                  </span>
                </Link>
              </Typography>
            </Box>
          </MUIForm>
        </Box>
      </Stack>
    </div>
  );
};

export default Login;
