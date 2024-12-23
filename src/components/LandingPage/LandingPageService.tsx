'use client'

import { Card, Typography, Button, Box, Avatar, Stack, AvatarGroup } from '@mui/material'
import { CalendarToday, AccessTime, CheckCircle, ProductionQuantityLimits } from '@mui/icons-material'

export default function LandingPageService() {
  const webinars = [
    {
      title: "ফান্ডিং সাপোর্ট",
      item: "ব্যবসায়ের জরুরী ফান্ড তৈরিতে পরামর্শ ও সহযোগিতা করা।",
      item2: "প্রতিষ্ঠানের কাগজাদি তৈরিতে পরামর্শ ও সহযোগিতা করা।",
      item3: "ফান্ডিং প্রোপোজাল তৈরি করা।",
      item4: "ফান্ডিং প্রোপোজাল তৈরি করা।",
      speakers: ["/placeholder.svg"],
      buttonText: "MEMBERSHIP",
      status: "upcoming"
    },

    {
      title: "ইনভেস্টমেন্ট সাপোর্ট",
      item: "Helping you create an emergency fund.",
      item2: "Assisting with saving and budgeting.",
      item3: "Planning to meet short-and long-term goals.",
      item4: "Retirement Planning.",
      speakers: ["/placeholder.svg"],
      buttonText: "MEMBERSHIP",
      status: "upcoming"
    },

    {
      title: "মার্কেটিং সাপোর্ট",
      item: "বিজ্ঞাপনের জন্য তাদের অধিক হারে অর্থ বাজেট করতে হয়।",
      item2: "এজেন্সির নিকট তারা বিজ্ঞাপনের সকল সেবা পায় না।",
      item3: "নানা এজেন্সির মুখোমুখি হতে হয়।",
      item4: "অভিজ্ঞ ও দক্ষ টিম না থাকায় তারা পণ্য ভোক্তাদের নিকট পৌঁছাতে পারে না।",
      speakers: ["/placeholder.svg"],
      buttonText: "MEMBERSHIP",
      status: "upcoming"
    },
    {
      title: "আইটি সাপোর্ট",
      item: "ব্যবসায়িদের ব্যক্তিগত ভাবে আইটি বিষয়ক নলেজ না থাকার ফলে ।",
      item2: "একটি সার্ভিস নিলেও পরবর্তিতে সেটা নিয়ে ভোগান্তিতে পরতে হয়।",
      item3: "অনেক সময় এজেন্সি থেকে ব্যবসায় সাপোর্ট পায় না।",
      item4: " সকল সেবা এক সাথে একই এজেন্সির নিকট পায় না।",
      speakers: ["/placeholder.svg"],
      buttonText: "MEMBERSHIP",
      status: "upcoming"
    },

  ]

  const iconStyle = { color: '#fff', fontSize: '1rem' }
  const iconStyle2 = {
    fontSize: {
      lg: "75px",
      md: "60px",
      sm: "40px",
      xs: "20px",
      color: 'white'
    },
  };
  return (
    <Box sx={{ bgcolor: '#1a1a1a', py: 6, marginTop: '60px' }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          color: 'white',
          mb: 8,
          fontWeight: 'medium',
          fontSize: { xs: '1.5rem', md: '2rem' }
        }}
      >
        আমাদের সেবাসমূহ
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: 'center',
          px: { xs: 2, md: 4 }
        }}
      >
        {webinars.map((webinar, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 300,
              width: '100%',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #8B0000 200%)',
              p: 3,
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                fontWeight: 'medium',
                minHeight: 80,
                fontSize: '1.1rem'
              }}
            >
              {webinar.title}
            </Typography>

            <Stack spacing={1}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, alignContent: 'center' }}>
                <CheckCircle sx={iconStyle} />
                <Typography sx={{ color: '#fff', fontSize: '0.9rem' }}>
                  {webinar.item}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircle sx={iconStyle} />
                <Typography sx={{ color: '#fff', fontSize: '0.9rem' }}>
                  {webinar.item2}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircle sx={iconStyle} />
                <Typography sx={{ color: '#fff', fontSize: '0.9rem' }}>
                  {webinar.item3}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircle sx={iconStyle} />
                <Typography sx={{ color: '#fff', fontSize: '0.9rem' }}>
                  {webinar.item4}
                </Typography>
              </Box>
            </Stack>

         

            <Button
              variant="outlined"
              sx={{
                color: '#fff',
                fontSize: '12px',
                borderColor: '#fff',
                mt: 'auto',
                '&:hover': {
                  borderColor: '#ff6666',
                  backgroundColor: 'rgba(255,68,68,0.1)'
                }
              }}
            >
              {webinar.buttonText}
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  )
}

