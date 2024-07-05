import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import React, { ReactNode } from "react";
import ProfileSidebar from "./_components/ProfielSidebar/ProfileSidebar";
import Container from "@/components/ui/HomePage/Container/Container";
import { Suspense } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense>
      <Header />

      <Container>
        <div className="flex flex-col lg:flex-row justify mt-10 gap-10  ">
          <div className="lg:col-span-3">
            <div className="md:sticky md:top-28">
              <ProfileSidebar />
            </div>
          </div>
          <div className="lg:col-span-9 ">{children}</div>
        </div>
      </Container>
      <Footer />
    </Suspense>


  );
};

export default layout;
