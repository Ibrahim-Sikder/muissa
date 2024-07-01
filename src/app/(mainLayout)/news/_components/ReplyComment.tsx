"use client";

import MUIForm from "@/components/Forms/Form";
import MUITextArea from "@/components/Forms/TextArea";
import { ErrorMessage } from "@/components/error-message";
import { getCookie } from "@/helpers/Cookies";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { useRouter } from "next/navigation";

const validationSchema = z.object({
  reply: z.string(),
});

type TReply = {
  blogId: string;
  id: string;
};

const ReplyComment = ({ id, blogId }: TReply) => {
  const token = getCookie("mui-token");

  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (data:FieldValues) => {
    setErrorMessage([]);
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/replyComments/create-replyComment?id=${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response?.status === 200) {
        toast.success(response?.data?.message);
        setLoading(false);
        window.location.reload();
      }
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
      setLoading(false);
    }
  };
 

  return (
    <div className="mt-10">
      {/* <h4 className="mb-8 text-[#1591A3]">Reply User Feedback </h4> */}
      <MUIForm
        onSubmit={handleSubmit}
        resolver={zodResolver(validationSchema)}
        defaultValues={{
          reply: "",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} lg={12} sx={{ marginRight: "0px" }}>
            <MUITextArea
              name="reply"
              placeholder="Comment"
              minRows={3}
              sx={{
                border: "1px solid #ddd",
                padding: "10px",
              }}
            />
          </Grid>
          <div className="my-1">
            {errorMessage && <ErrorMessage message={errorMessage} />}
          </div>
          <Grid item lg={12} sx={{ marginRight: "0px" }}>
            <Button disabled={loading} type="submit">
              {loading ? "Submitting" : "Submit"}
            </Button>
          </Grid>
        </Grid>
      </MUIForm>
    </div>
  );
};

export default ReplyComment;
