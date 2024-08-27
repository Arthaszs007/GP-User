import React from "react";
import Navigation from "@/components/public/navigation";
import Footer from "@/components/public/footer";
import { SearchModal } from "@/components/modal/modal_serach";

import ErrorToast from "@/components/public/errorToast";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row">
      <div className="fixed top-0 h-screen z-10">
        <Navigation />
      </div>
      <div className="flex flex-col w-full md:items-start ml-[14rem] bg-gray-100 lg:items-center">
        <div className=" pt-10 px-[4rem] w-[78rem] ">
          {children}
          <SearchModal />
          <ErrorToast />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
