import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import image1 from "../../../../assets/invest/invest.jpg";
import image2 from "../../../../assets/invest/invest2.jpg";
import { GrGroup } from "react-icons/gr";
import { HiOutlineLightBulb } from "react-icons/hi";

const InvestmentCircle = () => {
  return (
    <Box
      sx={{
        marginTop: "4rem",
        padding: { xs: "2rem 1rem", md: "4rem 0" },
        backgroundColor: "#e3fbfe",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5}>
           <h2> আমাদের সাথে আপনার যাত্রা শুরু করুন</h2>
            {/* <Typography
              variant="h6"
              component="h3"
              sx={{ mt: 2, fontWeight: "bold" }}
            >
              — BENJAMIN FRANKLIN
            </Typography> */}
            <Typography sx={{ mt: 4 }}>
            আপনার ব্যবসার উন্নতির জন্য আমাদের পরামর্শক ও বিনিয়োগ পরিষেবা গ্রহণ করুন। আমাদের বিশেষজ্ঞ দল আপনাকে সঠিক দিকনির্দেশনা এবং লাভজনক বিনিয়োগ সুযোগ প্রদান করবে। আমাদের সাথে আপনার ব্যবসার সাফল্যের যাত্রা শুরু করুন।
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper
              sx={{
                borderRadius: "50%",
                overflow: "hidden",
                width: { xs: 350, md: 500 },
                height: { xs: 350, md: 500 },
                boxShadow: "none",
              }}
            >
              <Grid container sx={{ height: "100%" }}>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#1591A3",
                    color: "white",
                    p: 2,
                    textAlign: "center",
                    overflow: "auto",
                  }}
                >
                  <HiOutlineLightBulb className="text-5xl text-gray-800" />
                  <Typography
                    variant="h6"
                    sx={{ mt: 2, fontSize: { xs: "0.75rem", md: "1rem" } }}
                  >
                    Our Expertise is earned through our experience
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ position: "relative" }}>
                  <Image
                    src={image1}
                    alt="Team meeting"
                    layout="fill"
                    objectFit="cover"
                  />
                </Grid>
                <Grid item xs={6} sx={{ position: "relative" }}>
                  <Image
                    src={image2}
                    alt="Person with coffee"
                    layout="fill"
                    objectFit="cover"
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: { xs: "start", md: "center" },
                    alignItems: "center",
                    bgcolor: "#1591A3",
                    color: "white",
                    p: 2,
                    textAlign: "center",
                    overflow: "auto",
                  }}
                >
                  <GrGroup className="text-5xl text-gray-800" />
                  <Typography
                    variant="h6"
                    sx={{ mt: 2, fontSize: { xs: "0.75rem", md: "1rem" } }}
                  >
                    Our Team for your management
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InvestmentCircle;
