"use client";
import { signOut } from "next-auth/react";

const ButtonLogout = ({ extraStyle }) => {
  return (
    <button
      className={`btn bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-lg transition-colors ${extraStyle}`}
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Logout yoo
    </button>
  );
}

export default ButtonLogout;
