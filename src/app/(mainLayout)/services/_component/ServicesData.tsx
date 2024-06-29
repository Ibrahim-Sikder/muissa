'use client';

import Container from "@/components/ui/HomePage/Container/Container";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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
                <ul key={index} className="pl-3 ">
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


function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


const ServicesData = () => {
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




    const tabStyles = {
        border: "none",
        textAlign: "left",
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

    if (!serviceData || error) {
        return <h1 className="mt-10 flex items-center justify-center text-3xl capitalize ">Oops! Services data not found! </h1>

    }

    if (isLoading) {
        return <Loader />
    }


    return (
        <>


            <Container className="sectionMargin">
                <div className='lg:flex '>
                    <Tabs
                        orientation={isSmallScreen ? "horizontal" : "vertical"}
                        variant="scrollable"
                        value={value}
                        scrollButtons="auto"
                        onChange={handleChange}
                        aria-label="scrollable auto tabs example"
                        sx={{ minWidth: '200px', border: 'none' }}
                        TabIndicatorProps={{ style: { display: 'none' } }}
                    >
                        {serviceData?.services.map((service: any, index: number) => (
                            <Tab
                                sx={tabStyles}
                                key={service.id}
                                label={service.category}
                                {...a11yProps(index)}
                            />
                        ))}
                    </Tabs>

                    {serviceData?.services?.map((service: any, index: number) => (
                        <CustomTabPanel key={service.id} value={value} index={index}>
                            <div className='lg:mt-0 mt-5'>
                                <div className="w-full h-96 serviceCoverImgWrap relative">
                                    <Image
                                        src={service.service_image}
                                        alt='services'
                                        width={500}
                                        height={500}

                                    />

                                </div>
                            </div>
                            <h4 className='mt-10'>{service.title}</h4>
                            <p className='my-3'>{service.short_description}</p>
                            <div>{renderContent(service?.description)}</div>
                        </CustomTabPanel>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default ServicesData;

