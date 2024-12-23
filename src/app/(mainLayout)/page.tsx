import { Box } from "@mui/material";
import React from "react";
import NewsSection from "@/components/ui/HomePage/NewsSection/NewsSection";
import BrandSection from "@/components/ui/HomePage/BrandSection/BrandSection";
import Experience from "@/components/ui/HomePage/Experience/Experience";
import Client from "@/components/ui/HomePage/Client/Client";
import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import Investment from "@/components/ui/HomePage/Investment/Investment";
import Company from "@/components/ui/HomePage/Company/Company";
import Service from "./services/_component/Services/Service";
import InvestmentCircle from "@/components/ui/HomePage/Investment/InvestmentCircle";

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <Service />
      <BrandSection />
      <Client />
      <Experience />
      <NewsSection />
      <InvestmentCircle />
      <Investment />
      <Company />
    </Box>
  );
};

export default Home;
