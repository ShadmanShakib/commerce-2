import React from "react";
import { Footer, Navbar } from "components/common";
import { Drawer, Button, Modal } from "@mantine/core";
import { useUI } from "utils/hooks";
function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <main>
      <Navbar />
      <Button onClick={() => setIsOpen(true)} className="bg-black">
        Open Drawer
      </Button>
      <Modal opened={isOpen} title="Cart" onClose={() => setIsOpen(false)}>
        <div>Hello drawer</div>
      </Modal>
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
