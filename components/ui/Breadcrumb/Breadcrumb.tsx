import React from "react";

export default function Breadcrumb() {
  return (
    <div className="-mx-4 flex items-center justify-center">
      <div className="sf-breadcrumb__nav flex items-center">
        <a className="mr-2" title="Back to the home page">
          Home
        </a>

        <span aria-hidden="true" className="sf__breadcrumb-separator py-2">
          <svg
            className="h-[12px] w-[12px]"
            fill="currentColor"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
          >
            <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
          </svg>
        </span>

        <a className="mr-2">Featured Product - Print</a>

        <span aria-hidden="true" className="sf__breadcrumb-separator py-2">
          <svg
            className="h-[12px] w-[12px]"
            fill="currentColor"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
          >
            <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
          </svg>
        </span>
        <span className=" p-4">Flower Tote Bag</span>
      </div>
    </div>
  );
}
