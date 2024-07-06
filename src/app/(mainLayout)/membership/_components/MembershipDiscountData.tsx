"use client";

import { Button } from "@mui/material";
import { useGetDiscountForPaymentQuery, useGetMemeberFeeQuery } from "@/redux/api/paymentApi";


const MembershipDiscountData = () => {
    const { data: memberFee } = useGetMemeberFeeQuery({});
    console.log('member fee', memberFee)
    const { data: discountData, isLoading } = useGetDiscountForPaymentQuery({});

    const originalPrice = memberFee?.membership_fee;
    const discountedPrice = originalPrice - discountData?.discount_amount;
    const convertedOriginalPrice = convertToBengaliNumerals(originalPrice);
    const convertedDiscountedPrice = convertToBengaliNumerals(discountedPrice);

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
                ফি মাত্র {
                    discountData ? <del className="mx-2">{discountData === 0 ? 12000 : convertedOriginalPrice}</del> : <span className="mx-2">{memberFee?.membership_fee}</span>
                }
                {convertedDiscountedPrice} টাকা।
            </Button>
        </>
    );
};

export default MembershipDiscountData;
