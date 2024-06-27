"use client";

import MUIForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import * as z from "zod";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { Box, Button, Grid } from "@mui/material";
import RichtextEditor from "@/components/Forms/RichtextEditor";
import Link from "next/link";
import INTSelect from "@/components/Forms/Select";
import MUIFileUploader from "@/components/Forms/FileUpload";
import { getCookie } from "@/helpers/Cookies";
import { ServiceCategory } from "./ServiceSubcategoryTable";
import { toast } from "sonner";
import axios from "axios";
import { SuccessMessage } from "@/components/success-message";
import { ErrorMessage } from "@/components/error-message";
import { useRouter } from "next/navigation";
import {
  useGetAllCategoryQuery,
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
} from "@/redux/api/serviceApi";
import Loader from "@/components/Loader";

const validationSchema = z.object({
  title: z.string({ required_error: "Title is required." }),
  category: z.string({ required_error: "Category is required." }),
  sub_category: z.string({ required_error: "Sub category is required." }),
  short_description: z.string({
    required_error: "Short description is required.",
  }),
  description: z.string({ required_error: "Description is required." }),
  service_image: z.string({ required_error: "Image is required." }),
});

const UpdateService = ({ id }: { id: string }) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    data: service,
    isLoading: serviceLoading,
    refetch: refetchService,
  } = useGetSingleServiceQuery({ id });

  const [updateService] = useUpdateServiceMutation();

  const defaultValues = {
    title: service?.title,
    category: service?.category,
    sub_category: service?.sub_category,
    short_description: service?.short_description,
    description: service?.description,
    service_image: service?.service_image,
    priority: service?.priority,
  };

  useEffect(() => {
    if (service) {
      setSelectedCategory(service?.category);
      setImageUrl(service?.service_image);
    }
  }, [service]);

  const token = getCookie("mui-token");
  const { data: category, isLoading, refetch } = useGetAllCategoryQuery({});

  const handleSubmit = async (data: FieldValues) => {
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage([]);

    data.service_image = imageUrl;
    data.priority = Number(data.priority);
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/services/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response?.status === 200) {
        toast.success(response?.data?.message);
        setSuccessMessage(response?.data?.message);
        refetch();
        refetchService();
        router.push("/dashboard/services");
        setLoading(false);
      }
    } catch (error: any) {
      console.log(error);

      if (error?.data) {
        setErrorMessage([error.data.message]);
      } else if (error.message) {
        setErrorMessage([error.message]);
      } else {
        setErrorMessage(["An unexpected error occurred."]);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  if (serviceLoading || isLoading) {
    return <Loader />;
  }

  const selectedCategoryData = category?.find(
    (cat: ServiceCategory) => cat?.category === selectedCategory
  );

  const subCategories = selectedCategoryData?.sub_category || [];

  return (
    <Stack spacing={3}>
      <MUIForm onSubmit={handleSubmit} defaultValues={defaultValues}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.04)",
          }}
        >
          <CardHeader
            subheader="Service Details"
            title="Update Service"
            action={
              <Link href="/dashboard/services">
                <Button variant="outlined">Back to Services</Button>
              </Link>
            }
          />
          <Divider />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <MUIInput
                  name="title"
                  label="Service Title"
                  type="text"
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <INTSelect
                  name="category"
                  label="Category"
                  items={
                    Array.isArray(category)
                      ? category.map(
                          (cat: { category: string }) => cat?.category
                        )
                      : []
                  }
                  onChange={handleCategoryChange}
                />
              </Grid>

              {/* subcategory */}
              <Grid item xs={12} md={3}>
                <INTSelect
                  name="sub_category"
                  label="Sub Category"
                  items={subCategories?.map(
                    (subCat: { sub_category: string }) => subCat?.sub_category
                  )}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <MUIInput
                  name="priority"
                  label="Priority"
                  type="number"
                  fullWidth={true}
                />
              </Grid>

              <Grid item xs={12}>
                <MUIInput
                  name="short_description"
                  label="Short Description"
                  type="text"
                  multiline={true}
                  fullWidth={true}
                />
              </Grid>

              <Grid item xs={12}>
                <RichtextEditor name="description" label="Description" />
              </Grid>

              <Grid item xs={12} md={6}>
                <MUIFileUploader
                  name="service_image"
                  setImageUrl={setImageUrl}
                  imageUrl={imageUrl}
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <div className="mt-2">
            {successMessage && <SuccessMessage message={successMessage} />}
            {errorMessage && <ErrorMessage message={errorMessage} />}
          </div>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              p: 2,
            }}
          >
            <Button
              disabled={loading || isLoading || !imageUrl}
              type="submit"
              variant="contained"
            >
              {loading ? "Updating..." : "Update"}
            </Button>
          </CardActions>
        </Card>
      </MUIForm>
    </Stack>
  );
};

export default UpdateService;
