"use client";
import Button from "@/app/components/Button";
import TextInput from "@/app/components/TextInput";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useAuth from "@/app/store/useAuth";

export default function Register() {
  const router = useRouter();
  let logIn = useAuth((state) => state.logIn);

  const registerPressed = (e) => {
    e.preventDefault();
    logIn("Arman", "arman@mail.com");
    router.push("/");
  };

  return (
    <form className="max-w-sm mx-auto mb-20 sm:mb-36">
      <TextInput
        name={"name"}
        label={"Your Name"}
        placeholder={"Example"}
        type={"text"}
      />
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
      <Button label={"Register"} action={registerPressed} />
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <p className="text-center text-blue-800 font-semibold dark:text-blue-600">
        <Link href={"/auth/login"}>Already Have An Account?</Link>
      </p>
    </form>
  );
}
