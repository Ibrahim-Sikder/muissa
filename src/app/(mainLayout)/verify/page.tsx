"use client";
import { SuccessMessage } from "@/components/success-message";
import lockIcon from "../../../assets/icon/lock-icon.svg";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { ErrorMessage } from "@/components/error-message";
import { toast } from "sonner";
import { setCookie } from "@/helpers/Cookies";

const OTPInput = ({
  length,
  setOTPValues,
  emptyFieldIndex,
  inputsRef,
}: {
  length: number;
  setOTPValues: React.Dispatch<React.SetStateAction<string[]>>;
  emptyFieldIndex: number | null;
  inputsRef: React.MutableRefObject<HTMLInputElement[]>;
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    const { value } = e.target;
    setOTPValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[idx] = value;
      return updatedValues;
    });

    // If the current input is not the last one and it's not empty
    if (idx < length - 1 && value.length === 1) {
      // Focus on the next input field
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === "Backspace" && !e.currentTarget.value && idx > 0) {
      console.log("Moving focus to previous input");
      inputsRef.current[idx - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-between">
      {Array.from({ length }, (_, idx) => (
        <input
          key={idx}
          type="text"
          maxLength={1}
          className={`border rounded w-10 h-10 text-center text-lg mx-1 ${
            emptyFieldIndex === idx ? "border-red-500" : "border-gray-300"
          }`}
          onChange={(e) => handleChange(e, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          //@ts-ignore
          ref={(el) => (inputsRef.current[idx] = el as HTMLInputElement)}
          style={{
            outline: "none",
            boxShadow: "none",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#059669")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />
      ))}
    </div>
  );
};

const OTPVerifyPage = () => {
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const userAuth = searchParams.get("auth");
  const router = useRouter();
  const [otpValues, setOTPValues] = useState<string[]>(new Array(6).fill(""));
  const [emptyFieldIndex, setEmptyFieldIndex] = useState<number | null>(null);
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const otpNumber = otpValues.join("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    setSuccessMessage("")
    setErrorMessage([])
    try {
      const data = {
        auth: userAuth,
        otp: otpNumber,
      };

      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/verify-user`,
        data
      );
 
      if (response?.status === 200) {
        toast.success(response?.data?.message)
        setSuccessMessage(response?.data?.message);
        setCookie("mui-token", response?.data?.data, { expires: 10 })
        router.push("/profile")
        setIsLoading(false);
      }
      console.log("Response:", response);
    } catch (error: any) {
      if (error?.response) {
        const { status, data } = error.response;
        if ([400, 404, 500].includes(status)) {
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
    <div className=" lg:-mt-24 lg:h-screen flex items-center justify-center ">
      <div className="border w-full lg:w-1/4 p-10 rounded-md bg-gray-50">
        <Image
          src={lockIcon}
          alt="logo"
          width={60}
          height={66}
          className="w-[60px] mx-auto "
        />
        <h1 className="text-2xl font-bold text-center py-3">
          Enter the 6 digit OTP
        </h1>

        <form onSubmit={handleSubmit}>
          <OTPInput
            length={6}
            setOTPValues={setOTPValues}
            emptyFieldIndex={emptyFieldIndex}
            inputsRef={inputsRef}
          />

          <Button
            fullWidth
            type="submit"
            disabled={isLoading}
            startIcon={isLoading ? <CircularProgress size={20} /> : null}
            sx={{ mt: 2 }}
          >
            {isLoading ? "Verifying..." : "Verify"}
          </Button>
        </form>
       <div className="mt-2">
       {successMessage && <SuccessMessage message={successMessage} />}
       {errorMessage && <ErrorMessage message={errorMessage} />}
       </div>
      </div>
    </div>
  );
};

export default OTPVerifyPage;
