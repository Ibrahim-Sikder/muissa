"use client";

import MUIForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Container from "@/components/ui/HomePage/Container/Container";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import "./Contact.css";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneVolume,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Iframe from "react-iframe";
import MUITextArea from "@/components/Forms/TextArea";
import { useCreateClientMutation } from "@/redux/api/clientApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const validationSchema = z.object({
  name: z.string().min(1, "নাম আবশ্যক"),
  email: z.string().email("একটি বৈধ ইমেল ঠিকানা প্রদান করুন!"),
  phone: z.string().min(10, "অন্তত ১১টি অঙ্ক থাকা আবশ্যক"),
  message: z.string().min(1, "বার্তা আবশ্যক"),
});
const defaultValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [createClient,data,] = useCreateClientMutation();
  const router = useRouter()
console.log(data)
  const handleSubmit = async (data: FieldValues) => {

    try {
      const res = await createClient(data).unwrap;
      console.log(res);
      router.push('/')
      toast.success('Thank you for contact us!')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="serviceDetailsWrap">
        <div className="aboutContent">
          <h1>যোগাযোগ করুন</h1>
        </div>
      </div>
      <Container className="sectionMargin">
        <SectionTitle title="আমাদের সাথে যোগাযোগ করুন" subtitle=" " />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-14 ">
          <div>
            <div className="mb-5 ">
              <h3 className="text-2xl font-semibold ">
                আমাদের সাথে যোগাযোগ ফর্ম
              </h3>
              <p className="mt-2">
                আপনার প্রশ্ন বা প্রয়োজনীয়তা জানাতে নিচের ফর্মটি পূরণ করুন এবং
                আমরা যত তাড়াতাড়ি সম্ভব আপনার সাথে যোগাযোগ করব:
              </p>
            </div>
            <MUIForm
              onSubmit={handleSubmit}
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
            >
              <Box>
                <Grid container direction="column">
                  <Grid item lg={6} md={12} sm={12}>
                    <MUIInput size="medium" label="নাম" name="name" fullWidth />
                  </Grid>
                  <Grid item lg={6}>
                    <MUIInput
                      size="medium"
                      label="ইমেইল ঠিকানা"
                      name="email"
                      fullWidth
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <MUIInput
                      size="medium"
                      label="ফোন নম্বর"
                      name="phone"
                      fullWidth
                    />
                  </Grid>
                  <Grid item lg={6}>
                    {/* <MUIInput
                      size="medium"
                      label="বার্তা"
                      name="message"
                      fullWidth
                    /> */}
                    <MUITextArea
                      placeholder="বার্তা"
                      name="message"
                      minRows={3}
                      sx={{
                        border: "1px solid #ddd",
                        padding: "10px",
                        resize: "none",
                        borderRadius: "3px",
                        marginTop: "15px",
                      }}
                    />
                  </Grid>
                  <Grid item lg={6}>
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
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </MUIForm>
          </div>

          <div>
            <h5 className="mb-10">
              আপনার ব্যবসার উন্নতির জন্য আমাদের সঙ্গে যোগাযোগ করুন এবং আমাদের
              পরামর্শদাতা দলের অভিজ্ঞতা এবং দক্ষতা কাজে লাগান।
            </h5>
            <div className=" space-y-16">
              <div className="flex gap-5">
                <div className="contactIconWrap">
                  <HiOutlineLocationMarker className="headerIcon mr-2" />
                </div>
                <div>
                  <h3 className="block text-3xl font">
                    Our head office address:
                  </h3>
                  <span>House-08, Road-07, Block-C, Banasree, Dhaka-1219</span>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="contactIconWrap">
                  <FaEnvelope className="headerIcon mr-2" />
                </div>
                <div>
                  <h3 className="block text-3xl font">
                    Mail us for information
                  </h3>
                  <span>muissaltd@gmail.com</span>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="contactIconWrap">
                  <FaPhoneVolume className="headerIcon -rotate-45 mr-2" />
                </div>
                <div>
                  <h3 className="block text-3xl font">Call for help:</h3>
                  <span>01403-852850</span>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h5 className="mb-10">
                আমাদের সামাজিক যোগাযোগ মাধ্যমগুলোতে অনুসরণ করুন এবং আমাদের
                সর্বশেষ খবর এবং আপডেটগুলি পান:
              </h5>
              <div className="flex space-x-5">
                <div className="socialIconWrap">
                  <a
                    href="https://www.facebook.com/profile.php?id=61558510933789"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF size={35} className="text-[#1591A3]" />
                  </a>
                </div>

                <a
                  href="https://www.instagram.com/muissaltd?igsh=Nnp4M2d1M2pvMGtr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={35} className="text-[#1591A3]" />
                </a>
                <a
                  href="https://www.linkedin.com/company/muissa-business-consulting-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={35} className="text-[#1591A3]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="sectionMargin">
        <section className="flex flex-row items-center justify-center w-full mx-auto">
          <Iframe
            className="lg:h-[400px] h-[300px]"
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.6004046481885!2d90.4282006!3d23.761625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3453c872c87237%3A0x8e37e15d15090297!2sMuissa%20Business%20Consulting%20Ltd.!5e0!3m2!1sen!2sbd!4v1718278412461!5m2!1sen!2sbd"
            width="100%"
            styles={{ border: 0 }}
            loading="lazy"
            position="relative"
          ></Iframe>
        </section>
      </div>
    </>
  );
};

export default Contact;
