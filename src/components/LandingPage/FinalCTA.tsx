'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Box, Button, Container, Typography } from '@mui/material'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
    },
    error: {
      main: '#ff3d3d'
    }
  },
  typography: {
    fontFamily: 'inherit'
  }
})

export default function NotificationPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: '10vh',
          margintop: '60px'
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: 'center',
              '& > *': { color: '#ffffff' }
            }}
          >

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1rem', md: '1.5rem' },
                fontWeight: 400,
                mb: 4,
                opacity: 0.9,
                letterSpacing: '0.5px'
              }}
            >

              আপনার আবেদন কেবল এই বা সাইজনাম প্রয়োজনীয় হলে কি কনসালট্যান্টদের জন্য কল করুন অথবা মোবাইল নম্বর দিন ।
            </Typography>
            {/* <Button
              variant="contained"
              color="error"
              sx={{
                px: 3,
                py: 0.75,
                fontSize: '1rem',
                textTransform: 'none',
                borderRadius: 1,
                backgroundColor: '#ff3d3d',
                '&:hover': {
                  backgroundColor: '#ff2424'
                }
              }}
            >
              Get Your Membership Today
            </Button> */}
            <div className="flex flex-wrap gap-2 items-center justify-center">
              <span className="bg-[#FF0000] text-white px-4 py-1 rounded">
                GET FREE CONSULTANCY
              </span>
              <span className="bg-[#FF0000] text-white px-4 py-1 rounded">
                09613-244444
              </span>
            </div>
            <p className="text-center text-white mt-5 ">
              অথবা আমাদের সাথে যোগাযোগ করতে কল করুন ০১৭....।
            </p>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
