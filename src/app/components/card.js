"use client";
import Image from "next/image";
import useCartStore from "../store/useCartStore";

export default function Card({ gift }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <p className={`mb-3 text-2xl font-semibold`}>{gift.name}</p>

      <Image
        src={`/images/${gift.image}.webp`}
        alt={gift.name}
        className="rounded-lg mb-3"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        quality={80}
      />

      <div className="grid grid-cols-4 gap-3 text-center">
        {gift.amounts.map((amount, i) => (
          <button
            className="border rounded border-gray-300 p-px bg-gray-100 dark:bg-neutral-800/30 dark:border-neutral-700 hover:bg-gray-300 hover:dark:bg-neutral-700"
            key={i}
            onClick={() => addToCart(gift, amount)}
          >
            {amount}$
          </button>
        ))}
      </div>
    </div>
  );
}
