'use client'

import { Box, Typography, Avatar } from '@mui/material'
import { styled } from '@mui/material/styles'
import { CalendarToday, AccessTime } from '@mui/icons-material'

const Banner = styled(Box)(({ theme }) => ({
  background: '#1a1a1a',
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  color: 'white',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(2),
    padding: theme.spacing(3),
  }
}))

const UpdateLabel = styled(Box)(({ theme }) => ({
  background: '#ff4444',
  color: 'white',
  padding: theme.spacing(0.5, 2),
  transform: 'rotate(-45deg)',
  position: 'absolute',
  left: -20,
  top: 15,
  zIndex: 1,
}))

const InfoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  '& .MuiSvgIcon-root': {
    color: 'white',
  },
}))

const ProfileSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginLeft: 'auto',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
  }
}))

export default function TaxExpertBanner() {
  return (
    <Banner>
      <UpdateLabel>
        <Typography variant='caption' sx={{ fontSize: '12px', paddingRight: '5px', color: 'white' }}>সদস্যতা  </Typography>
      </UpdateLabel>

      <Box sx={{ flex: 1, ml: 8 }}>
        <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
          আমাদের সাথে যুক্ত হোন
        </Typography>

        <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          <InfoSection>
            <CalendarToday fontSize="small" />
            <Box>
              <Typography variant="caption" sx={{ opacity: 0.7 }}>
                তারিখ
              </Typography>
              <Typography variant="body2">
                ২৭ ডিসেম্বর, ২০২৪
              </Typography>
            </Box>
          </InfoSection>

          <InfoSection>
            <AccessTime fontSize="small" />
            <Box>
              <Typography variant="caption" sx={{ opacity: 0.7 }}>
                সময়
              </Typography>
              <Typography variant="body2">
                রাত ১১ টা
              </Typography>
            </Box>
          </InfoSection>
        </Box>
      </Box>

      <ProfileSection>

        <button className=" bg-red-500 text-white px-8 py-1 rounded-md hover:bg-red-600 transition-colors">
          <span className='block'>  ফি মাত্র </span>
          <b className='text-2xl'> ১২০০০</b>
        </button>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            সদস্যতা সাবস্ক্রিপশন
          </Typography>

          <Typography variant="caption" sx={{ display: 'block', opacity: 0.7 }}>
            আমাদের ব্যবসা পরামর্শদান
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', opacity: 0.7 }}>
            সেবার সদস্য হতে এবং বিশেষ সুবিধাগুলি উপভোগ করতে
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', opacity: 0.7 }}>
            আজই সাবস্ক্রিপশন নিন।
          </Typography>
        </Box>
      </ProfileSection>
    </Banner>
  )
}

