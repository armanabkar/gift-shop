import Image from "next/image";

export default function Card({ gift }) {
  const capitalizeFirstWord = (word) => word[0].toUpperCase() + word.slice(1);

  return (
    <p className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {capitalizeFirstWord(gift)}
      </h2>
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
        <span className="border rounded border-gray-300 p-px bg-gray-100">
          5$
        </span>
        <span className="border rounded border-gray-300 p-px bg-gray-100">
          10$
        </span>
        <span className="border rounded border-gray-300 p-px bg-gray-100">
          15$
        </span>
        <span className="border rounded border-gray-300 p-px bg-gray-100">
          20$
        </span>
        <span className="border rounded border-gray-300 p-px bg-gray-100">
          30$
        </span>
        <span className="border rounded border-gray-300 p-px bg-gray-100">
          50$
        </span>
        <span className="border rounded border-gray-300 p-px bg-gray-100">
          70$
        </span>
        <span className="border rounded border-gray-300 p-px bg-gray-100">
          100$
        </span>
      </div>
    </p>
  );
}
