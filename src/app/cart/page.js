"use client";
import useCartStore from "../store/useCartStore";
import CartItems from "../components/cartItems";

export default function Cart() {
  let cartItems = useCartStore((state) => state.cartItems);
  let resetCart = useCartStore((state) => state.resetCart);
  let removeItem = useCartStore((state) => state.removeItem);

  return (
    <>
      <CartItems cartItems={cartItems} removeItem={removeItem} />
      <button
        className="rounded border border-gray-300 bg-gray-100 dark:bg-neutral-800/30 dark:border-neutral-800 hover:bg-gray-300 hover:dark:bg-neutral-700 px-5 py-4 transition-colors text-center mt-8"
        onClick={resetCart}
      >
        Submit
      </button>
    </>
  );
}
