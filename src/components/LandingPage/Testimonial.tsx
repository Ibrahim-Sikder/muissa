'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Rating from '@mui/material/Rating'
const testimonials = [


  {
    name: 'মাহমুদুল হাসান	',
    role: 'সেলস ম্যানেজার , প্রিমিয়াম প্রোডাক্টস',
    comment: "Muissa এর সেলস এবং মার্কেটিং সাপোর্ট আমাদের বিক্রয় বৃদ্ধি এবং মার্কেট শেয়ার অর্জনে সহায়ক হয়েছে। তাদের কার্যকরী কৌশল এবং সঠিক পরামর্শ আমাদের ব্যবসায়িক সফলতার জন্য অপরিহার্য ছিল।",
    rating: 5,
    avatar: '/placeholder.svg?height=60&width=60',
  },

  {
    name: ' আরিফ হোসেন',
    role: 'ম্যানেজিং ডিরেক্টর, সানরাইজ ইন্টারন্যাশনাল',
    comment: "Muissa এর সেবার মান এবং পেশাদারিত্ব সম্পর্কে বলার অপেক্ষা রাখে না। তাদের আইটি সাপোর্ট এবং প্রোডাক্ট সাপোর্ট আমাদের ব্যবসায় অগ্রগতি এনেছে। তাদের সাথে কাজ করা আমাদের জন্য খুবই ফলপ্রসূ হয়েছে।",
    rating: 4,
    avatar: '/placeholder.svg?height=60&width=60',
  },
  {
    name: 'তাহমিনা খান',
    role: 'মালিক, ক্রিয়েটিভ সলিউশনস',
    comment: "Muissa এর ফান্ডিং সাপোর্ট এবং ইনভেস্টমেন্ট সাপোর্ট আমাদের স্টার্টআপকে দাঁড়াতে সাহায্য করেছে। তাদের পরামর্শ এবং সমর্থন ছাড়া আমরা এই সফলতা অর্জন করতে পারতাম না। আমি তাদের সেবার প্রতি কৃতজ্ঞ।",
    rating: 5,
    avatar: '/placeholder.svg?height=60&width=60',
  },
]

export default function Testimonials() {
  return (
    <Box py={8} sx={{ bgcolor: '#1C1C1C' }}>
      <Typography
        variant="h4"
        component="h2"
        textAlign="center"
        gutterBottom
        fontWeight="bold"
        sx={{ color: 'white' }}
      >
        আমাদের গ্রাহকদের মতামত
      </Typography>
      <Grid container spacing={4} mt={2}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%', bgcolor: '#2C2C2C', color: 'white' }}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar sx={{ width: 60, height: 60, mr: 2 }}>

                  </Avatar>
                  <Box>
                    <Typography variant="h6" component="h3" sx={{ color: 'white' }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'white', opacity: 0.8 }}>
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" paragraph sx={{ color: 'white', opacity: 0.9 }}>
                  {testimonial.comment}
                </Typography>
                <Rating value={testimonial.rating} readOnly />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
