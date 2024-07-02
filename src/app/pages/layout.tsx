import React from "react";
import Navigation from "@/components/public/navigation";
import Footer from "@/components/public/footer";
import { SearchModal } from "@/components/modal/modal_serach";

import ErrorToast from "@/components/public/errorToast";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row">
      <div className="sticky top-0 h-screen w-58 ">
        <Navigation />
      </div>
      <div className="flex flex-col w-full items-center bg-gray-100">
        <div className=" pt-10 w-[70rem] ">
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
