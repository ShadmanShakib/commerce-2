import React from "react";
import { Drawer } from "@mantine/core";
import { useUI } from "utils/hooks";
const CartView = () => {
  const { isDrawerOpen, closeDrawer } = useUI();
  return (
    <Drawer
      position="right"
      opened={isDrawerOpen}
      onClose={closeDrawer}
      title="Cart"
    >
      <div>
        <h1>Hello World</h1>
      </div>
    </Drawer>
  );
};

export default CartView;
