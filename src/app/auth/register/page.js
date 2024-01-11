"use client";
import Button from "@/app/components/Button";
import TextInput from "@/app/components/TextInput";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useAuth from "../../store/useAuth";
import HorizontalLine from "@/app/components/horizontalLine";

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
      <HorizontalLine />
      <p className="text-blue-800 font-semibold dark:text-blue-600">
        <Link href={"/auth/login"}>Already Have An Account?</Link>
      </p>
    </form>
  );
}
