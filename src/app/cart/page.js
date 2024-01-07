export default function Cart() {
  return (
    <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <p className="rounded border-gray-300 bg-gray-100 dark:bg-neutral-800/30 dark:border-neutral-700 hover:bg-gray-300 hover:dark:bg-neutral-700 px-5 py-4 transition-colors text-left flex justify-between">
        <span>30$ PlayStation Gift</span>
        <span className="text-rose-600 font-extrabold ">X</span>
      </p>
      <p className="rounded border-gray-300 bg-gray-100 dark:bg-neutral-800/30 dark:border-neutral-700 hover:bg-gray-300 hover:dark:bg-neutral-700 px-5 py-4 transition-colors text-left flex justify-between">
        <span>30$ Xbox Gift</span>
        <span className="text-rose-600 font-extrabold ">X</span>
      </p>
      <p className="rounded border-gray-300 bg-gray-100 dark:bg-neutral-800/30 dark:border-neutral-700 hover:bg-gray-300 hover:dark:bg-neutral-700 px-5 py-4 transition-colors text-left flex justify-between">
        <span>20$ Apple Gift</span>
        <span className="text-rose-600 font-extrabold ">X</span>
      </p>
      <button className="rounded border-gray-300 bg-gray-100 dark:bg-neutral-800/30 dark:border-neutral-700 hover:bg-gray-300 hover:dark:bg-neutral-700 px-5 py-4 transition-colors text-left">
        Submit
      </button>
    </div>
  );
}
