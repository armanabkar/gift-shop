"use client";
import useCartStore from "../store/useCartStore";
import CartItems from "../components/cartItems";
import Button from "../components/Button";
import useAuth from "@/app/store/useAuth";
import Link from "next/link";

export default function Cart() {
  let cartItems = useCartStore((state) => state.cartItems);
  let resetCart = useCartStore((state) => state.resetCart);
  let removeItem = useCartStore((state) => state.removeItem);
  const isLogIn = useAuth((state) => state.isLogIn);

  return (
    <>
      {isLogIn ? (
        <>
          <CartItems cartItems={cartItems} removeItem={removeItem} />
          {!(cartItems.length === 0) && (
            <Button action={resetCart} label={"Submit"} />
          )}
        </>
      ) : (
        <p className="text-xl font-semibold">
          Please{" "}
          <Link href={"/auth/register"} className="underline">
            Register
          </Link>{" "}
          of{" "}
          <Link href={"/auth/login"} className="underline">
            Log In
          </Link>
        </p>
      )}
    </>
  );
}
