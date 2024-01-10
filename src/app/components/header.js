"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useCartStore from "../store/useCartStore";
import useAuth from "../store/useAuth";

export default function Header() {
  const pathname = usePathname();
  const totalPrice = useCartStore((state) => state.totalPrice);
  const username = useAuth((state) => state.name);
  const isLogIn = useAuth((state) => state.isLogIn);

  return (
    <>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          href={pathname == "/cart" ? "/" : "/cart"}
        >
          {pathname == "/cart" ? "← Back" : `TOTAL: ${totalPrice}$`}
        </Link>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <p className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 font-semibold">
            {isLogIn ? (
              <Link
                href="/profile/[id]"
                as="/profile/301d9dbf"
              >{`Welcome, ${username}!`}</Link>
            ) : (
              <Link href={"/auth/register"}>Register</Link>
            )}
          </p>
        </div>
      </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="text-5xl py-44 font-bold">
          {pathname == "/cart"
            ? `TOTAL: ${totalPrice}$`
            : pathname == "/auth/register"
            ? "Register"
            : pathname == "/auth/login"
            ? "Log In"
            : pathname == "/profile/301d9dbf"
            ? username
            : "GIFT SHOP"}
        </h1>{" "}
      </div>
    </>
  );
}
