import { ImagesTypes } from "./Images.types";
export interface product {
  id: number;
  attributes: {
    title: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    cost: string;
    description: string;
    compare_price: string;
    images: {
      data: ImagesTypes[];
    };
  };
}
