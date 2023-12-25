"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log(session?.user);
    if (!session?.user) {
      router.push("/");
    }
  }, []);
  return <div>Profile</div>;
};

export default Profile;
