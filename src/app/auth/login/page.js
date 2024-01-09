import Button from "@/app/components/Button";
import Link from "next/link";
import TextInput from "@/app/components/TextInput";

export default function LogIn() {
  return (
    <form className="max-w-sm mx-auto mb-20 sm:mb-36">
      <TextInput
        name={"email"}
        label={"Your Email"}
        placeholder={"example@mail.com"}
        type={"email"}
      />
      <TextInput
        name={"password"}
        label={"Your Password"}
        placeholder={""}
        type={"password"}
      />
      {/* <Button label={"Register"} action={() => {}} /> */}
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Log In
      </button>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <p className="text-center text-blue-800 font-semibold dark:text-blue-600">
        <Link href={"/auth/register"}>{"Don't Have An Account Yet?"}</Link>
      </p>
    </form>
  );
}
