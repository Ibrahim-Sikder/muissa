"use client";

import React, { useRef } from "react";
import Container from "@/components/ui/HomePage/Container/Container";
import { Button, Divider } from "@mui/material";
import Image from "next/image";

import logo from "../../../../../../assets/logo/facebook-profile.png";

import { useParams } from "next/navigation";
import { useGetSinglePaymentQuery } from "@/redux/api/paymentApi";
import dayjs from "dayjs";
import ReactToPrint from "react-to-print";
import Loader from "@/components/Loader";
import { toast } from "sonner";
import { getCookie } from "@/helpers/Cookies";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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

const ShowInvoice = () => {
  const { id } = useParams<{ id: string }>();
  const invoiceRef = useRef<HTMLDivElement>(null);

  const token = getCookie("mui-token");

  const {
    data: paymentData,
    error,
    isLoading,
  } = useGetSinglePaymentQuery({ id, token });

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


  const handleDownload = async () => {
    const invoiceElement = invoiceRef.current;

    if (!invoiceElement) {
      return;
    }


    await new Promise(resolve => setTimeout(resolve, 100));

    const canvas = await html2canvas(invoiceElement);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
    pdf.save('invoice.pdf');
  };

  console.log(paymentData)
  const memberShipFee = Number(Number(paymentData?.amount) + Number(paymentData?.discount_amount))

  return (
    <div className="min-h-screen ">
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
          <Button
            variant='outlined'
            sx={{ fontSize: '12px', width: '140px', padding: '5px 3px' }}
            onClick={handleDownload}
          >
            Download Invoice
          </Button>
        </div>
        <div ref={invoiceRef}>
          <div
            ref={componentRef}
            id="invoice"
            className="bg-white rounded-lg a4-size flex flex-col justify-between "
          >
            <div>
              <h1 className="text-[40px]">Invoice</h1>
              <div className="flex justify-between items-center mb-10">
                <div>
                  <div className="mt-8 text-sm">
                  
                    <div className="flex justify-between w-[420px] mb-3">
                      <div className="flex flex-col space-y-">
                        <span>Company Name</span>
                        <span>E-mail</span>
                        <span>Phone</span>
                        <span>Website</span>
                        <span>Address</span>
                      </div>
                      <div className="flex flex-col ">
                        <strong>:  Muissa Business Consulting
                          Ltd</strong>
                        <strong>: info@muissa.com</strong>
                        <strong>: 01337486528</strong>
                        <strong>: www.muissa.com</strong>
                        <strong>: House-08, Road-07, Block-C, Banasree,Dhaka-1219</strong>
                      </div>
                    </div>

                  </div>


                </div>
                <Image
                  alt="logo"
                  src={logo}
                  className="w-44 h-44 object-fill"
                />
              </div>
              <Divider />
              <div className="flex justify-between mt-8">
                <div className=" text-sm">
                  <h4 className="text-xl font-semibold mb-2">Bill To</h4>
                  <div className="flex justify-between w-[350px] mb-3">
                    <div className="flex flex-col space-y-">
                      <p>Client Name</p>
                      <span>E-mail</span>
                      <span>Phone</span>
                      <span>Address</span>
                    </div>
                    <div className="flex flex-col ">
                      <strong>: {paymentData?.user?.name}</strong>
                      <strong>: {paymentData?.user?.email}</strong>
                      <strong>: {paymentData?.user?.phone}</strong>
                      <strong>: {paymentData?.user?.street_address},{" "}
                        {paymentData?.user?.city} , {paymentData?.user?.country} </strong>
                    </div>
                  </div>

                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <div className="flex flex-col space-y-">

                      <span className="text-xl font-semibold ">Invoice No</span>
                      <span>Invoice Date</span>
                    </div>
                    <div className="flex flex-col ">
                      <strong className="text-xl font-semibold ">:{paymentData?.invoice_no}</strong>
        
                      <strong>:{dayjs(paymentData?.createdAt).format("DD-MM-YY")}</strong>
                    </div>
                  </div>


                </div>
              </div>
              <div className="mt-8">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead className="bg-gray-200 text-sm ">
                    <tr>
                      <th className="px-4 py-2 border"> Subscription</th>
                      <th className="px-4 py-2 border">Transiton ID </th>
                      <th className="px-4 py-2 border">Payment Number </th>
                      <th className="px-4 py-2 border">Membership Fee </th>
                      <th className="px-4 py-2 border">Discount</th>
                      <th className="px-4 py-2 border">Payment</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr className="text-sm">
                      <td className="px-4 py-2 border">
                        {" "}
                        {paymentData?.subscription_for}
                      </td>
                      <td className="px-4 py-2 border">
                        {paymentData?.transaction_id}
                      </td>
                      <td className="px-4 py-2 border">{paymentData?.account_number}</td>
                      <td className="px-4 py-2 border">{memberShipFee}</td>
                      <td className="px-4 py-2 border">{paymentData?.discount_amount}</td>
                      <td className="px-4 py-2 border">
                        {paymentData?.amount}
                      </td>
                      
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex flex-end justify-end mt-8 text-sm">
                <div>
                  <div className="flex justify-between w-[300px] mb-3">
                    <div className="flex flex-col space-y-2">
                      <strong>Subtotal</strong>
                      <span>Discount</span>
                      <span>Amount paid</span>
                    </div>
                    <div className="flex flex-col space-y-2 text-right">
                      <strong>: {paymentData?.amount}</strong>
                      <strong>: {paymentData?.discount_amount}</strong>
                      <strong>: {paymentData?.amount}</strong>
                    </div>
                  </div>
                  <Divider />
                </div>
              </div>
              {/* <div className="flex text-sm mt-8 w-full border p-3">
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
              </div> */}
            </div>

            <div className="w-[630px] mx-auto flex justify-between mt-8">
              <div className="text-center">
                <Divider />
                <strong>Client Signature</strong>
              </div>
              <div className="text-center">
                <Divider />
                <strong>Company Signature</strong>
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
          padding: 10mm;
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
