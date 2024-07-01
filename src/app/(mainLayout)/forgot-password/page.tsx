"use client";
import qs from "query-string";
import MUIForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";
import { ErrorMessage } from "@/components/error-message";
import { SuccessMessage } from "@/components/success-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { LockPerson, VerifiedUser } from "@mui/icons-material";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import OTPVerifyPage from "./_component/verify";
import { useRouter } from "next/navigation";
import ChangeForgotPassword from "./_component/change-password";

const validationSchema = z.object({
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
});

const defaultValues = {
  auth: "",
};

const ForgotPassword = () => {
  const [successVerifyMessage, setSuccessVerifyMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const onSubmit = async (data: Record<string, any>) => {
    console.log(data);
    const { auth } = data;

    setSuccessMessage("");
    setErrorMessage([]);
    setLoading(true);
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/forgot-password`,
        data
      );

      if (response?.status === 200) {
        toast.success(response?.data?.message);
        setSuccessMessage(response?.data?.message);

        // router.push(`/`);

        if (typeof auth !== "string") {
          throw new Error("Auth field must be a string");
        }

        const url = qs.stringifyUrl(
          {
            url: "/forgot-password",
            query: { auth },
          },
          { skipEmptyString: true }
        );

        router.push(url);

        setLoading(false);
      }
    } catch (error: any) {
      console.log(error);
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
    <div className="h-[500] flex items-center justify-center">
      <Box
        sx={{
          px: 5,
          py: 2,
          textAlign: "center",
          maxWidth: "500px",
          width: "100%",
          boxShadow: 1,
          borderRadius: 1,
          padding: {
            xs: 2,
            md: 5,
          },
          margin: "0 auto",
        }}
      >
        <MUIForm
          onSubmit={onSubmit}
          resolver={zodResolver(validationSchema)}
          defaultValues={defaultValues}
        >
          <Typography
            component="div"
            variant="h5"
            fontWeight="bold"
            textAlign="center"
          >
            Forgot Your Password?
          </Typography>
          <small className=" text-center ">
            No problem. Just enter your email address below <br /> we’ll send
            you a link to reset it.
          </small>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} lg={12}>
              <MUIInput
                name="auth"
                label="Email / Phone number"
                placeholder="Enter your auth"
                fullWidth
                size="medium"
              />
            </Grid>
          </Grid>
          {successMessage && !successVerifyMessage && <SuccessMessage message={successMessage} />}
          {errorMessage && <ErrorMessage message={errorMessage} />}
          {!successMessage && (
            <>
              <Button type="submit" sx={{ width: "100%", marginTop: "10px" }}>
                {loading ? "Sending..." : "Submit"}
              </Button>
              <small className="mt-3 flex justify-center">
                Remembered your password?{" "}
                <Link href="/login">
                  {" "}
                  <b className="text-[#002140] ml-1">Sign In</b>
                </Link>
              </small>
            </>
          )}
        </MUIForm>
        {/* {successMessage && !successVerifyMessage && (
          <OTPVerifyPage
            successVerifyMessage={successVerifyMessage}
            setSuccessVerifyMessage={setSuccessVerifyMessage}
          />
        )} */}
        {successMessage && <ChangeForgotPassword />}
      </Box>
    </div>
  );
};

export default ForgotPassword;
