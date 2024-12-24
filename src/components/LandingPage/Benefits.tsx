'use client'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import company from '../../../src/assets/invest/ivestment4.jpg'
export default function BusinessSection() {
  const features = [
    " ব্যবসায়ের জরুরী ফান্ড তৈরিতে পরামর্শ ও সহযোগিতা করা।",
    " প্রতিষ্ঠানের কাগজাদি তৈরিতে পরামর্শ ও সহযোগিতা করা।",
    " ফান্ডিং প্রোপোজাল তৈরি করা।",
    "ইনভেস্টরের জন্য একটি শক্তিশালী বক্তব্য তৈরী ও পরামর্শ প্রদান।",
    "ব্যবসায়ের মার্কেট Analysis এর মাধ্যমে বাজার তৈরি করা ও পরামর্শ প্রদান",
    "প্রতিষ্ঠানের Analysis Report তৈরিতে সহযোগিতা করা।",
    "প্রতিষ্ঠানের Monitoring Report File তৈরি করা।",
    "আমাদের নিজস্ব অভিজ্ঞ ও দক্ষ মার্কেটিং টিম রয়েছে।",
    "আমাদের রয়েছে ৩৬০° বিজ্ঞাপন সেবা",
    "আমাদের রয়েছে স্টুডিও ও গ্রাফিক্স ডিজাইন এর দক্ষ টিম।",
    "বিজ্ঞাপন সেবা (All type of social media marketing, google ads marketing and many more) পাচ্ছেন আমাদের প্লাটফর্মে।"
  ]

  return (
    <div className="mt-[60px] bg-gray-950 text-white py-8 md:px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l7.9-7.9h-.83zm5.657 0L19.514 8.485 20.93 9.9l8.485-8.485h-1.415zM32.372 0L22.343 10.03 23.758 11.444l10.03-10.03h-1.415zm-8.485 0L13.43 10.457 14.844 11.87l10.457-10.457h-1.414zM0 5.373l.828.83-1.415 1.414L0 5.373zm0 5.657l.828.83-1.415 1.415L0 11.03zm0 5.657l.828.83-1.415 1.415L0 16.687zm0 5.657l.828.83-1.415 1.415L0 22.344zm0 5.656l.828.83-1.415 1.415L0 28zm0 5.657l.828.83-1.415 1.415L0 33.657zm0 5.657l.828.83-1.415 1.415L0 39.314zm0 5.657l.828.83-1.415 1.415L0 44.97zm0 5.657l.828.83-1.415 1.415L0 50.627zm0 5.657l.828.83-1.415 1.415L0 56.284zM54.627 60l.83-.828 1.415 1.415L54.627 60zm-5.657 0l.83-.828 1.415 1.415L48.97 60zm-5.657 0l.83-.828 1.415 1.415L43.314 60zm-5.657 0l.83-.828 1.415 1.415L37.657 60zm-5.657 0l.83-.828 1.415 1.415L32 60zm-5.657 0l.83-.828 1.415 1.415L26.343 60zm-5.657 0l.83-.828 1.415 1.415L20.686 60zm-5.657 0l.83-.828 1.415 1.415L15.03 60zm-5.657 0l.83-.828 1.415 1.415L9.372 60zm-5.657 0l.83-.828 1.415 1.415L3.715 60z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")"
        }}
      />

      <div className="max-w-7xl mx-auto">


        <div className="grid md:grid-cols-2 gap-16 items-start">


          {/* Right side - Service cards */}
          <div className="grid grid-cols-2 gap-3  md:gap-8">
            <div className='w-[500px] h-[200px] md:h-[500px] rounded-md  overflow-hidden' >
              <Image alt='services' src={company} className='w-full h-full object-cover' />
            </div>
          </div>
          {/* Left side - Features list */}
          <div className="space-y-4">
            <h1 className="text-2xl md:text-5xl font-bold mb-5">
              About Our Business
            </h1>

            <List sx={{ color: 'white' }}>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ style: { color: 'white' } }}
                  primary="Customizable funding strategies tailored to your business needs."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ style: { color: 'white' } }}
                  primary="End-to-end support in creating and submitting funding proposals."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ style: { color: 'white' } }}
                  primary="Expert guidance in preparing essential business documentation for funding."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ style: { color: 'white' } }}
                  primary="Personalized investor pitch preparation and consultation for maximum impact."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ style: { color: 'white' } }}
                  primary="In-depth market analysis to identify and secure potential funding opportunities."
                />
              </ListItem>


            </List>

            <p>ব্যবসায়ের জরুরি ফান্ড তৈরির পরামর্শ থেকে শুরু করে প্রতিষ্ঠানের কাগজপত্র প্রস্তুত, ফান্ডিং প্রোপোজাল ও শক্তিশালী বক্তব্য তৈরিতে সহায়তা প্রদান; মার্কেট অ্যানালাইসিসের মাধ্যমে বাজার তৈরি, প্রতিষ্ঠানের অ্যানালাইসিস ও মনিটরিং রিপোর্ট প্রস্তুত, এবং কার্যপদ্ধতি নির্ধারণে পরামর্শ প্রদানের মাধ্যমে আমরা ব্যবসায়িক সমাধানে নির্ভরযোগ্য সেবা প্রদান করি।</p>



          </div>
        </div>
      </div>
    </div>
  )
}
