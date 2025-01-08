'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Button, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
    },
    error: {
      main: '#ff3d3d',
    },
  },
  typography: {
    fontFamily: 'inherit',
  },
});

export default function NotificationPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="sectionMargin flex items-center justify-center py-10">
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: 'center',
              '& > *': { color: '#ffffff' },
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '1.5rem' },
                  fontWeight: 'bold',
                  mb: 4,
                  opacity: 0.9,
                  letterSpacing: '0.5px',
                }}
              >
                আপনি কি ইনভেস্টমেন্ট করার জন্য প্রস্তুত ?
              </Typography>
            </motion.div>

            <div className="flex flex-wrap flex-col md:flex-row gap-3 items-center justify-center">

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
              >
                <Button
                  color="error"
                  variant="contained"
                  sx={{
                    backgroundColor: '#fff',
                    color: '#1591A3',
                    padding: {
                      xs: '5px 10px',
                      sm: '10px 24px',
                      md: '12px 32px',
                    },
                    borderBottom: '5px solid #1591A3',
                    fontWeight: '900',
                    fontSize: {
                      xs: '20px',
                      sm: '18px',
                      md: '20px',
                    },
                    borderRadius: '8px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'color 0.5s ease-in-out',
                    zIndex: 1,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#1591A3',
                      transition: 'left 0.5s ease-in-out',
                      zIndex: -1,
                    },
                    '&:hover': {
                      color: '#fff',
                      '&::before': {
                        left: 0,
                      },
                    },
                    '&:active': {
                      transform: 'scale(0.98)',
                      transition: 'transform 0.1s',
                    },
                  }}
                >
                  মিটিং বুক করুন
                </Button>
              </motion.div>
              <span> অথবা কল করুন </span>

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
              >
                <Button
                  color="error"
                  variant="contained"
                  sx={{
                    backgroundColor: '#fff',
                    color: '#1591A3',
                    padding: {
                      xs: '5px 10px',
                      sm: '10px 24px',
                      md: '12px 32px',
                    },
                    borderBottom: '5px solid #1591A3',
                    fontWeight: '900',
                    fontSize: {
                      xs: '20px',
                      sm: '18px',
                      md: '20px',
                    },
                    borderRadius: '8px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'color 0.5s ease-in-out',
                    zIndex: 1,
                    '&::before': {
                      content: "''",
                      position: 'absolute',
                      top: 0,
                      right: '-100%',
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#1591A3',
                      transition: 'right 0.5s ease-in-out',
                      zIndex: -1,
                    },
                    '&:hover': {
                      color: '#fff',
                      '&::before': {
                        right: 0,
                      },
                    },
                    '&:active': {
                      transform: 'scale(0.98)',
                      transition: 'transform 0.1s',
                    },
                  }}
                >
                  01403852850
                </Button>
              </motion.div>
            </div>
            <p className="text-center text-white mt-5">
              অথবা আমাদের সাথে যোগাযোগ করতে কল করুন ০১৭....।
            </p>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}
