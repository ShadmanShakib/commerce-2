import React from "react";

export default function WriteReview() {
  return (
    <div className="flex flex-col">
      <h1>Write a review</h1>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="" />
      <label htmlFor="name">Email</label>
      <input type="text" name="" id="" />
      <label htmlFor="name">Review</label>
      <textarea name="" id=""></textarea>
      <label htmlFor="title">Reviews title</label>
      <input type="text" name="" id="" />
      <label htmlFor="body_Review">Body of Review</label>
      <textarea name="" id=""></textarea>
      <button>Submit</button>
    </div>
  );
}
