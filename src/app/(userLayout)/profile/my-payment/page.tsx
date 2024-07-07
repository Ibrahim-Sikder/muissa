'use client'

import Container from '@/components/ui/HomePage/Container/Container';
import './payment.css';
import { Button } from '@mui/material';
import React from 'react';
import { useMyPaymentQuery } from '@/redux/api/paymentApi';
import { getCookie } from '@/helpers/Cookies';
import Loader from '@/components/Loader';
import { TPaymentData } from '@/types';
import Link from 'next/link';

const Payment = () => {
    const token = getCookie('mui-token');
    const { data: paymentData, isLoading } = useMyPaymentQuery({ token });
    
    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <Container>
                <div className="mt-10">
                    <div className='flex flex-end justify-end mb-3'>
                    </div>
                    <div className="overflow-x-auto paymentTable">
                        <table className="min-w-full overflow-x-auto bg-white border border-gray-300">
                            <thead className='bg-gray-200'>
                                <tr>
                                    <th>Customer Name</th>
                                    <th>Membership Type</th>
                                    <th>Subscription</th>
                                    <th>Membership Fee</th>
                                    <th>Discount</th>
                                    <th>Payment</th>
                                    <th className="px-2.5 py-2.5 border">Transiton ID</th>
                                    <th>Mobile Number</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {paymentData?.map((data: TPaymentData, i: number) => {
                                    const memberShipFee = Number(data.amount) + Number(data.discount_amount);
                                    return (
                                        <tr key={i} className="text-xs">
                                            <td className='capitalize'>{data?.user?.name}</td>
                                            <td className='capitalize'>{data?.member_type === 'business_owner' ? 'Business Owner' : data?.member_type}</td>
                                            <td>{data.subscription_for}</td>
                                            <td>{memberShipFee}</td>
                                            <td>{data.discount_amount}</td>
                                            <td>{data.amount}</td>
                                            <td>{data?.transaction_id}</td>
                                            <td>{data?.account_number}</td>
                                            <td>{data?.payment_status}</td>
                                            <td>
                                                <Button
                                                    key={data._id}
                                                    component={Link} href={`/profile/my-payment/view/${data._id}`}
                                                    variant='outlined'
                                                    sx={{ fontSize: '12px', width: '50px', padding: '5px 3px', marginTop: '10px' }}
                                                >
                                                    View
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Payment;
