import React from "react";
import { BiStar } from "react-icons/bi";
import { Button } from "components/ui";
import WriteReview from "./WriteReview";
export default function ProdReviews() {
  return (
    <article>
      <h1 className="text-xl font-semibold">Customer Reviews</h1>
      <div className="flex items-center justify-between">
        <div className="flex">
          <BiStar size={20} />
          <BiStar />
          <BiStar />
          <BiStar />
          <BiStar />
        </div>
        <Button varient="outline">Write a Review</Button>
      </div>
      <WriteReview />
    </article>
  );
}
