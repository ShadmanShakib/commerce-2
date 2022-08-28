import React from "react";
import { map } from "underscore";
import { Modal, ModalProps } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useUI } from "utils/hooks";
import { Button } from "components/ui";
import { Loader } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "services/product";
import Image from "next/image";
import "swiper/css";
export default function ModalView({ id }: { id: string }) {
  const { isModal, closeModal, productId } = useUI();

  const { isLoading, error, data } = useQuery(
    ["product", productId],
    async () => {
      const data = await getProduct(productId);
      return data;
    }
  );

  if (isLoading)
    return (
      <Modal
        overflow="inside"
        centered
        withCloseButton={false}
        padding={0}
        size={800}
        opened={isModal}
        onClose={closeModal}
      >
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      </Modal>
    );
  if (data) {
    const { title, images, discription, price } = data.data.attributes;

    return (
      <Modal
        overflow="inside"
        centered
        withCloseButton={false}
        padding={0}
        size={800}
        className=""
        opened={isModal}
        onClose={closeModal}
      >
        <div className=" flex ">
          <Carousel
            slideSize={"100%"}
            mx="auto"
            align="start"
            dragFree
            slideGap={0}
          >
            {map(images.data, (image) => {
              return (
                <Carousel.Slide className="relative" key={image.id}>
                  <Image
                    className=""
                    src={image.attributes.url}
                    height={400}
                    width={400}
                    alt={image.attributes.alternativeText}
                  />
                </Carousel.Slide>
              );
            })}
          </Carousel>

          <div className="w-full">
            <h1 className="text-lg">{title}</h1>
            <p>{price}</p>
            <Button varient="dark">
              <span>Add to cart</span>
            </Button>
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
