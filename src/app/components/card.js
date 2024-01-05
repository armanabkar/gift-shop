import Image from "next/image";

export default function Card({ gift, amounts }) {
  const capitalizeFirstWord = (word) => word[0].toUpperCase() + word.slice(1);

  return (
    <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <p className={`mb-3 text-2xl font-semibold`}>
        {capitalizeFirstWord(gift)}
      </p>

      <Image
        src={`/images/${gift}.webp`}
        alt={gift}
        className="rounded-lg mb-3"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        quality={80}
      />

      <div className="grid grid-cols-4 gap-3 text-center">
        {amounts.map((amount, i) => (
          <p
            className="border rounded border-gray-300 p-px bg-gray-100 dark:bg-neutral-800/30 dark:border-neutral-700 hover:bg-gray-300 hover:dark:bg-neutral-700"
            key={i}
          >
            {amount}$
          </p>
        ))}
      </div>
    </div>
  );
}
