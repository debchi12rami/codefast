"use client";
import { signOut } from "next-auth/react";

const ButtonLogout = ({ extraStyle }) => {
  return (
    <button
      className={`btn bg-red-500 hover:bg-red-600 text-white  px-6 py-2 rounded-lg transition-colors font-extrabold ${extraStyle}`}
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Logout
    </button>
  );
}

export default ButtonLogout;
