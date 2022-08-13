import React from "react";
import { Input, Button } from "components/ui";
export default function WriteReview() {
  return (
    <div className="flex flex-col">
      <h1>Write a review</h1>
      <Input
        name="name"
        label="Name"
        type="text"
        placeholder="Enter you name"
      />
      <Input
        name="email"
        label="Email"
        type="text"
        placeholder="jhon.smith@example.com"
      />
      <label className="mb-1" htmlFor="name">
        Review
      </label>
      <textarea
        className="mb-2 rounded-sm px-2 py-2 outline-none ring-1 ring-gray-300 focus:ring-black"
        name=""
        id=""
      ></textarea>
      <Input
        name="reviewTitle"
        label="Review title"
        type="text"
        placeholder="Give your review a title"
      />
      <label className="mb-1" htmlFor="body_Review">
        Body of Review
      </label>
      <textarea
        rows={10}
        className="mb-2 rounded-sm px-2 py-2 outline-none ring-1 ring-gray-300 focus:ring-black"
        name="reviewBody"
        placeholder="Write your review here"
      ></textarea>
      <Button className="mt-3" varient="dark">
        Submit
      </Button>
    </div>
  );
}
