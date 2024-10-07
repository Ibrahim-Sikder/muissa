/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Toaster } from "sonner";
import dynamic from "next/dynamic";
import MessageIcons from "@/components/Message/MessageIcons";
import Script from "next/script"; // use next/script for proper script management
import Head from "next/head";

const BackTopButton = dynamic(
  () => import("@/components/BackTopButton/BackTopButton"),
  {
    ssr: false,
  }
);

const hindiSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muissa Consulting | Home",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico.svg",
    shortcut: "/favicon.ico.svg",
    apple: "/favicon.ico.svg",
  },
  verification: {
    google: "Yx4A-4On_CHg-sggHL-sdmyUL2Kiw7cOSno1em-fshQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll="0">
      <Head>
        <meta name="google-site-verification" content="Yx4A-4On_CHg-sggHL-sdmyUL2Kiw7cOSno1em-fshQ" />
      </Head>
      {/* Google Analytics script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5311HCY79B"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5311HCY79B');
        `}
      </Script>
      
      <Providers>
        <body className={hindiSiliguri.className}>
          <Toaster position="bottom-right" richColors />
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          <MessageIcons />
        </body>
      </Providers>
    </html>
  );
}
