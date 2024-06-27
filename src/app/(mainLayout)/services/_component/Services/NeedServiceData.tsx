'use client'

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
import dynamic from 'next/dynamic'; // Import dynamic from 'next/dynamic' for client-side rendering
import '../services.css'; // Assuming you have custom styles here
import { useRouter } from "next/navigation";

// Function to render HTML parsed elements
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

// Function to parse and render content from HTML string
const renderContent = (content: string) => {
  const parsedContent = ReactHtmlParser(content);
  return parsedContent.map((element, index) => renderElement(element, index));
};

// Interface for TabPanel props
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// Component for custom tab panel
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

// Function to provide accessibility props for tabs
function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

// Main Service Page Component
const ServicePage = () => {
  const router = typeof window !== 'undefined' ? useRouter() : null; // Initialize router hook conditionally
  const { tab } = router?.query || {}; // Extract query parameter safely
  const [value, setValue] = useState(0); // State for current tab value
  const { data: serviceData } = useGetAllServicesQuery({}); // Fetch service data
  const theme = useTheme(); // Get current theme
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // Check for small screen

  // Effect to set initial tab based on query parameter
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

  // Handle tab change
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue); // Update tab value
    router.push(`?tab=${serviceData.services[newValue].category}`, undefined, { shallow: true }); // Update URL with new tab value
  };

  // Render loading if service data is not available
  if (!serviceData) {
    return <div>Loading...</div>;
  }

  // Render service page content
  return (
    <>
      <div className="serviceDetailsWrap aboutWraps">
        <div className="aboutContent">
          <h1>Our Services</h1>
        </div>
      </div>

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
                    height={475}
                    className="rounded-t-lg aspect-video h-full w-full object-cover absolute"
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

export default ServicePage; // Export the service page component
