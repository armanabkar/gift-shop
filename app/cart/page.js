"use client";
import useCart from "../store/useCart";
import Button from "../components/Button";
import useAuth from "../store/useAuth";
import Link from "next/link";
import CartItems from "../components/cartItems";

export default function Cart() {
  let cartItems = useCart((state) => state.cartItems);
  let resetCart = useCart((state) => state.resetCart);
  let removeItem = useCart((state) => state.removeItem);
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
          or{" "}
          <Link href={"/auth/login"} className="underline">
            Log In
          </Link>
        </p>
      )}
    </>
  );
}
