"use client";

import { useSession } from "next-auth/react";
import React from "react";

const Nav = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="w-full bg-red-400 px-32 py-6 flex justify-between items-center">
      <h1 className="text-4xl font-semibold">Logo</h1>
      <div className=""></div>
    </div>
  );
};

export default Nav;
