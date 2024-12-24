'use client'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import company from '../../../src/assets/slider/salse.jpg'
export default function ServiceCategories() {


  return (
    <div className="mt-[60px] text-white py-3 md:py-10 md:px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10 "
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l7.9-7.9h-.83zm5.657 0L19.514 8.485 20.93 9.9l8.485-8.485h-1.415zM32.372 0L22.343 10.03 23.758 11.444l10.03-10.03h-1.415zm-8.485 0L13.43 10.457 14.844 11.87l10.457-10.457h-1.414zM0 5.373l.828.83-1.415 1.414L0 5.373zm0 5.657l.828.83-1.415 1.415L0 11.03zm0 5.657l.828.83-1.415 1.415L0 16.687zm0 5.657l.828.83-1.415 1.415L0 22.344zm0 5.656l.828.83-1.415 1.415L0 28zm0 5.657l.828.83-1.415 1.415L0 33.657zm0 5.657l.828.83-1.415 1.415L0 39.314zm0 5.657l.828.83-1.415 1.415L0 44.97zm0 5.657l.828.83-1.415 1.415L0 50.627zm0 5.657l.828.83-1.415 1.415L0 56.284zM54.627 60l.83-.828 1.415 1.415L54.627 60zm-5.657 0l.83-.828 1.415 1.415L48.97 60zm-5.657 0l.83-.828 1.415 1.415L43.314 60zm-5.657 0l.83-.828 1.415 1.415L37.657 60zm-5.657 0l.83-.828 1.415 1.415L32 60zm-5.657 0l.83-.828 1.415 1.415L26.343 60zm-5.657 0l.83-.828 1.415 1.415L20.686 60zm-5.657 0l.83-.828 1.415 1.415L15.03 60zm-5.657 0l.83-.828 1.415 1.415L9.372 60zm-5.657 0l.83-.828 1.415 1.415L3.715 60z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")"
        }}
      />

      <div className="max-w-7xl mx-auto">


        <div className="grid md:grid-cols-2 gap-16 items-start place-items-center place-content-center ">



          {/* Left side - Features list */}
          <div className="space-y-4">


            <List sx={{ color: 'white' }}>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ style: { color: 'white' } }}
                  primary="আমাদের রয়েছে দক্ষ Sales Team।"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ style: { color: 'white' } }}
                  primary="আমাদের কাছে পাচ্ছেন কাস্টমার সাপোর্ট।"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ style: { color: 'white' } }}
                  primary="আপনার প্রতিযোগীদের বিশ্লেষণ করে পন্যের মূল্য নির্ধারণে পরামর্শ দেই।"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ style: { color: 'white' } }}
                  primary="ক্রেতাদের চাহিদা ও আচরন বিশ্লেষণ করে বিক্রয় প্রবনতা বাড়াতে পরামর্শ ও সাহায্য করে থাকি।"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ style: { color: 'white' } }}
                  primary="নতুন পন্যের বিক্রয় কৌশল ও নতুন নতুন পন্য উদ্ভাবনের পরামর্শ প্রদান করে থাকি।"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ style: { color: 'white' } }}
                  primary="আমরা মার্কেট বিশ্লেষণ করে পন্য বিক্রির সঠিক কৌশল সম্পর্কে ব্যবসায়ীদের অবগত করতে সক্ষম।"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ style: { color: 'white' } }}
                  primary="আমাদের Sales Support এর সহায়তায় কোন প্রকার বিজ্ঞাপন বাজেট ছাড়াই আপনার প্রতিষ্ঠানের পণ্য বিক্রয় করতে পারবেন।"
                />
              </ListItem>
            </List>

          </div>
          {/* Right side - Service cards */}
          <div className="grid grid-cols-2 gap-8">
            <div className='w-[500px] h-[200px] md:h-[500px] rounded-md  overflow-hidden' >
              <Image alt='services' src={company} className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
