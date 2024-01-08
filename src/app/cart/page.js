"use client";
import { useEffect } from "react";
import useCartStore from "../store/useCartStore";

export default function Cart() {
  let cartItems = useCartStore((state) => state.cartItems);
  let resetCart = useCartStore((state) => state.resetCart);
  let removeItem = useCartStore((state) => state.removeItem);

  const cartList = cartItems.map((item, i) => (
    <p
      className="rounded border-gray-300 bg-gray-100 dark:bg-neutral-800/30 dark:border-neutral-800 hover:bg-gray-300 hover:dark:bg-neutral-700 px-5 py-4 transition-colors text-left flex justify-between"
      key={i}
    >
      <span>{`${item.amount}$ ${item.name} Gift`}</span>
      <button
        className="text-rose-600 font-extrabold"
        onClick={() => removeItem(item)}
      >
        X
      </button>
    </p>
  ));

  return (
    <>
      <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {cartList}
      </div>
      <button
        className="rounded border border-gray-300 bg-gray-100 dark:bg-neutral-800/30 dark:border-neutral-800 hover:bg-gray-300 hover:dark:bg-neutral-700 px-5 py-4 transition-colors text-center mt-8"
        onClick={resetCart}
      >
        Submit
      </button>
    </>
  );
}
