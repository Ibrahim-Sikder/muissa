"use client";

import { Button} from "@mui/material";
import { useGetDiscountForPaymentQuery } from "@/redux/api/paymentApi";


const MembershipDiscountData = () => {
    const { data: discountData, isLoading } = useGetDiscountForPaymentQuery({});

    const originalPrice = 500;
    const discountedPrice = originalPrice - discountData?.discount_amount;
    const convertedOriginalPrice = convertToBengaliNumerals(originalPrice);
    const convertedDiscountedPrice = convertToBengaliNumerals(discountedPrice);

    function convertToBengaliNumerals(num: number): string {
        const bengaliNumerals = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
        return num
            .toString()
            .split("")
            .map((digit) => bengaliNumerals[Number(digit)])
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
                ফি মাত্র <del className="mx-2">{convertedOriginalPrice}</del>{" "}
                {convertedDiscountedPrice} টাকা।
            </Button>
        </>
    );
};

export default MembershipDiscountData;
