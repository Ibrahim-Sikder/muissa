import { USER_ROLE } from "@/constant/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type userRole = keyof typeof USER_ROLE;

export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

export type UserRole = keyof typeof USER_ROLE;

export interface DrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: DrawerItem[];
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  success: boolean;
  message: string;
  error: any;
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export const role = ["As BUSINESS OWNER", "AS A INVESTOR"];
export const adminRole = ["Admin"];

export const supportServices = [
  {
    category: "প্রোডাক্ট সাপোর্ট",
    subcategories: ["Product Issues", "Product Warranty"],
  },
  {
    category: "বিক্রয় সাপোর্ট",
    subcategories: ["Sales Queries", "Sales Follow-up"],
  },
  {
    category: "মার্কেটিং সাপোর্ট",
    subcategories: ["Campaign Management", "Market Research"],
  },
  {
    category: "ডেলিভারি সাপোর্ট",
    subcategories: ["Shipping", "Delivery Tracking"],
  },
  {
    category: "আইটি সাপোর্ট",
    subcategories: ["Technical Support", "System Maintenance"],
  },
  {
    category: "ফান্ডিং সাপোর্ট",
    subcategories: ["Financial Advice", "Investment"],
  },
];

export const support_items = [
  { title: 'ইনভেস্টমেন্ট সাপোর্ট' },
  { title: 'সেলস সাপোর্ট' },
  { title: 'মার্কেটিং সাপোর্ট' },
  { title: 'ফান্ডিং সাপোর্ট' },
  { title: 'আইটি সাপোর্ট' },
  { title: 'প্রোডাক্ট সাপোর্ট' },
  { title: 'ডেলিভারি সাপোর্ট' },
];


const top100Films = [
  { title: 'The Shawshank Redemption' },
  { title: 'The Godfather' },
  // ... other films
];



type Option = {
  label: string;
  subCategories?: Option[];
};

export const subCategories: Option[] = [
  {
    label: "আইটি সাপোর্ট",
    subCategories: [
      { label: "হার্ডওয়্যার সাপোর্ট" },
      { label: "সফটওয়্যার সাপোর্ট" },
      { label: "নেটওয়ার্ক সাপোর্ট" },
      { label: "সাইবার সিকিউরিটি সাপোর্ট" },
      { label: "ডাটা ব্যাকআপ ও রিকভারি সাপোর্ট" },
    ],
  },
  {
    label: "ফান্ডিং সাপোর্ট",
    subCategories: [
      { label: "সরকারি অনুদান ও সহায়তা" },
      { label: "ব্যাংক ঋণ" },
      { label: "ভেঞ্চার ক্যাপিটাল" },
      { label: "এঞ্জেল ইনভেস্টর" },
      { label: "ক্রাউডফান্ডিং" },
    ],
  },
  {
    label: "মার্কেটিং সাপোর্ট",
    subCategories: [
      { label: "ব্র্যান্ডিং ও পজিশনিং" },
      { label: "বাজার গবেষণা ও বিশ্লেষণ" },
      { label: "বিজ্ঞাপন ও প্রচারণা" },
      { label: "ডিজিটাল মার্কেটিং" },
      { label: "কন্টেন্ট মার্কেটিং" },
    ],
  },
  {
    label: "ডেলিভারি সাপোর্ট",
    subCategories: [
      { label: "সরবরাহ চেইন ব্যবস্থাপনা" },
      { label: "লজিস্টিক সাপোর্ট" },
      { label: "কুরিয়ার সেবা" },
      { label: "ইনভেন্টরি ম্যানেজমেন্ট" },
      { label: "ডেলিভারি ট্র্যাকিং সিস্টেম" },
    ],
  },
  {
    label: "বিক্রয় সাপোর্ট",
    subCategories: [
      { label: "বিক্রয় কৌশল ও প্রশিক্ষণ" },
      { label: "ক্রেতা সম্পর্ক ব্যবস্থাপনা (CRM)" },
      { label: "বিক্রয় পূর্বানুমান ও পরিকল্পনা" },
      { label: "বিক্রয় ডেটা বিশ্লেষণ" },
      { label: "বিক্রয় প্রযুক্তি সমাধান" },
    ],
  },
  {
    label: "প্রোডাক্ট সাপোর্ট",
    subCategories: [
      { label: "পণ্য উন্নয়ন ও ডিজাইন" },
      { label: "পণ্যের মান নিয়ন্ত্রণ" },
      { label: "প্রোডাক্ট লাইফসাইকেল ম্যানেজমেন্ট" },
      { label: "গ্রাহক প্রতিক্রিয়া ও সমীক্ষা" },
      { label: "পণ্য পুনর্বিবেচনা ও আপগ্রেড" },
    ],
  },
];

export const subscriptions = ["1 year subscription fee", "2 year subscription fee"];

export type TServices = {
  _id: string,
  category: string,
  short_description: string,
  priority: number, 
  title:string,
   description:string, 
   sub_category:string, 
   createdAt:string, 
   service_image:string,
}
