"use client";

import ItemCard from "@/components/ItemCard";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface IUser {
  name: string;
  email: string;
  image: string;
  id: string;
}

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      {session?.user ? (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="w-full h-full bg-white px-44 py-10 border-b-2 border-slate-300 grid grid-cols-2 gap-10">
            <div className="w-full h-full flex justify-center items-center">
              <Image
                src={session.user.image!}
                alt="avatar_image"
                width={500}
                height={500}
                className="w-72 h-72 rounded-full"
              />
            </div>
            <div className="w-full h-full flex flex-col justify-center items-start">
              <h1 className="text-4xl font-medium">{session.user.name}</h1>
              <h1 className="text-xl font-medium mt-6">{session.user.email}</h1>
            </div>
          </div>
          <div className="w-full h-full bg-white grid grid-cols-4 gap-4 px-32 py-12">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      ) : (
        <div>Login please</div>
      )}
    </>
  );
};

export default Profile;
