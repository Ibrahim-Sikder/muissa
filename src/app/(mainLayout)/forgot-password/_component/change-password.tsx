"use client";
import MUIForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";
import { ErrorMessage } from "@/components/error-message";
import { SuccessMessage } from "@/components/success-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { LockPerson, VerifiedUser } from "@mui/icons-material";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const validationSchema = z.object({
  newPassword: z
    .string()
    .min(6, "New password must be at least 6 characters long"),
  confirmPassword: z
    .string()
    .min(6, "Confirm password must be at least 6 characters long"),
});

const defaultValues = {
  newPassword: "",
  confirmPassword: "",
};

const ChangeForgotPassword = () => {
  const [successMessage, setSuccessMessage] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const userAuth = searchParams.get("auth");
  const router = useRouter();

  const onSubmit = async (values: FieldValues) => {
    setIsLoading(true);

    setSuccessMessage("");
    setErrorMessage([]);
    values.auth = userAuth;
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/forgot-update-password`,
        values
      );

      if (response?.status === 200) {
        toast.success(response?.data?.message);
        setSuccessMessage(response?.data?.message);
        router.push("/login");
        setIsLoading(false);
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
      setIsLoading(false);
    }
  };

  return (
    <Stack>
      <Box
      // sx={{
      //   px: 5,
      //   py: 2,
      //   maxWidth: "500px",
      //   width: "100%",
      //   boxShadow: 1,
      //   borderRadius: 1,
      //   padding: {
      //     xs:2,
      //     md:5
      //   },
      //   margin: "0 auto",
      // }}
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
            Change Password{" "}
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} lg={12}>
              <MUIInput
                name="newPassword"
                label="New Password"
                fullWidth
                size="medium"
                type="password"
              />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <MUIInput
                name="confirmPassword"
                label="Confirm Password"
                fullWidth
                size="medium"
                type="password"
              />
            </Grid>
          </Grid>
          {successMessage && <SuccessMessage message={successMessage} />}
          {errorMessage && <ErrorMessage message={errorMessage} />}
          <Button type="submit" sx={{ width: "100%", marginTop: "10px" }}>
            {isLoading ? "Processing..." : "Update Password"}
          </Button>
        </MUIForm>
      </Box>
    </Stack>
  );
};

export default ChangeForgotPassword;
