"use client";
import useCartStore from "../store/useCartStore";
import CartItems from "../components/cartItems";
import Button from "../components/Button";

export default function Cart() {
  let cartItems = useCartStore((state) => state.cartItems);
  let resetCart = useCartStore((state) => state.resetCart);
  let removeItem = useCartStore((state) => state.removeItem);

  return (
    <>
      <CartItems cartItems={cartItems} removeItem={removeItem} />
      <Button action={resetCart} label={"Submit"} />
    </>
  );
}
