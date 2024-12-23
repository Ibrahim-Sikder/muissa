'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { AccountBalance, Security, TrendingUp, Language } from '@mui/icons-material'

const highlights = [
  {
    icon: <AccountBalance style={{ fontSize: 48, color: 'white' }} />,
    title: 'কর্পোরেট একাউন্ট খোলা',
    description: 'সহজে এবং দ্রুত আপনার ব্যবসার জন্য কর্পোরেট ব্যাংক একাউন্ট খুলুন।',
  },
  {
    icon: <Security style={{ fontSize: 48, color: 'white' }} />,
    title: 'নিরাপদ লেনদেন',
    description: 'আপনার সমস্ত আর্থিক লেনদেন সুরক্ষিত এবং নিরাপদ।',
  },
  {
    icon: <TrendingUp style={{ fontSize: 48, color: 'white' }} />,
    title: 'ব্যবসা বৃদ্ধি',
    description: 'আমাদের বিশেষজ্ঞ পরামর্শ দ্বারা আপনার ব্যবসা দ্রুত বাড়ান।',
  },
  {
    icon: <Language style={{ fontSize: 48, color: 'white' }} />,
    title: 'আন্তর্জাতিক বাণিজ্য',
    description: 'বিশ্বব্যাপী ব্যবসা করার জন্য প্রয়োজনীয় সমস্ত সহায়তা পান।',
  },
]

export default function ServiceHighlights() {
  return (
    <Box py={8} sx={{ bgcolor: '#1C1C1C', marginTop: '60px' }}>
      <Typography
        variant="h4"
        component="h2"
        textAlign="center"
        gutterBottom
        fontWeight="bold"
        sx={{ color: 'white' }}
      >
        আমাদের সেবার বৈশিষ্ট্য
      </Typography>
      <Grid container spacing={4} mt={2}>
        {highlights.map((highlight, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', bgcolor: '#2C2C2C', color: 'white' }}>
              <CardContent>
                <Box display="flex" justifyContent="center" mb={2}>
                  {highlight.icon}
                </Box>
                <Typography variant="h6" component="h3" textAlign="center" gutterBottom>
                  {highlight.title}
                </Typography>
                <Typography variant="body2" textAlign="center">
                  {highlight.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
