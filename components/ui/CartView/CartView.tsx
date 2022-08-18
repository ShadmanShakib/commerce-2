import React from "react";
import { Drawer, Button } from "@mantine/core";
import { useUI } from "utils/hooks";
import { getProducts } from "services";
const CartView = () => {
  const { isDrawerOpen, closeDrawer } = useUI();
  const handleClick = async () => {};
  return (
    <Drawer
      position="right"
      opened={isDrawerOpen}
      onClose={closeDrawer}
      title="Cart"
    >
      <div>
        <h1>Hello World</h1>
        <Button className="bg-black text-white" onClick={getProducts}>
          Products
        </Button>
      </div>
    </Drawer>
  );
};

export default CartView;
