import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import React, { ReactNode } from "react";
import ProfileSidebar from "./_components/ProfielSidebar/ProfileSidebar";
import Container from "@/components/ui/HomePage/Container/Container";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <Container>
        <div className="flex justify-between w-full ">
          <div className="flex gap-10 w-full  mt-10 ">
            <ProfileSidebar />
            {children}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default layout;
