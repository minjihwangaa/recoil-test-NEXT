// Standard
import React, { ReactNode } from "react";

// Third-party

//UI
import { poppins } from "../styles/font";

interface RootLayoutProps {
  /** Root layout children */
  children: ReactNode;
}

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;
  return (
    <main
      className={`w-full h-full flex flex-col pt-[72px] font-poppins ${poppins.variable}`}
    >
      {children}
    </main>
  );
};
export default RootLayout;
