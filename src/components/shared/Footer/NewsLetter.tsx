/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { Box, Button, Grid, Typography, TextField } from "@mui/material";
import { MdOutlineCalendarToday, MdOutlinePanTool } from "react-icons/md";
import Container from "@/components/ui/HomePage/Container/Container";

export default function Example() {
  return (
    <Box
      sx={{
        bgcolor: "#f9f9f9",
        py: 8,
        position: "relative",
        overflow: "hidden",
        marginTop: 8,
      }}
    >
      <Container>
        <Grid
          container
          spacing={20}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              gutterBottom
            >
              Subscribe to our newsletter
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Stay updated with the latest news and exclusive offers. Sign up
              for our newsletter now.
            </Typography>
            <Box
              component="form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed");
              }}
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <TextField
                id="email-address"
                name="email"
                type="email"
                required
                variant="outlined"
                placeholder="Enter your email"
                fullWidth
                size="small"
                sx={{ bgcolor: "white", borderRadius: 1 }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ flexShrink: 0, mt: { xs: 2, sm: 0 } }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { sm: "none", xs: "none", lg: "block" } }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box>
                    <Box
                      sx={{
                        p: 2,
                        bgcolor: "primary.main",
                        borderRadius: "20%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 56,
                        width: 56,
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <MdOutlineCalendarToday color="white" size={24} />
                    </Box>
                    <Typography variant="h6" fontWeight="bold">
                      Weekly articles
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      To know more about us, read our weekly articles.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box>
                    <Box
                      sx={{
                        p: 2,
                        bgcolor: "primary.main",
                        borderRadius: "20%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 56,
                        width: 56,
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <MdOutlinePanTool color="white" size={24} />
                    </Box>
                    <Typography variant="h6" fontWeight="bold">
                      No spam
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Here don't found anyting spam we are registered by govt of Bangladesh.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
