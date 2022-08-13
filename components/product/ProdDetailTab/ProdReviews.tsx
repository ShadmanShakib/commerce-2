import React from "react";
import { BiStar } from "react-icons/bi";
import { Button } from "components/ui";
import WriteReview from "./WriteReview";
import { useUI } from "utils/hooks";
export default function ProdReviews() {
  const { toggleWritingReview, isWritingReview } = useUI();
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
        <Button onClick={toggleWritingReview} varient="outline">
          Write a Review
        </Button>
      </div>
      {isWritingReview && <WriteReview />}
    </article>
  );
}
