"use client";

import uploadFile from "@/helpers/uploadFile";
import BackupIcon from "@mui/icons-material/Backup";
import { Box, Button, SxProps, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

type INTFileUploaderProps = {
  name: string;
  sx: SxProps;
  uploadedImage: string;
  setUploadedImage: (image: string) => void;
  upload_file?: string;
};

const DocUploader = ({
  name,
  sx,
  setUploadedImage,
  uploadedImage,
  upload_file,
}: INTFileUploaderProps) => {
  const { control, setValue, watch } = useFormContext();

  const [loading, setLoading] = useState<boolean>(false);

  const selectedFile = watch(name);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoading(true);
    const file = event.target.files?.[0];
    if (file) {
      setValue(name, file);
      // setUploadedImage(URL.createObjectURL(file));
      const uploadPhoto = await uploadFile(file);
      setUploadedImage(uploadPhoto?.secure_url);
      setLoading(false);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setTimeout(() => {}, 1000);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Box
          sx={{
            padding: "20px",
            borderRadius: "8px",
            border: "1px dashed #ddd",
            width: {
              lg: "300px",
              xs: "200px",
            },
            textAlign: "center",
            margin: "0 auto",
            marginTop: {
              lg: "25px",
              sm: "0px",
            },
          }}
        >
          <Box sx={sx}>
            <input
              type="file"
              id="files"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="files"
              className="cursor-pointer py-2 rounded-md shadow-[rgba(0, 0, 0, 0.1) 0px 1px 2px 0px]"
              style={{ display: uploadedImage ? "none" : "block" }}
            >
              {!upload_file && !loading && (
                <>
                  <BackupIcon
                    sx={{
                      mr: 2,
                      color: "#111",
                      fontSize: 60,
                      background: "#E8EDFF",
                      padding: "10px",
                      borderRadius: "100%",
                    }}
                  />

                  <Typography component="h2">
                    Drag & Drop or Choose File to Upload Your Documents
                  </Typography>
                </>
              )}
            </label>
            {loading ? (
              <Typography
                component="h2"
                width={300}
                height={200}
                className="flex items-center justify-center"
              >
                Uploading...
              </Typography>
            ) : (
              <>
                {(uploadedImage || upload_file) && (
                  <Box mt={2}>
                    <Image
                      src={uploadedImage || upload_file || ""}
                      alt="Uploaded"
                      layout="responsive"
                      width={300}
                      height={200}
                      style={{ borderRadius: "8px" }}
                    />
                  </Box>
                )}
              </>
            )}
            {(uploadedImage || upload_file) && (
              <Box mt={2}>
                <label
                  htmlFor="files"
                  style={{
                    padding: "10px 15px",
                    border: "none",
                    borderRadius: "5px",
                    background: "#059065",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  Upload
                </label>
              </Box>
            )}
          </Box>
        </Box>
      )}
    />
  );
};

export default DocUploader;
