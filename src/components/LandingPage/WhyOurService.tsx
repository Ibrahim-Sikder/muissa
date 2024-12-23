import { Button } from "@mui/material";

export default function WhyOurService() {
  return (
    <div className=" bg-[#1C1C1C] flex items-center justify-center px-4 py-5 mt-[60px] ">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          কেন আমাদের সাথে আপনার যাত্রা শুরু করবেন ?
        </h1>

        <div className="space-y-6 text-gray-200">
          <p className="text-lg leading-relaxed">
            আপনার ব্যবসার উন্নতির জন্য আমাদের পরামর্শক ও বিনিয়োগ পরিষেবা গ্রহণ করুন। আমাদের বিশেষজ্ঞ দল আপনাকে সঠিক দিকনির্দেশনা এবং লাভজনক বিনিয়োগ সুযোগ প্রদান করবে। আমাদের সাথে আপনার ব্যবসার সাফল্যের যাত্রা শুরু করুন।
          </p>



          <p className="text-lg leading-relaxed">
            মুইসা আপনার আন্তর্জাতিক ব্যবসার যাত্রাকে সহজ এবং সফল করার জন্য প্রতিশ্রুতিবদ্ধ।
          </p>

          <p className="text-lg leading-relaxed">
            আমাদের বিশেষ সেবাসমূহ অন্তর্ভুক্ত:
          </p>
          <ul className="text-lg leading-relaxed list-disc list-inside text-left mx-auto text-gray-200">
            <li>ব্যবসায়িক ফান্ডিং এর জন্য প্রোপোজাল তৈরি এবং উপস্থাপনা</li>
            <li>ডিজিটাল মার্কেটিং স্ট্র্যাটেজি এবং বিজ্ঞাপন পরিকল্পনা</li>
            <li>আইটি পরিষেবা, যেমন ওয়েবসাইট উন্নয়ন এবং রক্ষণাবেক্ষণ</li>
            <li>ব্যবসার প্রয়োজন অনুযায়ী কাস্টমাইজড সল্যুশন প্রদান</li>
            <li>অভিজ্ঞ পরামর্শকদের সাথে সরাসরি কাজের সুযোগ</li>
          </ul>

          <p className="text-lg leading-relaxed">
            মুইসা আপনাকে আন্তর্জাতিক ব্যবসার জন্য সকল ধরনের সহায়তা প্রদান করতে প্রস্তুত। আপনার ব্যবসার প্রতিটি পর্যায়ে আমরা আছি আপনার সাথে।
          </p>
        </div>

        <Button
          sx={{
            backgroundColor: '#EF4444',
            '&:hover': {
              backgroundColor: 'darkred',
            },
            color: 'white',
            padding: '12px 32px',
            fontSize: '16px',
            borderRadius: '8px',
          }}
        >
          সদস্যপদ পান
        </Button>
      </div>
    </div>
  );
}
