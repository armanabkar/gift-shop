import Image from "next/image";

export default function Card({ gift }) {
  const capitalizeFirstWord = (word) => word[0].toUpperCase() + word.slice(1);

  return (
    <a
      href=""
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {capitalizeFirstWord(gift)}
      </h2>
      <Image
        src={`/images/${gift}.webp`}
        alt={gift}
        className="rounded-lg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        quality={80}
      />
    </a>
  );
}
