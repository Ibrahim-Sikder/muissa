
"use client";

import React, { useState } from "react";
import {
    Box,
    Button,
    Stack,
    Typography,
    useMediaQuery,
    Paper,
    Container,
} from "@mui/material";

import { Dayjs } from 'dayjs';

import { Interests, Person, Phone, WhatsApp, Work } from "@mui/icons-material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useRouter } from "next/navigation";
import MuissaForm from "@/components/LandingPage/LandingPageForm/Forms/form";
import MUIDateCalendar from "@/components/LandingPage/LandingPageForm/Forms/datecalendar";
import MUIInput from "@/components/LandingPage/LandingPageForm/Forms/input";
import MUISelect from "@/components/LandingPage/LandingPageForm/Forms/select";
import { investmentItems } from "@/utils/investment";
import MUITimePicker from "@/components/LandingPage/LandingPageForm/Forms/timepicker";

const mettingSchema = z.object({
    fullName: z.string({ required_error: 'Full name is required' }),
    whatsappNumber: z.union([
        z.string({ required_error: 'Whatsapp number is required' }),
        z.number({ required_error: 'Whatsapp number is required' }),
    ]),
    profession: z.string({ required_error: 'Profession is required' }),

    mettingTopic: z.string({ required_error: 'Meeting topic is required' }),
    mettingTime: z.string({ required_error: 'Metting time is reqiured' }),
    mettingDate: z.string({ required_error: 'Metting date is required' }),
});

const MeetingBooking = () => {
    const isLargeDevice = useMediaQuery("(min-width:960px)");
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
    const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);
    const router = useRouter()

    const handleBookMetting = async (data: FieldValues) => {
        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_API_URL}/metting/consultancy-book`,
                data
            );
      
            if (res.status === 200 || res.status === 201) {
                const meetingId = res.data?.data._id;
                toast.success('Meeting booked successfully!', {
                    id: 'success-toast',
                    duration: 1000,
                });
                router.push(`/thank-you-consultant?id=${meetingId}`);
            }
        } catch (err) {
            toast.error("Something went wrong!!!");
            console.error(err);
        }
    };





    return (
        <MuissaForm onSubmit={handleBookMetting} resolver={zodResolver(mettingSchema)}>

            <Box
                sx={{
                    minHeight: '100vh',
                    background: 'linear-gradient(135deg, #1591A3 0%, #152644 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    py: 4,
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        right: '5%',
                        bottom: '10%',
                        width: '200px',
                        height: '200px',
                        background: 'url(/placeholder.svg?height=200&width=200)',
                        opacity: 0.2,
                    }}
                />

                <Container maxWidth="lg">
                    <Stack spacing={1} alignItems="center">

                        <Box sx={{ textAlign: 'center' }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    mb: { xs: 1, sm: 2, md: 3 },
                                    fontSize: { xs: '1.5rem', sm: '3rem', md: '4rem' },
                                    '& span': {
                                        color: '#34B8B1',
                                    },
                                }}
                            >
                                BOOK YOUR <span>MEETING</span>
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'white',
                                    maxWidth: '600px',
                                    mx: 'auto',
                                }}
                            >
                                A meeting is when two or more people come together to discuss
                                one or more topics, often in a formal or business setting.
                            </Typography>
                        </Box>

                        <Paper
                            elevation={24}
                            sx={{
                                borderRadius: 4,
                                overflow: 'hidden',
                                backgroundColor: 'white',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: { xs: 'column', md: 'row' },
                                maxWidth: 900,
                                width: '100%',
                            }}
                        >
                            <Box
                                sx={{
                                    flex: 1,
                                    borderRight: { xs: 'none', md: '1px solid #eee' },
                                    p: 2,
                                }}
                            >


                                <MUIDateCalendar name="mettingDate" />
                            </Box>
                            <Box
                                sx={{
                                    flex: 1,
                                    p: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1,
                                }}
                            >
                                <MUIInput
                                    fullWidth
                                    name='fullName'
                                    placeholder="নাম"
                                    size='medium'
                                    InputProps={{
                                        startAdornment: (
                                            <Person sx={{ color: 'text.secondary', mr: 1 }} />
                                        ),
                                    }}
                                />


                                <MUIInput
                                    name='whatsappNumber'
                                    fullWidth
                                    placeholder="হোয়াটসঅ্যাপ নাম্বার"
                                    variant="outlined"
                                    size='medium'
                                    sx={{ mb: 2 }}
                                    InputProps={{
                                        startAdornment: (
                                            <WhatsApp sx={{ color: 'text.secondary', mr: 1 }} />
                                        ),
                                    }}
                                />
                                <MUIInput
                                    name='profession'
                                    fullWidth
                                    label='পেশা'
                                    placeholder="পেশা"
                                    variant="outlined"
                                    size='medium'
                                    sx={{ mb: 2 }}
                                    InputProps={{
                                        startAdornment: (
                                            <Work sx={{ color: 'text.secondary', mr: 1 }} />
                                        ),
                                    }}
                                />

                                <MUISelect
                                    size="medium"
                                    items={investmentItems}
                                    fullWidth
                                    label="কোন ধরনের বিনিয়োগে আগ্রহী"
                                    placeholder="Select investment type"
                                    name="mettingTopic"
                                    adornment={<Interests sx={{ color: 'text.secondary' }} />}
                                />
                                <MUITimePicker
                                    value={selectedTime}
                                    onChange={(newValue) => setSelectedTime(newValue)}
                                    label="Select Time"
                                    name="mettingTime"
                                />
                                <Button
                                    variant="contained"
                                    type="submit"
                                    sx={{
                                        mt: 'auto',
                                        backgroundColor: '#1591A3',
                                        borderRadius: '50px',
                                        py: 1.5,
                                        '&:hover': {
                                            backgroundColor: '#152644',
                                        },
                                    }}
                                >
                                    DONE!
                                </Button>
                            </Box>
                        </Paper>



                    </Stack>
                </Container>
            </Box>

        </MuissaForm>
    );
};

export default MeetingBooking;

