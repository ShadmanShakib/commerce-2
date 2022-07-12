import React from "react";
import { Footer, Navbar } from "components/common";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
