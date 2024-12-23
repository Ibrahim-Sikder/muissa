'use client'

import { useState } from 'react'
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  styled,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  background: 'transparent',
  color: 'white',
  boxShadow: 'none',
  '&:before': {
    display: 'none',
  },
  '& .MuiAccordionSummary-root': {
    backgroundColor: 'rgba(255, 67, 67, 0.9)',
    borderRadius: '4px',
    marginBottom: '8px',
    '&.Mui-expanded': {
      backgroundColor: 'rgba(255, 67, 67, 1)',
    },
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: 'white',
  },
  '& .MuiAccordionDetails-root': {
    backgroundColor: 'rgba(33, 33, 33, 0.9)',
    borderRadius: '4px',
    padding: '20px',
  },
}))

const faqData = [
  {
    question: 'MUISSA-এর ফান্ডিং সাপোর্ট কীভাবে সাহায্য করে?',
    answer: 'আমাদের ফান্ডিং সাপোর্ট পরিষেবা আপনাকে ব্যবসার জন্য সঠিক ফান্ডিং পরিকল্পনা তৈরি করতে সাহায্য করবে। আমরা বিনিয়োগকারীদের সাথে সংযোগ এবং প্রোপোজাল তৈরিতে সহায়তা করি।',
  },
  {
    question: 'ইনভেস্টমেন্ট সাপোর্টে কী অন্তর্ভুক্ত?',
    answer: 'আমরা আপনাকে সেরা বিনিয়োগের সুযোগ খুঁজে পেতে, ঝুঁকি মূল্যায়ন করতে, এবং লাভজনক বিনিয়োগের পরিকল্পনা বাস্তবায়নে সাহায্য করি।',
  },
  {
    question: 'মার্কেটিং সাপোর্টের মাধ্যমে আমি কী সুবিধা পাবো?',
    answer: 'আমাদের মার্কেটিং সাপোর্ট পরিষেবায় অন্তর্ভুক্ত ডিজিটাল মার্কেটিং, বিজ্ঞাপন প্রচারণা, এবং ব্র্যান্ডিং পরিকল্পনা, যা আপনার ব্যবসার দৃশ্যমানতা বাড়াবে।',
  },
  {
    question: 'আইটি সাপোর্টে কী ধরণের সাহায্য করা হয়?',
    answer: 'আমরা ওয়েবসাইট উন্নয়ন, অ্যাপ্লিকেশন ডেভেলপমেন্ট, এবং প্রযুক্তি ভিত্তিক কাস্টম সমাধান প্রদান করে থাকি।',
  },
  {
    question: 'প্রোডাক্ট সাপোর্ট পরিষেবা কীভাবে কাজ করে?',
    answer: 'আমাদের প্রোডাক্ট সাপোর্ট পরিষেবা আপনাকে পণ্যের উন্নয়ন, গুণগত মান নিশ্চিত করা এবং বাজারজাতকরণে সহায়তা প্রদান করে।',
  },
  {
    question: 'সেলস সাপোর্ট থেকে কীভাবে উপকৃত হবো?',
    answer: 'আমাদের সেলস সাপোর্ট পরিষেবা বিক্রয় কৌশল তৈরি, সেলস টিম ট্রেনিং, এবং ক্লায়েন্ট ম্যানেজমেন্টে সাহায্য করে।',
  },
  {
    question: 'ডেলিভারি সাপোর্ট কীভাবে কাজ করে?',
    answer: 'আমাদের ডেলিভারি সাপোর্ট পরিষেবা আপনার পণ্য বা পরিষেবা গ্রাহকের কাছে নির্ভুল এবং সময়মতো পৌঁছাতে সহায়তা করে। আমরা সাপ্লাই চেইন ম্যানেজমেন্টে সহায়তা প্রদান করি।',
  },
]

export default function WebinarFAQ() {
  const [expanded, setExpanded] = useState<string | false>('panel0')

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box sx={{
      backgroundColor: '#121212',
      marginTop: '60px',
      py: 6
    }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h1"
          align="center"
          sx={{
            color: 'white',
            mb: 4,
            fontWeight: 500
          }}
        >
          MUISSA সম্পর্কে কিছু জানতে চান?
        </Typography>

        <Box sx={{ mt: 3 }}>
          {faqData.map((faq, index) => (
            <StyledAccordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography sx={{ fontSize: '1rem', color: 'white' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'white' }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
