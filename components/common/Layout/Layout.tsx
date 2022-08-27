import React from "react";
import { Footer, Navbar } from "components/common";
import { CartView, ModalView } from "components/ui";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      <CartView />
      <ModalView id="3" />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
