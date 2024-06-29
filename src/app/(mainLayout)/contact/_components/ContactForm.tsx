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
import "../Contact.css";
import MUITextArea from "@/components/Forms/TextArea";
import { useCreateClientMutation } from "@/redux/api/clientApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import ContactInfo from "./ContactInfo";

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
const ContactForm = () => {
    const [createClient, data,] = useCreateClientMutation();
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

                <ContactInfo />
            </div>
        </Container>
    );
};

export default ContactForm;