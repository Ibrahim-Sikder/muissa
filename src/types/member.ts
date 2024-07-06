

export type TPaymentData = {
    user: {
        name: string;
        street_address:string,
        phone:string,
        auth:string,
    };
    _id:string,
    member_type: string;
    subscription_for: string;
    amount: number;
    discount_amount: number;
    transaction_id: string;
    account_number: string;
    payment_status: string;
    total_amount: string,
    createdAt:string,
    invoice_no:string,
  
}
