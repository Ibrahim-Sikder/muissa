/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useEffect, useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Paper,
    Button,
    Stack,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { CheckCircle, Event, FastRewind } from '@mui/icons-material';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import moment from 'moment';
import 'moment/locale/bn';

const ThankYouPage = () => {

  
    const theme = useTheme();
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const mettingId = searchParams.get('meetingId');
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [data, setData] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = '';
                if (id) {
                    url = `http://localhost:5000/api/v1/metting/consultancy-book/${id}`;
                } else if (mettingId) {
                    url = `http://localhost:5000/api/v1/metting/${mettingId}`;
                }

                if (url) {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    const result = await response.json();
                    setData(result);
                }
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id, mettingId]);


    const convertToBengaliNumerals = (num: number | string) =>
        num
            .toString()
            .replace(/\d/g, (digit: string) => '০১২৩৪৫৬৭৮৯'[parseInt(digit, 10)] ?? '');


    const formatDate = (dateString: number | string) => {
        const date = moment(dateString);
        const bengaliDate = convertToBengaliNumerals(date.format('DD'));
        const bengaliMonth = date.locale('bn').format('MMMM');
        const bengaliYear = convertToBengaliNumerals(date.format('YYYY'));
        return `${bengaliDate} ${bengaliMonth}, ${bengaliYear}`;
    };

    const formatTime = (timeString: number | string) => {
        const time = moment(timeString, 'HH:mm');
        const period = time.hour() >= 12 ? 'রাত' : 'সকাল';
        const bengaliTime = convertToBengaliNumerals(time.format('hh:mm A').split(' ')[0]);
        return `${period} ${bengaliTime} ঘটিকা`;
    };

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error}</div>;

    return (
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
            <Container maxWidth="md">
                <Paper
                    elevation={24}
                    sx={{
                        borderRadius: 4,
                        overflow: 'hidden',
                        backgroundColor: 'white',
                        textAlign: 'center',
                        p: { xs: 3, sm: 5 },
                    }}
                >
                    <CheckCircle sx={{ fontSize: 80, color: '#34B8B1', mb: 2 }} />
                    <Typography
                        variant="h3"
                        component="h1"
                        gutterBottom
                        sx={{
                            color: '#152644',
                            fontWeight: 'bold',
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                            textAlign: 'center',
                            wordBreak: 'break-word',
                        }}
                    >
                        <h2 className='capitalize'>  Thank You {data?.data?.fullName}!</h2>
                    </Typography>

                    <Typography variant="h5" sx={{ mb: 3, color: '#3A1C71' }}>
                        Your {mettingId ? 'metting' : 'consultation'} is confirmed and we're thrilled to meet you!
                    </Typography>
                    {
                        !mettingId && (
                            <Stack
                                direction={isSmallScreen ? 'column' : 'row'}
                                spacing={3}
                                justifyContent="center"
                                sx={{ mb: 4 }}
                            >
                                <Paper elevation={3} sx={{ p: 2, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
                                    <div className="flex  text-left gap-3 ">
                                        <div className="bg-[#157F93] p-2 md:p-3 rounded-full">
                                            <Event className="w-4 md:h-6 h-4 md:w-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium">তারিখ</div>
                                            <div className="text-sm">{formatDate(data?.data?.date)}</div>
                                        </div>
                                    </div>
                                </Paper>

                                <Paper elevation={3} sx={{ p: 2, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
                                    <div className="flex text-left gap-3">
                                        <div className="bg-[#157F93] p-2 md:p-3 rounded-full">
                                            <Clock className="w-4 md:h-6 h-4 md:w-6 text-white " />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium">সময়</div>
                                            <div className="text-sm">{formatTime(data?.data?.mettingTime)}</div>
                                        </div>
                                    </div>
                                </Paper>
                            </Stack>
                        )
                    }

                    {
                        !mettingId && (
                            <Typography variant="body1" sx={{ mb: 3 }}>
                                We're excited to meet with you! You'll receive a confirmation message on WhatsApp shortly.
                            </Typography>

                        )
                    }
                    <Button
                        component={Link}
                        href="/investment"
                        variant="contained"
                        sx={{
                            backgroundColor: '#1591A3',
                            borderRadius: '50px',
                            py: 1.5,
                            px: 4,
                            '&:hover': {
                                backgroundColor: '#152644',
                            },
                        }}
                    >
                        <FastRewind /> Back to Home
                    </Button>
                </Paper>
            </Container>
        </Box>
    );
};

export default ThankYouPage;
