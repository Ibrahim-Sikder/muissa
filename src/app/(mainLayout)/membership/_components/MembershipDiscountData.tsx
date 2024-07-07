"use client";

import { Button } from "@mui/material";
import { useGetDiscountForPaymentQuery, useGetMemeberFeeQuery } from "@/redux/api/paymentApi";


const MembershipDiscountData = () => {
    const { data: memberFee } = useGetMemeberFeeQuery({});
    const { data: discountData, isLoading } = useGetDiscountForPaymentQuery({});
    console.log(discountData)

    const membershipFeeWithOutDiscount = memberFee?.membership_fee
    let originalPrice = Number(memberFee?.membership_fee) || 0;
    let discountedPrice = Number(discountData?.discount_amount)
    console.log(discountedPrice)

    if (discountData?.discount_status === 'Flat') {
        originalPrice = originalPrice - discountedPrice;

    } else if (discountData?.discount_status === 'Percentage') {
        originalPrice = originalPrice - (originalPrice * discountedPrice) / 100;
    }

    const convertedOriginalPrice = convertToBengaliNumerals(originalPrice);
    const convertDiscountPrice = convertToBengaliNumerals(discountedPrice);
    const convertOriginalPriceWithoutDiscount = convertToBengaliNumerals(membershipFeeWithOutDiscount);
    const convertMembershipWithOutDiscountPrice = convertToBengaliNumerals(membershipFeeWithOutDiscount);



    function convertToBengaliNumerals(num: number): string {
        const bengaliNumerals = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
        return num
            ?.toString()
            ?.split("")
            ?.map((digit) => bengaliNumerals[Number(digit)])
            .join("");
    }



    return (
        <>
            <Button
                sx={{
                    marginTop: "10px",
                    fontSize: {
                        sm: "20px",
                        md: "20px",
                        lg: "30px",
                    },
                }}
            >
                ফি মাত্র
                <span className="mx-2 block">
                    {
                        discountedPrice ? <del>{convertOriginalPriceWithoutDiscount}</del> : ''
                    }

                    {

                        discountedPrice ? <span> {convertedOriginalPrice}</span> : <span>{convertMembershipWithOutDiscountPrice}</span>

                    }</span>


                টাকা।

            </Button>
        </>
    );
};

export default MembershipDiscountData;
