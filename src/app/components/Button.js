export default function Button({ label, action }) {
  return (
    <button
      type="submit"
      className="text-white bg-black hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:text-black dark:bg-white dark:hover:bg-slate-200 dark:focus:ring-slate-800 mt-8"
      onClick={action}
    >
      {label}
    </button>
  );
}
