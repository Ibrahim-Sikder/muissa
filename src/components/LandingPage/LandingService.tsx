'use client'

import { Card, Typography, Container, Box } from '@mui/material'
import { School, Work, SupportAgent } from '@mui/icons-material'

export default function LandingService() {
  return (
    <Box sx={{
      bgcolor: '#1C1C1C',
      py: 8,
      marginTop:'60px'
    }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{
            color: 'white',
            mb: 6,
            fontFamily: 'inherit',
          }}
        >
          মুইসা কনসালটেন্সি সেবাসমূহ
        </Typography>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(3, 1fr)'
          },
          gap: 3,
        }}>
          {/* Card 1 */}
          <Card sx={{
            bgcolor: '#2C2C2C',
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 2
          }}>
            <School sx={{
              fontSize: 64,
              color: '#fff',
              mb: 2
            }} />
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'inherit',
              }}
            >
              প্রোডাক্ট সাপোর্ট
            </Typography>
          </Card>

          {/* Card 2 */}
          <Card sx={{
            bgcolor: '#2C2C2C',
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 2
          }}>
            <Work sx={{
              fontSize: 64,
              color: '#fff',
              mb: 2
            }} />
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'inherit',
              }}
            >
              সেলস সাপোর্ট
            </Typography>
          </Card>

          {/* Card 3 */}
          <Card sx={{
            bgcolor: '#2C2C2C',
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 2
          }}>
            <SupportAgent sx={{
              fontSize: 64,
              color: '#fff',
              mb: 2
            }} />
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'inherit',
              }}
            >
              ডেলিভারি সাপোর্ট
            </Typography>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}
