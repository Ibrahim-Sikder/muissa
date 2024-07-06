'use client'

import Container from '@/components/ui/HomePage/Container/Container';
import './payment.css';
import { Button, Divider } from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useRef } from 'react';
import { useMyPaymentQuery } from '@/redux/api/paymentApi';
import { getCookie } from '@/helpers/Cookies';
import Loader from '@/components/Loader';
import { TPaymentData } from '@/types';
import Link from 'next/link';




const Payment = () => {
    const token = getCookie('mui-token')
    const { data: paymentData, isLoading } = useMyPaymentQuery({ token })
    const invoiceRef = useRef<HTMLDivElement>(null);

    if (isLoading) {
        return <Loader />
    }
    console.log(paymentData)
    const handleDownload = async () => {
        const invoiceElement = invoiceRef.current;

        if (!invoiceElement) {
            return;
        }

        invoiceElement.style.display = 'block';
        invoiceElement.style.position = 'absolute';
        invoiceElement.style.top = '-3000px';
        await new Promise(resolve => setTimeout(resolve, 100));

        const canvas = await html2canvas(invoiceElement);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
        pdf.save('invoice.pdf');

        invoiceElement.style.display = 'none';
    };
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        };
        return new Date(dateString).toLocaleDateString("en-GB", options);
    };


    return (
        <>
            <Container>
                <div className="mt-10">
                    <div className='flex flex-end justify-end mb-3'>
                        <Button
                            variant='outlined'
                            sx={{ fontSize: '12px', width: '140px', padding: '5px 3px' }}
                            onClick={handleDownload}
                        >
                            Download Invoice
                        </Button>
                    </div>
                    <div className="overflow-x-auto paymentTable">
                        <table className="min-w-full overflow-x-auto bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th >Customer Name</th>
                                    <th >Membership Type </th>
                                    <th > Subscription</th>
                                    <th >Membership Fee </th>
                                    <th >Discount</th>
                                    <th >Payment</th>
                                    <th className="px-2.5 py-2.5 border">Transiton ID </th>
                                    <th >Mobile Number</th>
                                    <th >Status</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {paymentData?.map((data: TPaymentData, i: number) => (
                                    <tr key={i} className="text-xs">
                                        <td className='capitalize'>{data?.user?.name}</td>
                                        <td className='capitalize'>{data?.member_type === 'business_owner' ? 'Business Owner' : data?.member_type}</td>
                                        <td >{data.subscription_for}</td>
                                        <td >{data.total_amount}</td>
                                        <td >{data.discount_amount}</td>
                                        <td>{data.amount}</td>
                                        <td >{data?.transaction_id}</td>
                                        <td>{data?.account_number}</td>
                                        <td>{data?.payment_status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='flex flex-end justify-end mb-3'>
                        {
                            paymentData?.map((data: TPaymentData) => (

                                <Button
                                    key={data._id}
                                    component={Link} href={`/profile/my-payment/view/${data._id}`}
                                    variant='outlined'
                                    sx={{ fontSize: '12px', width: '50px', padding: '5px 3px', marginTop: '10px' }}

                                >
                                    View
                                </Button>
                            ))
                        }
                    </div>

                    <div ref={invoiceRef} className="hidden-invoice-content">
                        <div className="invoiceWrap flex justify-between flex-col">
                            <div>
                                <div className="flex justify-between">
                                    <div>
                                        <h1>INVOICE</h1>
                                        <div className="mt-5 flex flex-col space-y-1 text-sm">
                                            <h3 className='mb-1'>Muissa</h3>
                                            <span><b>Owner Name:</b> Abdu Rakib</span>
                                            <span><b>E-mail:</b> muissa@gmail.com</span>
                                            <span><b>Phone:</b> 01984673686</span>
                                            <span><b>Website:</b> www.muissa.com</span>
                                            <span><b>Address:</b> House-08, Road-07, Block-C, Banasree,Dhaka-1219</span>
                                        </div>
                                    </div>
                                    {/* <Image alt='logo' src={logo}  /> */}
                                </div>
                                <Divider sx={{ background: "#152644", marginTop: '10px' }} />
                                <div className="clientInfo text-sm">
                                    {
                                        paymentData?.map((data: TPaymentData) => (
                                            <div key={data._id} className="flex justify-between">
                                                <div className="mt-10 flex flex-col space-y-1 text-sm">
                                                    <h4>Bill To</h4>
                                                    <span><b>Client Name :</b> {data?.user?.name}</span>
                                                    <span><b>E-mail:</b>{data?.user?.auth}</span>
                                                    <span><b>Phone :</b> {data?.user?.name}</span>
                                                    <span><b>Phone :</b> {data?.user?.phone}</span>
                                                    <span><b>Address :</b> {data?.user?.street_address}</span>
                                                </div>
                                                <div className="mt-10 flex flex-col space-y-1 text-sm">
                                                    <h4>Invoice No : {data?.invoice_no}</h4>
                                                    <h4>Invoice date : {formatDate(data?.createdAt)}</h4>

                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div className="mt-10">
                                        <table className="min-w-full bg-white border border-gray-300">
                                            <thead className='bg-gray-200'>
                                                <tr>
                                                    <th className="px-4 py-2 border"> Subscription</th>
                                                    <th className="px-4 py-2 border">Membership Fee </th>
                                                    <th className="px-4 py-2 border">Discount</th>
                                                    <th className="px-4 py-2 border">Payment</th>
                                                    <th className="px-4 py-2 border">Transiton ID </th>

                                                    <th >Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className='text-center'>
                                                {paymentData?.map((data: TPaymentData, i: number) => (
                                                    <tr key={i} className="text-xs">


                                                        <td className="px-4 py-2 border">{data.subscription_for}</td>
                                                        <td className="px-4 py-2 border">{data.total_amount}</td>
                                                        <td className="px-4 py-2 border">{data.discount_amount}</td>
                                                        <td className="px-4 py-2 border">{data.amount}</td>
                                                        <td className="px-4 py-2 border">{data.transaction_id}</td>
                                                        <td className="px-4 py-2 border">{data?.payment_status}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="flex justify-end text-sm mt-10 w-full">
                                        <div className="w-[350px]">
                                            <div>
                                                {
                                                    paymentData?.map((data: TPaymentData) => (
                                                        <div key={data._id} className="flex justify-between">
                                                            <div className='flex flex-col space-y-1'>
                                                                <b>Subtotal :</b>
                                                                <span>Discount :</span>
                                                                <span>Amount paid</span>
                                                            </div>
                                                            <div className='flex flex-col space-y-1'>
                                                                <b>{data.total_amount}</b>
                                                                <span>{data.discount_amount}</span>

                                                                <span>{data.amount}</span>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <Divider sx={{ background: "#152644", margin: '10px 0px' }} />
                                            {/* <div className="flex justify-between">
                                                <b>Balance Due :</b>
                                                <b>567765</b>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <div className="w-[630px] mx-auto flex justify-between mt-8">
                                    <div className="text-center">
                                        <Divider />
                                        <strong>Client signature</strong>
                                    </div>
                                    <div className="text-center">
                                        <Divider />
                                        <strong>Business signature</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <style jsx>{`
                .hidden-invoice-content {
                    display: none;
                }
            `}</style>
        </>
    );
};

export default Payment;
