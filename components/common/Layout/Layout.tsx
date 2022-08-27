import React from "react";
import { Footer, Navbar } from "components/common";
import { CartView, Modal } from "components/ui";
function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <main>
      <Navbar />
      <CartView />
      <Modal />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
