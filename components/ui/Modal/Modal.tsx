import React from "react";
import { map } from "underscore";
import { Modal, ModalProps } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useUI } from "utils/hooks";
import { Loader } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "services/product";
import Image from "next/image";
export default function ModalView({ id }: { id: string }) {
  const { isModal, closeModal } = useUI();

  const { isLoading, error, data } = useQuery(["product"], async () => {
    const data = await getProduct(id);
    return data;
  });

  if (isLoading)
    return (
      <Modal opened={isModal} onClose={closeModal}>
        <Loader />
      </Modal>
    );
  if (data) {
    const { title, images, discription } = data.data.attributes;
    const { name, alternativeText } = images.data[0].attributes;
    return (
      <Modal className="" opened={isModal} onClose={closeModal}>
        <div className="relative flex">
          <Carousel slideSize={"100%"} slideGap={0}>
            {map(images.data, (image) => {
              return (
                <Carousel.Slide key={image.id}>
                  <Image
                    className=""
                    src={image.attributes.name}
                    height={500}
                    width={500}
                    alt={alternativeText}
                  />
                </Carousel.Slide>
              );
            })}
          </Carousel>

          <div className="w-1/2">
            <h1>{title}</h1>
            <p>{discription}</p>
          </div>
        </div>
      </Modal>
    );
  }
  return (
    <Modal opened={isModal} onClose={closeModal}>
      <div>Something went wrong</div>
    </Modal>
  );
}
