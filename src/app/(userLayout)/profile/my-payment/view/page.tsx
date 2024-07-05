"use client";

import React, { useRef } from "react";
import Container from "@/components/ui/HomePage/Container/Container";
import { Button, Divider } from "@mui/material";
import Image from "next/image";
import logo from "../../../../../assets/logo/logo.png";
import { FaArrowLeft } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useGetSinglePaymentQuery } from "@/redux/api/paymentApi";
import dayjs from "dayjs";
import ReactToPrint from "react-to-print";
import Loader from "@/components/Loader";
import { toast } from "sonner";
import { getCookie } from "@/helpers/Cookies";
import './view.css'
interface PaymentData {
    _id: string;
    createdAt: string;
    amount: number;
    subscription_for: string;
    user: {
        name: string;
        email: string;
    };
}

const ShowInvoice: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const token = getCookie("mui-token");
    const {
        data: paymentData,
        error,
        isLoading,
    } = useGetSinglePaymentQuery({ id });

    const componentRef = useRef<HTMLDivElement>(null);

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        const errorWithData = error as {
            message?: string;
            data?: { message?: string };
        };

        if (errorWithData.data?.message) {
            toast.error([errorWithData.data.message]);
        } else if (errorWithData.message) {
            toast.error([errorWithData.message]);
        } else {
            toast.error(["An unexpected error occurred."]);
        }
    }

    if (!paymentData) {
        return <div className="text-center">Invoice data not found</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <Container>
                <div className="flex justify-between mb-6">

                    <ReactToPrint
                        trigger={() => (
                            <Button color="secondary" size="small" variant="outlined">
                                Print as PDF
                            </Button>
                        )}
                        content={() => componentRef.current}
                    />
                </div>
                <div className="">
                    <div
                        ref={componentRef}
                        id="invoice"
                        className="bg-white p-10 rounded-lg a4-size flex flex-col justify-between "
                    >
                        <div>
                            <div className="flex justify-between items-center mb-10">
                                <div>
                                    <h1 className="text-4xl font-bold">INVOICE</h1>
                                    <div className="mt-5 text-sm">
                                        <h3 className="text-xl font-semibold mb-2">Muissa</h3>
                                        <p>
                                            <strong>Owner Name:</strong> Muissa Business Consulting
                                            Ltd
                                        </p>
                                        <p>
                                            <strong>E-mail:</strong> muissa@gmail.com
                                        </p>
                                        <p>
                                            <strong>Phone:</strong> 34567890
                                        </p>
                                        <p>
                                            <strong>Website:</strong> www.muissa.com
                                        </p>
                                        <p>
                                            <strong>Address:</strong> Dhaka
                                        </p>
                                    </div>
                                </div>
                                <Image
                                    alt="logo"
                                    src={logo}
                                    className="w-32 h-32 object-cover"
                                />
                            </div>
                            <Divider />
                            <div className="mt-8 text-sm">
                                <div className="flex justify-between">
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">Bill To</h4>
                                        <p>
                                            <strong>Client Name:</strong> {paymentData?.user?.name}
                                        </p>
                                        <p>
                                            <strong>E-mail:</strong> {paymentData?.user?.email}
                                        </p>
                                        <p>
                                            <strong>Phone:</strong>
                                            {paymentData?.user?.phone}
                                        </p>
                                        <p>
                                            <strong>Address:</strong>{" "}
                                            {paymentData?.user?.street_address},{" "}
                                            {paymentData?.user?.city} , {paymentData?.user?.country} ,
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">
                                            Invoice Details
                                        </h4>
                                        <p>
                                            <strong>Invoice No:</strong> {paymentData?.invoice_no}
                                        </p>
                                        <p>
                                            <strong>Invoice Date:</strong>{" "}
                                            {dayjs(paymentData?.createdAt).format("DD-MM-YY")}
                                        </p>
                                        <p>
                                            <strong>Due:</strong> N/A
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <table className="min-w-full bg-white border border-gray-300">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="px-4 py-2 border">Year Subscription</th>
                                            <th className="px-4 py-2 border">Rate</th>
                                            <th className="px-4 py-2 border">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr className="text-sm">
                                            <td className="px-4 py-2 border">
                                                {" "}
                                                {paymentData?.subscription_for}
                                            </td>
                                            <td className="px-4 py-2 border">N/A</td>
                                            <td className="px-4 py-2 border">
                                                {paymentData?.amount}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex text-sm mt-8 w-full border p-3">
                                <div className="w-full">
                                    <div className="flex justify-between mb-2">
                                        <div className="flex flex-col space-y-1">
                                            <strong>Subtotal:</strong>

                                            <span>Amount paid:</span>
                                        </div>
                                        <div className="flex flex-col space-y-1 text-right">
                                            <strong>{paymentData?.amount}</strong>

                                            <strong>{paymentData?.amount}</strong>
                                        </div>
                                    </div>
                                    <Divider />
                                    <div className="flex justify-between mt-2">
                                        <strong>Balance Due:</strong>
                                        <strong>0</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

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
            </Container>
            <style jsx>{`
        @page {
          size: A4;
          margin: 20mm;
        }

        .a4-size {
          width: 210mm;
          min-height: 297mm;
          padding: 20mm;
          margin: auto;
          background: white;
          border: 1px solid #d3d3d3;
        }

        @media print {
          body,
          html,
          .a4-size {
            width: 210mm;
            height: 297mm;
          }
        }
      `}</style>
        </div>
    );
};

export default ShowInvoice;
