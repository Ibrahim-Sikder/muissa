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
              variant="h1"
              sx={{
                fontSize: { xs: '1.5rem', md: '2.5rem' },
                fontWeight: 500,
                mb: 2,
                letterSpacing: '0.5px'
              }}
            >
              আপনার ব্যবসাকে এগিয়ে নিয়ে যান!
            </Typography>
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
              মুইসা কনসালটেন্সির সাথে আপনার ব্যবসা  দক্ষতা বৃদ্ধি করুন—আজই যোগ দিন!
            </Typography>
            <Button
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
              আমাদের সাথে যুক্ত হোন
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
