'use client'

import Container from '@/components/ui/HomePage/Container/Container';
import './payment.css';
import { Button, Divider } from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useRef } from 'react';

const Payment = () => {
    const invoiceRef = useRef<HTMLDivElement>(null);

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

    const invoiceData = [
        {
            id: 1,
            services: 'Product Service',
            subscription: '2 year',
            tax: '5',
            rate: 500,
            amount: '500',
            partner: 'As a investor'
        },
    ];

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
                                {invoiceData.map((data, i) => (
                                    <tr key={i} className="text-xs">
                                        <td >{data.services}</td>
                                        <td >{data.partner}</td>
                                        <td >{data.subscription}</td>
                                        <td >{data.rate}</td>
                                        <td >{data.tax}</td>
                                        <td className="px-2.5 py-2.5 border">{data.amount}</td>
                                        <td >dfghjhgf4567</td>
                                        <td>4567898765</td>
                                        <td>Pending</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        
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
                                            <span><b>Phone:</b> 34567890</span>
                                            <span><b>Website:</b> www.muissa.com</span>
                                            <span><b>Address:</b> Dahka</span>
                                        </div>
                                    </div>
                                    {/* <Image alt='logo' src={logo}  /> */}
                                </div>
                                <Divider sx={{ background: "#152644", marginTop: '10px' }} />
                                <div className="clientInfo text-sm">
                                    <div className="flex justify-between">
                                        <div className="mt-10 flex flex-col space-y-1 text-sm">
                                            <h4>Bill To</h4>
                                            <span><b>Client Name :</b> Ahsan</span>
                                            <span><b>E-mail:</b> ahsan@gmail.com</span>
                                            <span><b>Phone :</b> 34567890</span>
                                            <span><b>Address :</b> Dahka</span>
                                        </div>
                                        <div className="mt-10 flex flex-col space-y-1 text-sm">
                                            <h4>Invoice No : 5</h4>
                                            <span><b>Invoice date :</b>20-05-22</span>
                                            <span><b>Due :</b> 67545</span>
                                        </div>
                                    </div>
                                    <div className="mt-10">
                                        <table className="min-w-full bg-white border border-gray-300">
                                            <thead>
                                                <tr>
                                                    <th className="px-2.5 py-2.5 border">Service Name</th>
                                                    <th className="px-2.5 py-2.5 border">Year Subscription</th>
                                                    <th className="px-2.5 py-2.5 border">Rate</th>
                                                    <th className="px-2.5 py-2.5 border">Tax</th>
                                                    <th className="px-2.5 py-2.5 border">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody className='text-center'>
                                                {invoiceData.map((data, i) => (
                                                    <tr key={i} className="text-xs">
                                                        <td className="px-2.5 py-2.5 border">{data.services}</td>
                                                        <td className="px-2.5 py-2.5 border">{data.subscription}</td>
                                                        <td className="px-2.5 py-2.5 border">{data.rate}</td>
                                                        <td className="px-2.5 py-2.5 border">{data.tax}</td>
                                                        <td className="px-2.5 py-2.5 border">{data.amount}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="flex justify-end text-sm mt-10 w-full">
                                        <div className="w-[350px]">
                                            <div>
                                                <div className="flex justify-between">
                                                    <div className='flex flex-col space-y-1'>
                                                        <b>Subtotal :</b>
                                                        <span>Discount :</span>
                                                        <span>Tax :</span>
                                                        <b>Total</b>
                                                        <span>Amount paid</span>
                                                    </div>
                                                    <div className='flex flex-col space-y-1'>
                                                        <b>$765434567</b>
                                                        <span>$20</span>
                                                        <span>$20</span>
                                                        <b>65434</b>
                                                        <span>50</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <Divider sx={{ background: "#152644", margin: '10px 0px' }} />
                                            <div className="flex justify-between">
                                                <b>Balance Due :</b>
                                                <b>567765</b>
                                            </div>
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
