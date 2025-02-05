import CursorCustomize from "@/components/CursorCustomize/CursorCustomize";
import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import LandingPageProvider from "@/lib/LandingPageProvider";
import React, { ReactNode, Suspense } from "react";

const layout = ({ children }: { children: ReactNode }) => {

  
  return (
    <LandingPageProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        {children}
        <CursorCustomize/>
        <Footer />
      </Suspense>
    </LandingPageProvider>
  );
};

export default layout;
