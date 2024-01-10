"use client";
import Button from "@/app/components/Button";
import Users from "@/app/data/users";
import { useState, useEffect } from "react";
import useAuth from "@/app/store/useAuth";
import { useRouter } from "next/navigation";

export default function Profile({ params }) {
  const [email, setEmail] = useState("");
  const [previousPurchases, setPreviousPurchases] = useState([]);
  const router = useRouter();
  const logOut = useAuth((state) => state.logOut);
  const isLogIn = useAuth((state) => state.isLogIn);

  useEffect(() => {
    if (!isLogIn) {
      router.push("/");
    }
  }, [router, isLogIn]);

  useEffect(() => {
    const user = Users.find((u) => u.id === params.id);
    setEmail(user.email);
    setPreviousPurchases(user.previousPurchases);
  }, [params]);

  const logOutPressed = () => {
    logOut();
    router.push("/");
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-medium">{email}</h1>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      {previousPurchases.map((gift, i) => {
        return (
          <div key={i} className="p-3">
            <div>
              <p></p>
              <p className="font-medium text-xl">{`${gift.amount}$ ${gift.name}`}</p>
              <p className="font-mono border rounded border-gray-300 p-px bg-gray-100 dark:bg-neutral-800/30 dark:border-neutral-700 hover:bg-gray-300 hover:dark:bg-neutral-700">
                {gift.code}
              </p>
            </div>
          </div>
        );
      })}
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Button label={"Log Out"} action={logOutPressed} />
    </div>
  );
}
