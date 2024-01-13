export default function CartItems({ cartItems, removeItem }) {
  return (
    <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-3">
      {cartItems.map((item, i) => (
        <p
          className="rounded border border border-gray-300 p-3 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 text-left flex justify-between"
          key={i}
        >
          <span>
            <span className="font-semibold">{`${item.amount}$ `}</span>
            <span>{`${item.name} Gift`}</span>
          </span>
          <button
            className="text-rose-400 font-extrabold hover:text-rose-500"
            onClick={() => removeItem(item)}
          >
            X
          </button>
        </p>
      ))}
    </div>
  );
}
