import React from "react";

export default function QuantityInput() {
  return (
    <div className="quantity-input border-color-border mr-2.5 flex h-[46px] rounded border lg:mr-5 lg:flex ">
      <button
        className="quantity-input__button flex h-[46px] w-[46px] items-center justify-center"
        type="button"
        aria-label="Decrease quantity of Flower Tote Bag by one"
        data-quantity-selector="decrease"
        data-product-id="6562491105344"
      >
        <svg
          className="h-[12px] w-[12px]"
          fill="currentColor"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M376 232H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h368c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"></path>
        </svg>
      </button>
      <input
        className=" w-10 shrink flex-grow appearance-none text-center"
        type="number"
        name="quantity"
        value="1"
        min="1"
        aria-label="Product quantity"
        data-quantity-input=""
        data-product-id="6562491105344"
      />
      <button
        className="quantity-input__button flex h-[46px] w-[46px] items-center justify-center"
        type="button"
        aria-label="Increase quantity of Flower Tote Bag by one"
        data-quantity-selector="increase"
        data-product-id="6562491105344"
      >
        <svg
          className="h-[12px] w-[12px]"
          fill="currentColor"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M376 232H216V72c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h160v160c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V280h160c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"></path>
        </svg>
      </button>
    </div>
  );
}
