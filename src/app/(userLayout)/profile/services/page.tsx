import React from 'react';
import './service.css'
import icon from '../../../../assets/services/icon4.png'
import Image from 'next/image';
const page = () => {
  const serviceData = [
    {
      id: 1,
      name: 'আইটি সাপোর্ট'
    },
    {
      id: 1,
      name: 'আইটি সাপোর্ট'
    },
    {
      id: 1,
      name: 'আইটি সাপোর্ট'
    },
    {
      id: 1,
      name: 'আইটি সাপোর্ট'
    },
  ]
  return (
    <div>
      <h1>My services </h1>
      <div className='grid grid-cols-2 gap-10 mt-10 '>
        {serviceData.map(data => (
          <div key={data.id} className='profileServiceCard p-5 border rounded-lg shadow-md'>
            <div className="flex items-center gap-8">
              <Image width={50} height={50} src={icon} alt='services' />
              <div>
                <h4>{data.name}</h4>
                <b className='text-semibold'>৳৫০০</b>
              </div>
            </div>
            <div className="flex items-center justify-end mt-10">
           
              <b className=''>As a buisness owner </b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;