import React from "react";
import { Modal, ModalProps } from "@mantine/core";
import { useUI } from "utils/hooks";
export default function ModalView() {
  const { isModal, closeModal } = useUI();
  return (
    <Modal opened={isModal} onClose={closeModal}>
      <div>Hello world</div>
    </Modal>
  );
}
