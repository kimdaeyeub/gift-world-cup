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
import { Cute_Font } from "next/font/google";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const font = Cute_Font({ weight: "400", subsets: ["latin"] });

const Nav = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { data: session } = useSession();
  const [providers, setProviders] = useState<Record<
    LiteralUnion<string>,
    ClientSafeProvider
  > | null>(null);

  const onClickAvatarImage = () => {
    router.push("/profile");
  };

  const onClickLoginBtn = () => {
    signIn(providers?.google.id);
  };

  const onClickLogoutBtn = () => {
    signOut();
  };

  const onClickGoHome = () => {
    router.push("/");
  };

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);
  return (
    <div className="w-full px-32 py-4 flex justify-between items-center">
      <h1
        onClick={onClickGoHome}
        className="text-4xl font-semibold cursor-pointer"
      >
        Logo
      </h1>
      <div className="flex space-x-8 items-center justify-center text-xl font-poorStory">
        {session?.user ? (
          <>
            <div className="relative h-full">
              <Link href="/items">
                <span className="cursor-pointer">선물 조회하기</span>
              </Link>
              {pathName === "/items" && (
                <motion.div
                  layoutId="nav_under_bar"
                  className="w-14 h-1 absolute bg-slate-900 rounded-full top-full mt-2 m-auto left-0 right-0"
                />
              )}
            </div>
            <div className="relative">
              <Link href="/items/add">
                <span className="cursor-pointer">선물 추가하기</span>
              </Link>
              {pathName === "/items/add" && (
                <motion.div
                  layoutId="nav_under_bar"
                  className="w-14 h-1 bg-slate-900 rounded-full absolute top-full mt-2 m-auto left-0 right-0"
                />
              )}
            </div>
            <div className="relative">
              <Link href="/tournament/add">
                <span className="cursor-pointer">선물 월드컵 만들기</span>
              </Link>
              {pathName === "/tournament/add" && (
                <motion.div
                  layoutId="nav_under_bar"
                  className="w-14 absolute h-1 bg-slate-900 rounded-full top-full mt-2 m-auto left-0 right-0"
                />
              )}
            </div>
            <div className="relative h-full">
              <Link href="/tournament">
                <span className="cursor-pointer">선물 월드컵</span>
              </Link>
              {pathName === "/tournament" && (
                <motion.div
                  layoutId="nav_under_bar"
                  className="w-14 h-1 absolute bg-slate-900 rounded-full top-full mt-2 m-auto left-0 right-0"
                />
              )}
            </div>
            <button className="h-full" onClick={onClickLogoutBtn}>
              로그아웃
            </button>
            <Image
              onClick={onClickAvatarImage}
              src={session.user.image!}
              alt="avatar_url"
              width={200}
              height={200}
              className="w-12 h-12 rounded-full"
            />
          </>
        ) : (
          <>
            <div className="relative h-full">
              <Link href="/items">
                <span className="cursor-pointer">선물 조회하기</span>
              </Link>
              {pathName === "/items" && (
                <motion.div
                  layoutId="nav_under_bar"
                  className="w-14 h-1 absolute bg-slate-900 rounded-full top-full mt-2 m-auto left-0 right-0"
                />
              )}
            </div>
            <div className="relative h-full">
              <Link href="/tournament">
                <span className="cursor-pointer">선물 월드컵</span>
              </Link>
              {pathName === "/tournament" && (
                <motion.div
                  layoutId="nav_under_bar"
                  className="w-14 absolute h-1 bg-slate-900 rounded-full top-full mt-2 m-auto left-0 right-0"
                />
              )}
            </div>
            <button onClick={onClickLoginBtn}>로그인</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
