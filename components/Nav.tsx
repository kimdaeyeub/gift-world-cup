"use client";

import { BuiltInProviderType } from "next-auth/providers/index";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
  signOut,
  useSession,
} from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState<Record<
    LiteralUnion<string>,
    ClientSafeProvider
  > | null>(null);

  const onClickLoginBtn = () => {
    signIn(providers?.google.id);
  };

  const onClickLogoutBtn = () => {
    signOut();
  };

  const onClickGoHome = () => {};
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);
  return (
    <div className="w-full px-32 py-6 flex justify-between items-center">
      <h1
        onClick={onClickGoHome}
        className="text-4xl font-semibold cursor-pointer"
      >
        Logo
      </h1>
      <div className="flex space-x-6 items-center justify-center">
        {session?.user ? (
          <>
            <span className="cursor-pointer">선물 추가하기</span>
            <span className="cursor-pointer">선물 월드컵 만들기</span>
            <span>선물 월드컵</span>
            <button onClick={onClickLogoutBtn}>로그아웃</button>
            <Image
              src={session.user.image!}
              alt="avatar_url"
              width={200}
              height={200}
              className="w-12 h-12 rounded-full"
            />
          </>
        ) : (
          <button onClick={onClickLoginBtn}>로그인</button>
        )}
      </div>
    </div>
  );
};

export default Nav;
