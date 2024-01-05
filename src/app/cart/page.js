export default function Cart() {
  return (
    <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <p className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        30$ PlayStation Gift Card
      </p>
      <p className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        30$ Xbox Gift Card
      </p>
      <p className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        20$ Apple Gift Card
      </p>
      <button className="group rounded-lg border border-gray-300 dark:border-neutral-700 px-5 py-4 transition-colors hover:bg-gray-300 hover:dark:border-neutral-700 text-left">
        Submit
      </button>
    </div>
  );
}
