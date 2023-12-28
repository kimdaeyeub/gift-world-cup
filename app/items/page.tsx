"use client";

import ItemCard from "@/components/ItemCard";
import React, { useEffect, useState } from "react";

interface IGift {
  title: string;
  description: string;
  tags: string[];
  image: string;
  count: number;
  creator: string;
  _id: string;
}

const Items = () => {
  const [gifts, setGifts] = useState<IGift[]>();
  useEffect(() => {
    const getGifts = async () => {
      try {
        const response = await fetch("/api/gifts", { method: "GET" });

        if (response.ok) {
          const json = await response.json();
          setGifts(json);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getGifts();
  }, []);
  return (
    <div className="flex flex-col justify-start items-center py-10 w-full">
      <div className="relative w-1/2 h-full">
        <input
          className="absolute w-full h-12 rounded-full outline-none border px-16 shadow-lg"
          placeholder="선물 찾아보기.."
        />
        <svg
          className="w-8 absolute top-6 left-6 bottom-0 text-gray-400 m-auto"
          data-slot="icon"
          fill="none"
          strokeWidth="2.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          ></path>
        </svg>
      </div>

      <section className="min-h-96 w-full py-24 px-32 grid grid-cols-4 gap-5">
        {gifts?.map((item) => (
          <ItemCard key={item._id} hasRank {...item} />
        ))}
      </section>
    </div>
  );
};

export default Items;
