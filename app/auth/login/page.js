"use client";
import { useRouter } from "next/navigation";
import Button from "@/app/components/Button";
import Link from "next/link";
import TextInput from "@/app/components/TextInput";
import useAuth from "../../store/useAuth";
import HorizontalLine from "@/app/components/horizontalLine";

export default function LogIn() {
  const router = useRouter();
  let logIn = useAuth((state) => state.logIn);

  const logInPressed = (e) => {
    e.preventDefault();
    logIn("Arman", "arman@mail.com");
    router.push("/");
  };

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
      <Button label={"Log In"} action={logInPressed} />
      <HorizontalLine />
      <p className="text-blue-800 font-semibold dark:text-blue-600">
        <Link href={"/auth/register"}>{"Don't Have An Account Yet?"}</Link>
      </p>
    </form>
  );
}
