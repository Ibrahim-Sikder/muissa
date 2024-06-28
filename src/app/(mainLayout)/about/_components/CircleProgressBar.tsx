'use client'

import Container from '@/components/ui/HomePage/Container/Container';
import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircleProgressBar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const value = 95;
  const value2 = 100;
  const value3 = 100;

  if (!isClient) {
    return null;
  }

  return (
    <Container>
      <div className='flex flex-col md:flex-row gap-10  items-center justify-between text-center md:w-[600px]'>
        
        <div className='flex flex-col items-center'>
          <div style={{ width: '170px' }}>
            <CircularProgressbar
              value={value2}
              text={`${value2}%`}
              styles={buildStyles({
                pathColor: '#1591A3',
                pathTransitionDuration: 0.5,
                textColor: '#f88',
                textSize: '16px',
                trailColor: '#d6d6d6',
                backgroundColor: '#1591A3',
              })}
            />
          </div>
          <h4 className="mt-3">Work</h4>
          <h4 className="mt-3">Development</h4>
        </div>
        <div className='flex flex-col items-center'>
          <div style={{ width: '170px' }}>
            <CircularProgressbar
              value={value}
              text={`${value}%`}
              styles={buildStyles({
                pathColor: '#1591A3',
                pathTransitionDuration: 0.5,
                textColor: '#f88',
                textSize: '16px',
                trailColor: '#d6d6d6',
                backgroundColor: '#1591A3',
              })}
            />
          </div>
          <h4 className="mt-3">Plan</h4>
          <h4 className="mt-3">Fulfilled</h4>
        </div>
        <div className='flex flex-col items-center'>
          <div style={{ width: '170px' }}>
            <CircularProgressbar
              value={value3}
              text={`${value3}%`}
              styles={buildStyles({
                pathColor: '#1591A3',
                pathTransitionDuration: 0.5,
                textColor: '#f88',
                textSize: '16px',
                trailColor: '#d6d6d6',
                backgroundColor: '#1591A3',
              })}
            />
          </div>
          <h4 className="mt-3">Client</h4>
          <h4 className="mt-3">Satisfaction </h4>
        </div>
      </div>
    </Container>
  );
};

export default CircleProgressBar;
