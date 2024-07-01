'use client'

import Container from "@/components/ui/HomePage/Container/Container";
import Box from '@mui/material/Box';
import { useGetAllServicesQuery } from '@/redux/api/serviceApi';
import ReactHtmlParser from 'react-html-parser';
import Image from 'next/image';
import ForwardIcon from '@mui/icons-material/Forward';
import { useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../services.css';
import { useRouter, useSearchParams } from "next/navigation";
import Loader from "@/components/Loader";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const renderElement = (element: any, index: number) => {
    if (typeof element === 'string') {
        return element;
    }

    switch (element.type) {
        case 'h1':
            return (
                <h1 key={index} className="text-3xl font-bold mb-4">
                    {element.props.children}
                </h1>
            );
        case 'h2':
            return (
                <h2 key={index} className="text-2xl font-bold mb-3">
                    {element.props.children}
                </h2>
            );
        case 'h3':
            return (
                <h3 key={index} className="text-xl font-bold mb-2">
                    {element.props.children}
                </h3>
            );
        case 'p':
            return (
                <p key={index} className="mb-2">
                    {element.props.children}
                </p>
            );
        case 'ul':
            return (
                <ul key={index} className="pl-3">
                    {React.Children.map(element.props.children, (child, childIndex) =>
                        renderElement(child, childIndex)
                    )}
                </ul>
            );
        case 'ol':
            return (
                <ol key={index} className="pl-3">
                    {React.Children.map(element.props.children, (child, childIndex) =>
                        renderElement(child, childIndex)
                    )}
                </ol>
            );
        case 'li':
            return (
                <li key={index} className="mb-1">
                    <div className="flex items-center">
                        <ForwardIcon className="mr-2" />
                        {element.props.children}
                    </div>
                </li>
            );
        case 'div':
            if (element.props.className === 'ql-align-center') {
                return (
                    <div key={index} className="text-center mb-2">
                        {element.props.children}
                    </div>
                );
            } else if (element.props.className === 'ql-align-right') {
                return (
                    <div key={index} className="text-right mb-2">
                        {element.props.children}
                    </div>
                );
            } else if (element.props.className === 'ql-align-left') {
                return (
                    <div key={index} className="text-left mb-2">
                        {element.props.children}
                    </div>
                );
            }
            return (
                <div key={index} className="mb-2">
                    {element.props.children}
                </div>
            );
        default:
            return element;
    }
};

const renderContent = (content: string) => {
    const parsedContent = ReactHtmlParser(content);
    return parsedContent.map((element, index) => renderElement(element, index));
};

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const tabStyles = {
    border: "none",
    textAlign: "left",
    // width: {
    //     xs: '100px',
    //     height:'30px',
    // },
    pl: {
        sm: 1,
        lg: 2
    },
    "& .MuiTab-wrapper": {
        justifyContent: "flex-start",
    },
    "&.Mui-selected": {
        borderLeft: "2px solid #002140",
        borderRight: "none",
        borderTop: "none",
        borderBottom: "none",
        color: "#fff",
        background: "#1591A3",
        textAlign: 'left',
    },
};

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: { sm: 1, md: 3 } }}>{children}</Box>}
        </div>
    );
}

const ServicesData2 = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab');
    const [value, setValue] = useState(0);
    const { data: serviceData, isLoading, error } = useGetAllServicesQuery({});
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        if (tab && serviceData) {
            const tabIndex = serviceData.services.findIndex(
                (service: any) => service.category === tab
            );
            if (tabIndex !== -1) {
                setValue(tabIndex);
            }
        }
    }, [tab, serviceData]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        router.push(`?tab=${serviceData.services[newValue].category}`);
    };

    if (!serviceData || error) {
        return <h1 className="mt-10 flex items-center justify-center text-3xl capitalize ">Oops! Services data not found! </h1>;
    }

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Container>
            <div className="grid grid-cols-1  lg:grid-cols-12 mt-10 gap-5  ">
                <div className='lg:col-span-3'>
                    <div className="md:sticky md:top-20 lg:border lg:p-5 lg:rounded-md  ">
                        <Box sx={{
                            maxWidth: {
                                md: '100%',
                                sm: '500px',
                                xs: '100%',
                            }, margin: '0 auto'
                        }}>
                            <Tabs
                                orientation={isSmallScreen ? "horizontal" : "vertical"}
                                variant="scrollable"
                                value={value}
                                onChange={handleChange}
                                aria-label="Vertical tabs example"
                                scrollButtons="auto"
                                className="space-y-5"
                            >
                                {serviceData?.services.map((service: any, index: number) => (
                                    <Tab
                                        sx={tabStyles}
                                        key={service.id}
                                        label={service.category}
                                        className={`${value === index ? 'text-blue-500' : 'text-gray-700'}`}
                                    />
                                ))}
                            </Tabs>
                        </Box>
                    </div>
                </div>
                <div className="lg:col-span-9 ">
                    <div>
                        {serviceData?.services?.map((service: any, index: number) => (
                            <CustomTabPanel key={service.id} value={value} index={index}>
                                <div className='lg:mt-0 mt-5'>
                                    <div className="w-full    serviceCoverImgWrap relative">
                                        <Image
                                            src={service.service_image}
                                            alt='services'
                                            width={1000}
                                            height={500}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                                <h4 className='mt-10'>{service.title}</h4>
                                <p className='my-3'>{service.short_description}</p>
                                <div>{renderContent(service?.description)}</div>
                            </CustomTabPanel>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ServicesData2;
